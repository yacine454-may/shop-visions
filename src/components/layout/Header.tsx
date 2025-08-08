import { Link } from "react-router-dom";
import { ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export const Header = ({ onOpenCart }: { onOpenCart: () => void }) => {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-gradient-to-tr from-brand to-brand2 grid place-items-center shadow-glow">
            <Sparkles className="size-4 text-brand-foreground" />
          </div>
          <span className="text-lg font-semibold">NovaShop</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="#products" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link>
          <Link to="#categories" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
          <Link to="#about" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="#auth">Sign in</Link>
          </Button>
          <Button variant="elevated" onClick={onOpenCart} aria-label="Open cart">
            <ShoppingCart />
            <span className="sr-only">Open cart</span>
            {count > 0 && (
              <span className="ml-1 inline-flex items-center justify-center text-xs font-medium px-1.5 py-0.5 rounded-md bg-brand text-brand-foreground pulse">
                {count}
              </span>
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
