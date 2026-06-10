import {
  Building,
  Building2,
  Code2,
  Compass,
  Database,
  GitBranch,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  LayoutGrid,
  type LucideIcon,
  Megaphone,
  Newspaper,
  Palmtree,
  Rocket,
  ServerCog,
  ShoppingCart,
  Truck,
} from "lucide-react";
import type { NavIconName } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<NavIconName, LucideIcon> = {
  compass: Compass,
  "code-2": Code2,
  database: Database,
  "server-cog": ServerCog,
  megaphone: Megaphone,
  handshake: Handshake,
  "heart-pulse": HeartPulse,
  "building-2": Building2,
  landmark: Landmark,
  "shopping-cart": ShoppingCart,
  "graduation-cap": GraduationCap,
  truck: Truck,
  "layout-grid": LayoutGrid,
  rocket: Rocket,
  palmtree: Palmtree,
  building: Building,
  newspaper: Newspaper,
  "git-branch": GitBranch,
};

export function NavIcon({
  name,
  className,
}: {
  name: NavIconName;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  return <Icon className={cn("shrink-0", className)} aria-hidden />;
}
