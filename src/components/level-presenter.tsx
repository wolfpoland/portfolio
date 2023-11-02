"use client";
import { FC, memo } from "react";
import { useTrail, animated } from "@react-spring/web";

export type LevelPresenterProps = {
  levelCount: number;
  filledLevels: number;
  className?: string;
};

export const LevelPresenter: FC<LevelPresenterProps> = memo(
  ({ levelCount, filledLevels, className = "" }) => {
    const springs = useTrail(levelCount, {
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 200,
      config: { tension: 220, friction: 120 },
    });

    return (
      <div className={`${className}`}>
        <div className="h-[15px] mb-2 w-full flex-row-reverse flex items-center justify-center gap-3">
          {springs.map((props, index) => (
            <animated.div
              style={props}
              key={index}
              className={`flex-1 rounded-sm h-full ${
                index < filledLevels ? "bg-muted-foreground" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <div className="text-sm">Master</div>
          <div className="text-sm">Rookie</div>
        </div>
      </div>
    );
  },
);

LevelPresenter.displayName = "LevelPresenter";
