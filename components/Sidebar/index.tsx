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
  LucideSearch,
  SquareStack,
  Users,
} from "lucide-react";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <aside className="h-svh sticky top-0 left-0 border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo className="mx-1" />
      <Input.Root className="mx-1">
        <Input.Preffix>
          <LucideSearch className="h-5 w-5 text-zinc-500" />
        </Input.Preffix>
        <Input.Control placeholder="Search" />
      </Input.Root>

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
