import { Book, Mouse, MouseIcon, Sun, Watch } from "lucide-react";
import Image from "next/image";
import React from "react";
import allAssets from "@/app/_Assets/Assets";

function Banner() {
  return (
    <div className=" bg-pink/20  ">
      <div className="flex  flex-col md:flex-row px-2 lg:px-0 gap-8 max-w-6xl mx-auto py-10 md:py-14 ">
        <div className="flex-3/5  space-y-6">
          <h1 className="text-4xl md:text-5xl font-medium">
            Play as you learn
          </h1>
          <p className="text-lg ">
            Our philosophy is learning through play as we offer a stimulating
            environment for children. Our philosophy is learning through play as
            we offer a stimulating environment for children.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex gap-2 items-center ">
              <Watch
                size={80}
                strokeWidth={1}
                className="bg-yeallow  font-thin rounded-full p-3 hover:rotate-[360deg] transition-all duration-1000"
              ></Watch>{" "}
              <h4 className="text-xl">Full Day Sessions</h4>
            </div>
            <div className="flex gap-2 items-center">
              <MouseIcon
                size={80}
                strokeWidth={1}
                className="bg-pink  font-thin rounded-full p-3 hover:rotate-[360deg] transition-all duration-1000"
              ></MouseIcon>{" "}
              <h4 className="text-xl">Online Access</h4>
            </div>
            <div className="flex gap-2 items-center">
              <Book
                size={80}
                strokeWidth={1}
                className="bg-olive  font-thin rounded-full p-3 hover:rotate-[360deg] transition-all duration-1000"
              ></Book>{" "}
              <h4 className="text-xl">Varied Classes</h4>
            </div>
            <div className="flex gap-2 items-center">
              <Sun
                size={80}
                strokeWidth={1}
                className="bg-violet  font-thin rounded-full p-3 hover:rotate-[360deg] transition-all duration-1000"
              ></Sun>{" "}
              <h4 className="text-xl">Full Day Sessions</h4>
            </div>
          </div>
        </div>
        <div className="flex-2/5 ">
          {" "}
          <Image src={allAssets.abc} alt="abc" className="rounded-lg"></Image>
        </div>
      </div>
    </div>
  );
}

export default Banner;
