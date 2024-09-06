import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export function Preffix({ className, children, ...props }: Props) {
  return (
    <div className={`${children}`} {...props}>
      {children}
    </div>
  );
}
