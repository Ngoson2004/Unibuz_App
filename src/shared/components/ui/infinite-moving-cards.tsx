import { cn } from "@/shared/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {items.map((item, _idx) => (
          <li
            className="relative flex w-[350px] max-w-full shrink-0 flex-col justify-between rounded-2xl border-transparent px-8 py-6 md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, #e5e7eb, #d1d5db)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 font-satoshi-md text-sm leading-[1.6] text-black">
                {item.quote}
              </span>
            </blockquote>
            <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
              {item.image && (
                <img
                  src={item.image}
                  alt={`${item.name}'s avatar`}
                  className="size-10 rounded-full object-cover"
                />
              )}
              <span className="flex flex-1 flex-col gap-1">
                <span className="flex items-center gap-2 font-satoshi text-sm leading-[1.6] text-black">
                  {item.name}
                  {item.icon}
                </span>
                <span className="font-satoshi text-sm leading-[1.6] text-black">
                  {item.title}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export type InfiniteMovingCardsProps = Parameters<
  typeof InfiniteMovingCards
>[0];
