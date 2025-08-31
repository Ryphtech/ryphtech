/*
	Installed from https://reactbits.dev/tailwind/
*/

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    // Wait for fonts to load before creating SplitText
    const initSplitText = () => {
      const split = SplitText.create(rootRef.current.querySelector("p"), {
        type: "chars",
        charsClass: "inline-block will-change-transform",
      });

    split.chars.forEach((el) => {
      const c = el;
      gsap.set(c, { attr: { "data-content": c.innerHTML } });
    });

    const handleMove = (e) => {
      split.chars.forEach((el) => {
        const c = el;
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

      const el = rootRef.current;
      el.addEventListener("pointermove", handleMove);

      return () => {
        el.removeEventListener("pointermove", handleMove);
        split.revert();
      };
    };

    // Check if fonts are loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        initSplitText();
      });
    } else {
      // Fallback for browsers that don't support document.fonts
      setTimeout(initSplitText, 100);
    }

    return () => {
      // Cleanup will be handled by the inner function
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`m-[7vw] max-w-[800px] font-mono text-[clamp(14px,4vw,32px)] text-white ${className}`}
      style={style}
    >
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
