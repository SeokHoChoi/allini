import { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
  wrapperId: string;
  className?: string | Array<string>;
}

/**
 * @description
 * - 포털의 초기 설정 및 스타일을 더 쉽게 제어하기 위해 div를 새로 생성했습니다!
 * - wrapperId: index.html에서 모달창이 하위에 들어갈 부모 Id
 * - className 사용법:
 *      1. className={styles.클래스명}
 *      2. className={[styles.클래스명, styles.클래스명]}
 */
export default function ReactPortal({
  children,
  wrapperId,
  className = "",
}: Props) {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    el.current.className = Array.isArray(className)
      ? className.join(" ")
      : className || "";
  }, [className]);

  useEffect(() => {
    const portalRoot = document.getElementById(wrapperId);
    if (!portalRoot) {
      throw new Error(
        `ReactPortal: ${wrapperId} id를 가진 element가 없습니다.`
      );
    }
    portalRoot.appendChild(el.current);

    return () => {
      portalRoot.removeChild(el.current);
    };
  }, [wrapperId]);

  return ReactDOM.createPortal(children, el.current);
}
