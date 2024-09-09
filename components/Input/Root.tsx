"use client";

import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export function Root({ className, children, ...props }: Props) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-zinc-300 focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100 px-3 py-2 shadow-sm transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
