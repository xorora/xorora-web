import Link from "next/link";
import { Chevron } from "@/components/ui/chevron";
import { ROUTES } from "@/lib/navigation";

interface IndustryBreadcrumbProps {
  name: string;
}

export function IndustryBreadcrumb({ name }: IndustryBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-2.5 font-sans text-[13.5px] text-white/60"
    >
      <Link
        href={ROUTES.home}
        className="text-white/60 no-underline transition-colors hover:text-white"
      >
        Home
      </Link>
      <Chevron size={13} className="text-white/40" />
      <Link
        href={ROUTES.industries}
        className="text-white/60 no-underline transition-colors hover:text-white"
      >
        Industries
      </Link>
      <Chevron size={13} className="text-white/40" />
      <span className="font-semibold text-white">{name}</span>
    </nav>
  );
}
