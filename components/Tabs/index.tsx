"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";

export function Tabs() {
  const [active, setActive] = useState<string>("My details");

  return (
    <RadixTabs.Root value={active} onValueChange={setActive}>
      <RadixTabs.List className="mt-6 flex w-full items-stretch gap-4 border-b border-zinc-200">
        <TabItem title="My details" selected={"My details" === active} />
        <TabItem title="Profile" selected={"Profile" === active} />
        <TabItem title="Password" selected={"Password" === active} />
        <TabItem title="Team" selected={"Team" === active} />
        <TabItem title="Plan" selected={"Plan" === active} />
        <TabItem title="Billing" selected={"Billing" === active} />
        <TabItem title="Email" selected={"Email" === active} />
        <TabItem title="Notifications" selected={"Notifications" === active} />
        <TabItem title="Integrations" selected={"Integrations" === active} />
        <TabItem title="API" selected={"API" === active} />
      </RadixTabs.List>
    </RadixTabs.Root>
  );
}
