import Image from "next/image";
import BannerSection from "./components/home-components/BannerSection"

export default function Home() {
  return (
  <>
  <BannerSection/>
  <h1 className="text-3xl font-bold text-center">Welcome to the App</h1>
   
  </>
  );
}
