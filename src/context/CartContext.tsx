import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = { product: Product; qty: number };

type CartContextType = {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clear: () => void;
  totalCents: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "lovable_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const add = (product: Product) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const remove = (productId: string) => setItems((prev) => prev.filter((i) => i.product.id !== productId));
  const increment = (productId: string) =>
    setItems((prev) => prev.map((i) => (i.product.id === productId ? { ...i, qty: i.qty + 1 } : i)));
  const decrement = (productId: string) =>
    setItems((prev) => prev.flatMap((i) => (i.product.id === productId ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])));
  const clear = () => setItems([]);

  const totalCents = useMemo(() => items.reduce((sum, i) => sum + i.product.price * i.qty, 0), [items]);

  const value = { items, add, remove, increment, decrement, clear, totalCents };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
