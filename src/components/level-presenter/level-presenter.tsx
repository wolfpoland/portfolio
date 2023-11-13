"use client";
import { FC, memo, useEffect } from "react";
import { useTrail, animated } from "@react-spring/web";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export type LevelPresenterProps = {
  levelCount: number;
  filledLevels: number;
  className?: string;
};

const Container: FC<ContainerProps> = memo(
  ({ children = null, className = "" }) => {
    return (
      <div data-testid="level-presenter-container" className={`${className}`}>
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export const LevelPresenter: FC<LevelPresenterProps> = memo(
  ({ levelCount, filledLevels, className = "" }) => {
    const springs = useTrail(levelCount, {
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 200,
      config: { tension: 220, friction: 120 },
    });

    useEffect(() => {
      if (filledLevels > levelCount) {
        throw new Error(
          "filledLevels cannot be greater then levelCount in LevelPresenter component",
        );
      }
    }, [filledLevels, levelCount]);

    if (!levelCount) {
      return <Container className={className} />;
    }

    const isFilledLevel = (index: number) => index < filledLevels;

    return (
      <Container className={className}>
        <div className="h-[15px] mb-2 w-full flex-row-reverse flex items-center justify-center gap-3">
          {springs.map((props, index) => (
            <animated.div
              data-testid={
                isFilledLevel(index)
                  ? "level-presenter-level-filled"
                  : "level-presenter-level"
              }
              style={props}
              key={index}
              className={`flex-1 rounded-sm h-full ${
                isFilledLevel(index) ? "bg-muted-foreground" : "bg-muted"
              }`}
            />
          ))}
        </div>
        {levelCount && (
          <div className="flex justify-between">
            <div data-testid="level-presenter-max-scale" className="text-sm">
              Master
            </div>
            <div data-testid="level-presenter-min-scale" className="text-sm">
              Rookie
            </div>
          </div>
        )}
      </Container>
    );
  },
);

LevelPresenter.displayName = "LevelPresenter";
