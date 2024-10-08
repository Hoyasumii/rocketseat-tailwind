import { ComponentProps } from "react";

export type TextareaProps = ComponentProps<"textarea">;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100 px-3 py-2 shadow-sm outline-none"
      {...props}
    />
  );
}
