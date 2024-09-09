import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export function Preffix({ className, children, ...props }: Props) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}
