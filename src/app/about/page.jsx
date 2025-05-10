"use client";
import Banner from "./Banner";
import Value from "./Value";
import CountPage from "./CountPage";
import { ParallaxProvider } from "react-scroll-parallax";

function page() {
  return (
    <div>
      <ParallaxProvider>
        <div className="h-20"></div>
        <Banner></Banner>
        <Value></Value>
        <CountPage></CountPage>
      </ParallaxProvider>
    </div>
  );
}

export default page;
