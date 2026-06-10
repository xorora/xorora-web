interface SlantProps {
  top: string;
  bottom: string;
  h?: number;
  dir?: "left" | "right";
}

export function Slant({ top, bottom, h = 90, dir = "left" }: SlantProps) {
  const clipPath =
    dir === "left"
      ? "polygon(0 0, 100% 0, 100% 0, 0 100%)"
      : "polygon(0 0, 100% 0, 100% 100%, 0 0)";

  return (
    <div
      className="relative overflow-hidden leading-none"
      style={{ height: h, background: bottom }}
    >
      <div className="absolute inset-0" style={{ background: top, clipPath }} />
    </div>
  );
}
