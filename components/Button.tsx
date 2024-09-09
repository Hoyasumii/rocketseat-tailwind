import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80",
    "duration-300 transition-all",
  ],

  variants: {
    theme: {
      primary: "bg-violet-600 text-white hover:bg-violet-700",
      outline: "border border-zinc-300 text-zinc-700 hover:bg-zinc-50",
      icon: "rounded-md px-2 hover:bg-zinc-50 shadow-none",
    },
  },

  defaultVariants: {
    theme: "primary",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function Button({ theme, ...props }: ButtonProps) {
  return <button {...props} className={button({ theme })} />;
}
