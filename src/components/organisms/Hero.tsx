import HeroImage from "@/components/atoms/HeroImage";
import HeroText from "@/components/molecules/HeroText";

export default function Hero() {
  return (
    <section className="hero">
      <HeroText />
      <HeroImage />
    </section>
  );
}