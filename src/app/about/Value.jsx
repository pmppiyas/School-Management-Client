import Image from "next/image";
import React from "react";
import allAssets from "@/app/_Assets/Assets";

function Value() {
  const cardData = [
    {
      title: "Learning & Fun",
      description:
        "We believe in playful learning that sparks curiosity and creativity.",
      imageUrl: allAssets.kid1,
      coverUrl: "/api/placeholder/400/150",
      bgColor: "bg-gradient-to-r from-violet-500 to-purple-600",
      textColor: "text-violet-700",
      buttonColor: "bg-violet-600 hover:bg-violet-700",
      iconColor: "text-violet-400",
    },
    {
      title: "Explore & Discover",
      description:
        "Children learn best when they can freely explore and make discoveries.",
      imageUrl: allAssets.kid2,
      coverUrl: "/api/placeholder/400/150",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      iconColor: "text-blue-400",
    },
    {
      title: "Create & Innovate",
      description:
        "We encourage hands-on projects that develop problem-solving skills.",
      imageUrl: allAssets.kid5,
      coverUrl: "/api/placeholder/400/150",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-600",
      textColor: "text-green-700",
      buttonColor: "bg-green-600 hover:bg-green-700",
      iconColor: "text-green-400",
    },
  ];
  return (
    <div className="bg-background py-10 flex flex-col items-center h-max">
      <h1 className="text-3xl font-bold mb-6">Our Care Values</h1>

      <div className="flex flex-wrap justify-center gap-8 p-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" lg:max-w-sm w-full bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            {/* Cover Image */}
            <div className={`h-16  relative`}></div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <Image
                src={card.imageUrl}
                className="rounded-full border-4 border-white shadow-lg -mt-16 z-10"
                alt={`child-${index + 1}`}
                width={180}
                height={180}
              />
            </div>

            {/* Profile Content */}
            <div className={`px-6 py-4 text-center ${card.bgColor} pt-12 inset-0 `}>
              <h2 className="text-2xl font-bold mb-2 ">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Value;
