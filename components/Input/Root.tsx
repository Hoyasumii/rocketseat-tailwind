"use client";

import { ComponentProps, useState } from "react";
import { Context } from "./Context";

type Props = ComponentProps<"div">;

export function Root({ className, children, ...props }: Props) {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <Context.Provider value={{ active, toggleActive }}>
      <div
        className={`flex items-center gap-2 rounded-lg border ${
          active ? "border-sky-600" : "border-zinc-300"
        } px-3 py-2 shadow-sm transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </div>
    </Context.Provider>
  );
}
