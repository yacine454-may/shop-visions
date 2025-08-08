import heroImage from "@/assets/hero-banner.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleShop = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60" aria-hidden="true" />
      <img
        src={heroImage}
        alt="Modern e-commerce hero banner with futuristic gradient lighting"
        className="absolute inset-0 size-full object-cover object-center opacity-70"
        loading="eager"
      />
      <div className="relative container py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="mb-6">Your next favorite product is here</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Discover premium, minimalist essentials crafted for everyday performance. Designed with precision, delivered with care.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="hero" size="lg" onClick={handleShop}>
              Shop now
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#categories">Browse categories</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
