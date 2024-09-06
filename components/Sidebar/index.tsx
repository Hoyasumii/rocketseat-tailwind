import { Input } from "@/components";
import { Logo } from "./Logo";

export function Sidebar() {
  return (
    <nav className="border-r border-zinc-200 px-5 py-8 space-y-6">
      <Logo />
      <Input.Search />
    </nav>
  );
}
