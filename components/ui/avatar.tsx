import { cn } from "@/lib/utils";

interface AvatarProps {
  name?: string;
  size?: number;
  ring?: boolean;
  className?: string;
}

export function Avatar({
  name = "XO",
  size = 44,
  ring,
  className,
}: AvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-400 to-indigo-700 font-sans font-semibold text-white",
        ring && "border-2 border-white shadow-sm",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}
