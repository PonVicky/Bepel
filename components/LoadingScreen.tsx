"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  // Start visible so the overlay covers the page immediately — no flash of content.
  // On repeat visits (sessionStorage key exists) we hide it right after hydration.
  const [visible, setVisible] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (sessionStorage.getItem("bepel_loader_shown")) {
      // Already shown this session — hide instantly (white-on-white, imperceptible)
      setVisible(false);
      return;
    }

    sessionStorage.setItem("bepel_loader_shown", "true");
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed inset-0 z-[9999] bg-canvas-white flex items-center justify-center select-none pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center gap-10"
          >
            <Image
              src="/bepelLogo.svg"
              alt="Bepel"
              width={52}
              height={52}
              priority
              className="w-[52px] h-[52px] object-contain"
            />
            <div className="w-[96px] h-px bg-deep-graphite/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-deep-graphite rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
