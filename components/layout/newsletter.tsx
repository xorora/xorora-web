"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);

  if (sent) {
    return (
      <span className="flex items-center gap-2 font-sans text-[15px] text-tangerine-400">
        <Check className="h-[18px] w-[18px]" aria-hidden />
        Subscribed — thank you.
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2.5">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Your work email"
        className={cn(
          "min-w-[-180px] flex-1 rounded-r-md border bg-white/5 px-[15px] py-3 font-sans text-[14.5px] text-white outline-hidden transition-shadow",
          focused ? "border-tangerine-500 shadow-focus" : "border-white/18",
        )}
      />
      <Button variant="primary" onClick={() => value && setSent(true)}>
        Subscribe
      </Button>
    </div>
  );
}
