import { useState, useEffect } from "react";
import { getContainerClass, getGridClass } from "@/lib/utils";

export function useResponsiveContainer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return {
    isMobile,
    getContainerClass: () => getContainerClass(isMobile),
    getGridClass: () => getGridClass(isMobile),
  };
}
