"use client";
import { animated, useSpring } from "@react-spring/web";
import { FC, memo, useEffect, useState } from "react";

type TypingAnimationProps = {
  text: string;
  speed?: number;
  dataTestId?: string;
  e2e?: boolean;
};

export const TypingAnimation: FC<TypingAnimationProps> = memo(
  ({ text = "", speed = 100, dataTestId, e2e }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, [displayedText, text, speed]);

    const props = useSpring({
      opacity: displayedText ? 1 : 0,
      from: { opacity: 0 },
    });

    if (e2e)
      return (
        <div className="mb-1 h-[24px]" data-testid={dataTestId}>
          {text}
        </div>
      );

    return (
      <animated.div
        data-testid={dataTestId}
        className="mb-1 h-[24px]"
        style={props}
      >
        {displayedText}
      </animated.div>
    );
  },
);

TypingAnimation.displayName = "TypingAnimation";
