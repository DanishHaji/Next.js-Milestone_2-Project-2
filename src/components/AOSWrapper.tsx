// src/components/AOSWrapper.tsx
"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSWrapperProps {
  children: ReactNode;
}

export default function AOSWrapper({ children }: AOSWrapperProps) {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 160, easing: "ease-out-back" });
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
