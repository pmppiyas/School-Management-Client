import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ item }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  console.log(item);
  return (
    <div className="w-full shadow-md h-[350px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group flex items-center justify-center flex-col gap-[10px] ">
      <div className={`absolute inset-0 opacity-10 bg-${item.bg}`}></div>
      {/*  scalable background and image  */}
      <div
        className="w-[130px] relative z-0 h-[130px] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[-1] group-hover:before:scale-[20] before:transition-all before:duration-700 before:rounded-full before:bg-blue-200 flex items-center justify-center "
        ref={ref}
      >
        {inView && (
          <CountUp
            className="text-4xl lg:text-5xl font-medium"
            end={item.count}
          />
        )}
      </div>
      {/*  the title  */}
      <h3 className="text-[1.5rem] font-bold z-20">{item.text}</h3>
    </div>
  );
};

export default AnimatedCard;
