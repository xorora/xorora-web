"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { MegaNav } from "@/components/layout/mega-nav";
import { ROUTES, type SiteNavigation } from "@/lib/navigation";
import { LetsTalkModal } from "./lets-talk-modal";

interface LetsTalkModalContextValue {
  open: () => void;
  close: () => void;
}

const LetsTalkModalContext = createContext<LetsTalkModalContextValue | null>(
  null,
);

export function useLetsTalkModal() {
  const context = useContext(LetsTalkModalContext);
  if (!context) {
    throw new Error(
      "useLetsTalkModal must be used within LetsTalkModalProvider",
    );
  }
  return context;
}

interface LetsTalkModalProviderProps {
  children: React.ReactNode;
  industryNames: string[];
}

export function LetsTalkModalProvider({
  children,
  industryNames,
}: LetsTalkModalProviderProps) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open: openModal, close: closeModal }),
    [openModal, closeModal],
  );

  return (
    <LetsTalkModalContext.Provider value={value}>
      {children}
      <LetsTalkModal
        open={open}
        onClose={closeModal}
        industryNames={industryNames}
      />
    </LetsTalkModalContext.Provider>
  );
}

interface ConnectedMegaNavProps {
  current?: "work";
  nav: SiteNavigation;
}

export function ConnectedMegaNav({ current, nav }: ConnectedMegaNavProps) {
  const { open } = useLetsTalkModal();
  const pathname = usePathname();
  const navCurrent =
    current ?? (pathname === ROUTES.ourWork ? "work" : undefined);

  return <MegaNav current={navCurrent} onLetsTalk={open} nav={nav} />;
}

interface LetsTalkContactLinkProps {
  children: React.ReactNode;
  className?: string;
}

export function LetsTalkContactLink({
  children,
  className,
}: LetsTalkContactLinkProps) {
  const { open } = useLetsTalkModal();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
