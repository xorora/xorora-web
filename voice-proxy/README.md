# Losono Voice Proxy

A tiny standalone WebSocket relay so the browser can use the Losono **voice**
API **without ever seeing the secret key**.

```
Browser  ──WS──▶  this proxy (holds LOSONO_API_KEY)  ──WS──▶  losono.xorora.com voice API
```

## Why it's a separate service (not in the Next.js app)

**Vercel cannot host a WebSocket server.** Serverless/edge functions can't accept
or hold persistent WS upgrades. So this must run on a host that can keep a
long-lived connection open: **Railway, Render, Fly.io, a VPS, etc.** Do **not**
try to deploy it to Vercel.

## Run locally

```bash
cd voice-proxy
npm install
cp .env.example .env        # then edit .env
LOSONO_API_KEY=... npm start # or rely on .env via your shell
```

Health check: `GET http://localhost:8787/health` → `ok`.

## Deploy

1. Push this folder to your chosen host (Railway/Render/Fly/VPS).
2. Set env vars on the host (NOT in code):
   - `LOSONO_API_KEY` — the **secret** key (rotate the leaked one first).
   - `LOSONO_AGENT_ID` — `xorora`.
   - `ALLOWED_ORIGINS` — `https://xorora.vercel.app` (+ your prod domain).
3. Note the public URL, e.g. `wss://voice.yourhost.com`.
4. Point the website widget at it via `NEXT_PUBLIC_VOICE_PROXY_URL`.

## Security notes

- The secret key lives only in this service's env — never in the website bundle.
- `ALLOWED_ORIGINS` stops anyone else using your relay as a free voice gateway.
- **Rotate** the key shared in chat before going live.

## Status / what's left

This relay is **protocol-agnostic** — it just pipes frames, so it works
regardless of the audio format. The **browser-side** voice client still needs
Losono's exact voice protocol (PCM sample rate, bit depth, channels, and any
handshake/control messages). That spec is not in the public docs and the
playground is behind dashboard auth — grab the **playground client source** from
your Losono dashboard so the in-page widget can capture/play audio correctly.
