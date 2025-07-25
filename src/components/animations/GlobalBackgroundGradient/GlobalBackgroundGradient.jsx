import { cn } from "../../../lib/utils";
import { useEffect, useRef, useState } from "react";
import styles from './GlobalBackgroundGradient.module.css';

export const GlobalBackgroundGradient = ({
  gradientBackgroundStart = "rgb(15, 23, 42)",
  gradientBackgroundEnd = "rgb(30, 41, 59)",
  firstColor = "96, 165, 250",
  secondColor = "168, 85, 247",
  thirdColor = "34, 197, 94",
  fourthColor = "251, 191, 36",
  fifthColor = "239, 68, 68",
  pointerColor = "102, 126, 234",
  size = "80%",
  blendingValue = "hard-light",
  interactive = true,
  className
}) => {
  const interactiveRef = useRef(null);
  const containerRef = useRef(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.documentElement.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.documentElement.style.setProperty("--first-color", firstColor);
    document.documentElement.style.setProperty("--second-color", secondColor);
    document.documentElement.style.setProperty("--third-color", thirdColor);
    document.documentElement.style.setProperty("--fourth-color", fourthColor);
    document.documentElement.style.setProperty("--fifth-color", fifthColor);
    document.documentElement.style.setProperty("--pointer-color", pointerColor);
    document.documentElement.style.setProperty("--size", size);
    document.documentElement.style.setProperty("--blending-value", blendingValue);
  }, [gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(styles.container, className)}
      onMouseMove={interactive ? handleMouseMove : undefined}
      style={{
        background: `linear-gradient(40deg, var(--gradient-background-start), var(--gradient-background-end))`
      }}
    >
      <svg className={styles.hiddenSvg}>
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      <div
        className={cn(
          styles.gradientsContainer,
          isSafari ? styles.safariBlur : styles.chromeBlur
        )}
      >
        <div className={cn(styles.gradientFirst, styles.gradientBase)}></div>
        <div className={cn(styles.gradientSecond, styles.gradientBase)}></div>
        <div className={cn(styles.gradientThird, styles.gradientBase)}></div>
        <div className={cn(styles.gradientFourth, styles.gradientBase)}></div>
        <div className={cn(styles.gradientFifth, styles.gradientBase)}></div>

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(styles.interactiveGradient, styles.gradientBase)}
          ></div>
        )}
      </div>
    </div>
  );
};