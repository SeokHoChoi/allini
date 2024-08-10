import { useState, useEffect } from "react";

/**
 * 사용자의 화면 크기에 따라 모바일 여부를 판단하는 커스텀 훅
 */
export function useResponsive() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
