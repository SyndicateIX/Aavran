import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showTagline?: boolean;
  tagline?: string;
  className?: string;
}

export function Logo({
  size = "md",
  showText = true,
  showTagline = true,
  tagline = "Intelligent Food Packaging",
  className,
  ...props
}: LogoProps) {
  const iconSizes = {
    sm: "size-8",
    md: "size-9.5",
    lg: "size-12",
    xl: "size-16",
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-3xl",
  };

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)} {...props}>
      {/* Exact Circular Badge from the new logo */}
      <div
        className={cn(
          "relative grid place-items-center transition-transform duration-300 hover:scale-105 shrink-0",
          iconSizes[size]
        )}
      >
        <img
          src="/logo/logo-icon-square.png"
          alt="AAVRAN Logo Badge"
          className="size-full object-contain drop-shadow-sm rounded-full"
          loading="eager"
        />
      </div>

      {/* Brand Typography in Caps Lock */}
      {showText && (
        <div className="leading-tight">
          <div className="flex items-center gap-2">
            <span className={cn("font-display font-extrabold uppercase tracking-[0.14em] text-foreground", titleSizes[size])}>
              AAVRAN
            </span>
            <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              AI
            </span>
          </div>
          {showTagline && (
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
              {tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
