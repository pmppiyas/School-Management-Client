import banner1 from "@/app/_Assets/banner1.jpg";
import banner2 from "@/app/_Assets/village1.jpg";
import logo from "@/app/_Assets/logo.png";
import abc from "@/app/_Assets/abc.jpg";

import kid1 from "@/app/_Assets/kid1.jpg";
import kid2 from "@/app/_Assets/kid2.jpg";
import kid3 from "@/app/_Assets/kid3.jpg";
import kid4 from "@/app/_Assets/kid4.jpg";
import kid5 from "@/app/_Assets/kid5.jpg";
import kid6 from "@/app/_Assets/kid6.jpg";
import kid7 from "@/app/_Assets/student1.jpg";
// Initialize allAssets first
const allAssets = {
  banner1,
  banner2,
  logo,
  abc,
  kid1,
  kid2,
  kid3,
  kid4,
  kid5,
  kid6,
  kid7,
};

// Define cardData AFTER allAssets is initialized
const cardData = [
  {
    title: "Learning & Fun",
    description:
      "We believe in playful learning that sparks curiosity and creativity.",
    imageUrl: allAssets.kid1.src, // Now allAssets is available
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
    imageUrl: "/api/placeholder/150/150",
    coverUrl: "/api/placeholder/400/150",
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    iconColor: "text-blue-400",
  },
  // Add remaining cards...
];

// CountData
const countData = [
  {
    icon: allAssets.kid2,
    count: 100,
    text: "Happy Students",
    bg: "violet", // Calm, trustworthy
    subBg: "var(--color-orange)", // Energetic contrast
  },
  {
    icon: allAssets.kid3,
    count: 50,
    text: "Dedicated Teachers",
    bg: "pink", // Stable, growth-oriented
    subBg: "var(--color-violet)", // Sophisticated complement
  },
  {
    icon: allAssets.kid4,
    count: 200,
    text: "Books Read",
    bg: "orange", // Passion, motivation
    subBg: "var(--color-pink)", // Soft contrast
  },
  {
    icon: allAssets.kid5,
    count: 300,
    text: "Projects Completed",
    bg: "pink", // Creativity, innovation
    subBg: "var(--color-yellow)", // Bright, inspiring
  },
];
export { cardData, allAssets, countData };

export default allAssets;
