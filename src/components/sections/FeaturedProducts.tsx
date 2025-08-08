import type { Product } from "@/data/products";
import ProductCard from "../shop/ProductCard";

const FeaturedProducts = ({ products, onAdd }: { products: Product[]; onAdd: (p: Product) => void }) => {
  return (
    <section id="products" className="container py-16 animate-fade-in">
      <header className="flex items-center justify-between mb-8">
        <h2>Featured products</h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />)
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
