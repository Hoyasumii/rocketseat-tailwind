import { Svg } from "@/components";

export function Logo() {
  return (
    <strong className="flex items-center gap-2 text-xl font-semibold text-zind-900">
      <Svg.Logo />
      <span>Untitled UI</span>
    </strong>
  );
}
