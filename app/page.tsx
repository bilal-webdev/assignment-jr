import Details from "@/components/Detail/Details";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import LowerBanner from "@/components/LowerBanner/LowerBanner";
import TopBanner from "@/components/TopBanner/TopBanner";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Banner Section */}
      <TopBanner />

      {/* Details Section */}
      <Details />

      {/* Lower Banner Section */}
      <LowerBanner />
    </>
  );
}
