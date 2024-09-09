"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { Item } from "./Item";

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode;
  placeholder: string;
}

function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 data-[state=open]:rounded-b-none data-[state=open]:border-b-0 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white data-[state=open]:border-t-0 data-[state=open]:rounded-t-none shadow animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

export default { Root: Select, Item } as const;
