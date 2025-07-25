import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} style={{ position: 'relative', zIndex: 20 }}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0 colorful-clip"
              style={{
                filter: filter ? "blur(2px)" : "none",
                position: 'relative',
                zIndex: 20,
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight", className)} style={{ position: 'relative', zIndex: 20 }}>
      <div className="mt-4">
        {renderWords()}
      </div>
    </div>
  );
};
