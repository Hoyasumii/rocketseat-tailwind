"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

type Props = {
  title: string;
  selected?: boolean;
};

export function TabItem({ title, selected = false }: Props) {
  return (
    <Tabs.Trigger
      value={title}
      className="group outline-none relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {selected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  );
}
