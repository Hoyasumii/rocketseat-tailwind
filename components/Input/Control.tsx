"use client";

import { ComponentProps, useContext } from "react";
import { Context } from "./Context";

type Props = ComponentProps<"input">;

export function Control({placeholder, ...props}: Props) {
  const context = useContext(Context);

  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      placeholder={placeholder}
      onFocus={(e) => {
        context?.toggleActive();
        if (props.onFocus) {
          props?.onFocus(e);
        }
      }}
      onBlur={(e) => {
        context?.toggleActive();
        if (props.onBlur) {
          props?.onBlur(e);
        }
      }}
      {...props}
    />
  );
}
