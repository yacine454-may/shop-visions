import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

type Props = { product: Product; onAdd: (p: Product) => void };

const fmt = (cents: number) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(cents / 100);

const ProductCard = ({ product, onAdd }: Props) => {
  return (
    <article className="group rounded-lg border border-border p-3 transition-transform hover:-translate-y-0.5 hover:shadow-elevated">
      <div className="aspect-square overflow-hidden rounded-md bg-muted">
        <img
          src={product.image}
          alt={product.alt}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="pt-3">
        <h3 className="text-base font-semibold">{product.name}</h3>
        <p className="text-muted-foreground text-sm">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-medium">{fmt(product.price)}</span>
          <Button size="sm" onClick={() => onAdd(product)}>Add to cart</Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
