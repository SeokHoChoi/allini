import { ReactNode } from "react";
import clsx from "clsx";
import styels from "./index.module.scss";

export default function WrapperBox({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx(styels.wrapperBoxArea, className)}>{children}</div>
  );
}
