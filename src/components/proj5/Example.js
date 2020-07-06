import * as React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Example = () => {
    const constraintsRef = useRef(null);
  return (
    <>
      {/* <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
    /> */}
      <motion.div className="drag-area" ref={constraintsRef} />

      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      />
    </>
  );
};
