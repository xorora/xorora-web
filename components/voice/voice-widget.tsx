"use client";

import { Mic, Phone, PhoneOff, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Custom voice interface for the Losono agent.
 *
 * SECURITY: this NEVER touches the secret key. It connects to our own voice
 * proxy (NEXT_PUBLIC_VOICE_PROXY_URL), which holds the secret server-side and
 * relays frames to Losono. The browser only ever talks to the proxy.
 *
 * PROTOCOL NOTE: Losono's voice WebSocket is documented only as "PCM audio
 * frames (see playground client)" — the exact sample rate / bit depth / framing
 * is not public. The constants below are reasonable defaults; confirm them
 * against the playground client and adjust if audio is garbled/silent.
 */

// --- Audio format (MUST match Losono's actual voice protocol) -----------------
const SAMPLE_RATE = 16000; // Hz — try 24000 if 16000 sounds wrong
const FRAME_SAMPLES = 2048; // samples per outbound chunk
// -----------------------------------------------------------------------------

const PROXY_URL = process.env.NEXT_PUBLIC_VOICE_PROXY_URL;

type Status = "idle" | "connecting" | "live" | "error";

function floatToPcm16(input: Float32Array): ArrayBuffer {
  const out = new Int16Array(input.length);
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]));
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return out.buffer;
}

function pcm16ToFloat(buffer: ArrayBuffer): Float32Array {
  const view = new Int16Array(buffer);
  const out = new Float32Array(view.length);
  for (let i = 0; i < view.length; i++) out[i] = view[i] / 0x8000;
  return out;
}

export function VoiceWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const playheadRef = useRef(0);

  const stop = useCallback(() => {
    processorRef.current?.disconnect();
    processorRef.current = null;
    streamRef.current?.getTracks().forEach((t) => {
      t.stop();
    });
    streamRef.current = null;
    if (ctxRef.current?.state !== "closed") void ctxRef.current?.close();
    ctxRef.current = null;
    wsRef.current?.close();
    wsRef.current = null;
    playheadRef.current = 0;
    setStatus("idle");
  }, []);

  const playChunk = useCallback((float: Float32Array) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const buffer = ctx.createBuffer(1, float.length, SAMPLE_RATE);
    buffer.getChannelData(0).set(float);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    const now = ctx.currentTime;
    const startAt = Math.max(now, playheadRef.current);
    source.start(startAt);
    playheadRef.current = startAt + buffer.duration;
  }, []);

  const start = useCallback(async () => {
    if (!PROXY_URL) {
      setError("Voice proxy URL is not configured.");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("connecting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ctx = new AudioContext({ sampleRate: SAMPLE_RATE });
      ctxRef.current = ctx;
      playheadRef.current = ctx.currentTime;

      const ws = new WebSocket(PROXY_URL);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
        setStatus("live");
        const source = ctx.createMediaStreamSource(stream);
        const processor = ctx.createScriptProcessor(FRAME_SAMPLES, 1, 1);
        processorRef.current = processor;
        processor.onaudioprocess = (e) => {
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(floatToPcm16(e.inputBuffer.getChannelData(0)));
          }
        };
        source.connect(processor);
        // Sink to a muted node so the mic isn't echoed locally.
        const sink = ctx.createGain();
        sink.gain.value = 0;
        processor.connect(sink);
        sink.connect(ctx.destination);
      };

      ws.onmessage = (e) => {
        if (e.data instanceof ArrayBuffer) {
          playChunk(pcm16ToFloat(e.data));
        }
        // Text frames (transcripts / turn events) would be parsed here once the
        // protocol is known.
      };

      ws.onerror = () => {
        setError("Voice connection failed.");
        setStatus("error");
        stop();
      };
      ws.onclose = () => {
        if (status === "live") stop();
      };
    } catch (err) {
      setError(
        err instanceof DOMException
          ? "Microphone permission denied."
          : "Could not start voice.",
      );
      setStatus("error");
      stop();
    }
  }, [playChunk, status, stop]);

  // Clean up on unmount.
  useEffect(() => () => stop(), [stop]);

  // Don't render until the proxy is configured (keeps a broken button off prod).
  if (!PROXY_URL) return null;

  return (
    <div className="fixed right-6 bottom-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[300px] rounded-2xl border border-white/12 bg-navy-900 p-5 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-sans font-semibold text-sm text-white">
              Talk to Xorora
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mb-4 font-sans text-[13px] text-white/60 leading-relaxed">
            {status === "live"
              ? "Listening… speak now."
              : status === "connecting"
                ? "Connecting…"
                : error
                  ? error
                  : "Start a live voice conversation with our AI agent."}
          </p>
          {status === "live" ? (
            <button
              type="button"
              onClick={stop}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 font-sans font-semibold text-sm text-white transition-colors hover:bg-red-600"
            >
              <PhoneOff className="h-4 w-4" />
              End call
            </button>
          ) : (
            <button
              type="button"
              onClick={start}
              disabled={status === "connecting"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-tangerine-500 px-4 py-2.5 font-sans font-semibold text-sm text-white transition-colors hover:bg-tangerine-600 disabled:opacity-60"
            >
              <Phone className="h-4 w-4" />
              {status === "connecting" ? "Connecting…" : "Start voice"}
            </button>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-105",
          status === "live"
            ? "animate-pulse bg-red-500"
            : "bg-tangerine-500 hover:bg-tangerine-600",
        )}
        aria-label="Voice assistant"
      >
        <Mic className="h-6 w-6" />
      </button>
    </div>
  );
}
