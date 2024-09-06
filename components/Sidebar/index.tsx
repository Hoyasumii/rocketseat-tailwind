import { Input } from "@/components";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  SquareStack,
  Users,
} from "lucide-react";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo className="mx-1" />
      <Input.Search className="mx-1" />

      <nav className="space-y-0.5">
        <NavItem title={"Home"} icon={Home} />
        <NavItem title={"Dashboard"} icon={BarChart} />
        <NavItem title={"Projects"} icon={SquareStack} />
        <NavItem title={"Tasks"} icon={CheckSquare} />
        <NavItem title={"Reporting"} icon={Flag} />
        <NavItem title={"Users"} icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0 5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <hr className="border-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
}
