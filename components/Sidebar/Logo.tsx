import { Svg } from "@/components";
import { ComponentProps } from "react";

type Props = ComponentProps<"strong">;

export function Logo({ className, ...props }: Props) {
  return (
    <strong
      className={`flex items-center gap-2 text-xl font-semibold text-zind-900 ${className}`}
      {...props}
    >
      <Svg.Logo />
      <span>Untitled UI</span>
    </strong>
  );
}
