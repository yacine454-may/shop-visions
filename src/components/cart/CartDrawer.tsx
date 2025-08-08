import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash } from "lucide-react";

const fmt = (cents: number) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(cents / 100);

const CartDrawer = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const { items, increment, decrement, remove, totalCents, clear } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[92vw] sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4 max-h-[70vh] overflow-auto pr-2">
          {items.length === 0 && (
            <p className="text-muted-foreground">Your cart is empty.</p>
          )}
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex items-center gap-3">
              <img src={product.image} alt={product.alt} className="size-16 rounded-md object-cover" loading="lazy" />
              <div className="flex-1">
                <div className="font-medium leading-tight">{product.name}</div>
                <div className="text-sm text-muted-foreground">{fmt(product.price)}</div>
                <div className="mt-2 inline-flex items-center gap-2">
                  <Button size="icon" variant="outline" onClick={() => decrement(product.id)} aria-label="Decrease quantity"><Minus /></Button>
                  <span className="w-8 text-center">{qty}</span>
                  <Button size="icon" onClick={() => increment(product.id)} aria-label="Increase quantity"><Plus /></Button>
                </div>
              </div>
              <Button variant="ghost" onClick={() => remove(product.id)} aria-label="Remove from cart"><Trash /></Button>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-border pt-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-medium">{fmt(totalCents)}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={clear}>Clear</Button>
            <Button className="flex-1" onClick={() => alert("Connect Supabase + Stripe to enable checkout.")}>Checkout</Button>
          </div>
          <p className="text-xs text-muted-foreground">For payments & auth, connect Supabase and Stripe. This demo uses local cart only.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
