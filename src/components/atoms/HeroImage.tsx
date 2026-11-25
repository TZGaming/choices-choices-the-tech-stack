import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="heroImage">
      <Image
        src="/Electriseerm_001.jpg"
        alt="Grote Elektriseer Machine"
        fill
      />
    </div>
  );
}