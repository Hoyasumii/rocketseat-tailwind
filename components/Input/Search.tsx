"use client";

import { InputHTMLAttributes, useState } from "react";
import { Search as LucideSearch } from "lucide-react";

type Props = InputHTMLAttributes<HTMLInputElement>;

function onFocus(setState: React.Dispatch<React.SetStateAction<boolean>>) {
  setState(true);
}

function onBlur(setState: React.Dispatch<React.SetStateAction<boolean>>) {
  setState(false);
}

export function Search({ placeholder = "Search", ...props }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={`flex w-full items-center gap-2 rounded-lg border ${
        active ? "border-sky-600" : "border-zinc-300"
      } px-3 py-2 shadow-sm transition-all duration-300`}
    >
      <LucideSearch className="h-5 w-5 text-zinc-500" />
      <input
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
        placeholder={placeholder}
        onFocus={(e) => {
          onFocus(setActive);
          if (props.onFocus) {
            props?.onFocus(e);
          }
        }}
        onBlur={(e) => {
          onBlur(setActive);
          if (props.onBlur) {
            props?.onBlur(e);
          }
        }}
        {...props}
      />
    </div>
  );
}
