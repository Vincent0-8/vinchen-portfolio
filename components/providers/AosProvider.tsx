"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 900, // Gerakan mengambang halus sinematik
      once: true,
      easing: "ease-out-quart", // Kurva pengereman halus
      offset: 140, // Muncul pas saat 140px masuk ke viewport
    });
  }, []);

  return <>{children}</>;
}
