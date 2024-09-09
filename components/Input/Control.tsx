"use client";

import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

export function Control({ placeholder, ...props }: Props) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      placeholder={placeholder}
      {...props}
    />
  );
}
