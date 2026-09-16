import { heroContent } from "./content";

export default function HeroImage() {
  return (
    <div className="relative max-w-[80%] h-[400px] rounded-2xl overflow-hidden hidden md:flex md-ml-auto items-center justify-center">
      <img
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        className="object-cover block"
      />
    </div>
  );
}
