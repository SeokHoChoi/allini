import { ReactNode } from "react";
import clsx from "clsx";
import styels from "./index.module.scss";

export default function WrapperBox({ children }: { children: ReactNode }) {
  return <div className={clsx(styels.wrapperBoxArea)}>{children}</div>;
}
