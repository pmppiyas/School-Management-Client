import allAssets, { countData } from "../_Assets/Assets";
import AnimatedCard from "./CountCard";
function CountPage() {
  return (
    <div
      className="relative h-max p-2"
      style={{
        backgroundImage: `url(${allAssets.kid7.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-violet opacity-50"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center min-h-screen gap-8 ">
        {countData.map((item, index) => (
          <AnimatedCard item={item} key={index}></AnimatedCard>
        ))}
      </div>
    </div>
  );
}

export default CountPage;
