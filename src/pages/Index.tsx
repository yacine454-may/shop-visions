import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CategoryFilter from "@/components/shop/CategoryFilter";
import SearchBar from "@/components/shop/SearchBar";
import CartDrawer from "@/components/cart/CartDrawer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useMemo, useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const { add } = useCart();

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return products.filter((p) =>
      (category === "All" || p.category === category) &&
      (!q || p.name.toLowerCase().includes(q))
    );
  }, [category, query]);

  const handleAdd = (p: (typeof products)[number]) => {
    add(p);
    toast.success("Added to cart", { description: p.name });
    setOpenCart(true);
  };

  return (
    <>
      <Helmet>
        <title>Modern E-commerce UI | NovaShop</title>
        <meta name="description" content="Shop premium minimalist essentials. Fast, responsive e-commerce UI with search, filters, and cart." />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header onOpenCart={() => setOpenCart(true)} />
      <main>
        <Hero />
        <section className="container py-10 surface-muted-gradient rounded-xl mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryFilter active={category} onSelect={setCategory} />
          </div>
        </section>
        <FeaturedProducts products={filtered} onAdd={handleAdd} />
      </main>
      <Footer />
      <CartDrawer open={openCart} onOpenChange={setOpenCart} />
    </>
  );
};

export default Index;
