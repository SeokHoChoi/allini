import clsx from "clsx";
import styles from "./index.module.scss";

interface GrassSVGProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  hasShadow?: boolean;
  top?: string | number;
  left?: string | number;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  leftHeight?: number;
  rightHeight?: number;
  rotation?: number;
}

const GrassSVG = ({
  width = 49,
  height = 15,
  color = "#00A789",
  hasShadow = false,
  top,
  left,
  position = "static",
  leftHeight = 50,
  rightHeight = 50,
  rotation = 0,
}: GrassSVGProps) => {
  const grassPath = `
    M14.4392 ${(8.56479 * leftHeight) / 50}C12.7414 ${
    (6.6717 * leftHeight) / 50
  } 6.02795 ${(7.00023 * leftHeight) / 50} 4 13
    L45 13C45 13 45 ${(6.2748 * rightHeight) / 50} 39.7651 ${
    (6 * rightHeight) / 50
  }
    C37.8406 ${(6 * rightHeight) / 50} 35.8035 ${
    (7.0076 * rightHeight) / 50
  } 35.096 ${(7.92359 * rightHeight) / 50}
    C34.3886 ${(7.0076 * leftHeight) / 50} 32.3515 ${
    (6 * leftHeight) / 50
  } 30.427 ${(6 * leftHeight) / 50}
    C26.8899 ${(6 * leftHeight) / 50} 25.1921 ${
    (8.28999 * leftHeight) / 50
  } 25.1921 ${(8.28999 * leftHeight) / 50}
    C25.1921 ${(8.28999 * leftHeight) / 50} 23.4943 ${
    (6.2748 * leftHeight) / 50
  } 19.8157 ${(6.2748 * leftHeight) / 50}
    C16.986 ${(6.2748 * leftHeight) / 50} 14.9582 ${
    (7.86249 * leftHeight) / 50
  } 14.4392 ${(8.56479 * leftHeight) / 50}Z
  `;

  const style = {
    position,
    top,
    left,
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 15" // SVG의 내부 좌표 시스템을 고정
      preserveAspectRatio="xMidYMid meet" // SVG가 비율을 유지하면서 주어진 공간에 맞게 조정
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${rotation}, 24.5, 7.5)`}
      className={clsx(styles.grassSVG, { [styles.hasShadow]: hasShadow })}
      style={style}
    >
      <path d={grassPath} fill={color} />
    </svg>
  );
};

export default GrassSVG;
