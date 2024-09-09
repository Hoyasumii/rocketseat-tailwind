/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps } from "react";

type Props = ComponentProps<"label"> & {
  title: string;
  description?: string;
  className?: never;
  children?: never;
};

export function Label({
  title,
  description,
  className,
  children,
  ...props
}: Props) {
  return (
    <label className="text-sm font-medium text-zinc-700" {...props}>
      {title}
      {description && (
        <span className="mt-0 5 block text-sm font-normal text-zinc-500">
          {description}
        </span>
      )}
    </label>
  );
}
