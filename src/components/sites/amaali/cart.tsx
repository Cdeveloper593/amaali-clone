"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { productBySlug, type AmaaliProduct } from "@/lib/amaali/data";

export type CartLine = { slug: string; qty: number };

type ShopState = {
  cart: CartLine[];
  wishlist: string[];
  compare: string[];
  addToCart: (slug: string, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  toggleCompare: (slug: string) => void;
  cartCount: number;
  cartTotal: number;
  cartDetailed: { product: AmaaliProduct; qty: number }[];
};

const ShopContext = createContext<ShopState | null>(null);

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate persisted shop state after mount (client-only storage).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(read<CartLine[]>("amaali-cart", []));
    setWishlist(read<string[]>("amaali-wishlist", []));
    setCompare(read<string[]>("amaali-compare", []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("amaali-cart", JSON.stringify(cart));
  }, [cart, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem("amaali-wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem("amaali-compare", JSON.stringify(compare));
  }, [compare, hydrated]);

  const addToCart = useCallback((slug: string, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((l) => l.slug === slug);
      if (found)
        return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
      return [...prev, { slug, qty }];
    });
  }, []);
  const removeFromCart = useCallback((slug: string) => {
    setCart((prev) => prev.filter((l) => l.slug !== slug));
  }, []);
  const setQty = useCallback((slug: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((l) => l.slug !== slug)
        : prev.map((l) => (l.slug === slug ? { ...l, qty } : l)),
    );
  }, []);
  const clearCart = useCallback(() => setCart([]), []);
  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }, []);
  const toggleCompare = useCallback((slug: string) => {
    setCompare((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev.slice(-2), slug],
    );
  }, []);

  const value = useMemo<ShopState>(() => {
    const cartDetailed = cart
      .map((l) => ({ product: productBySlug(l.slug), qty: l.qty }))
      .filter((d): d is { product: AmaaliProduct; qty: number } => Boolean(d.product));
    const priceOf = (p: AmaaliProduct) => {
      const pr = p.price;
      const v = pr.sale ?? pr.price ?? pr.min ?? pr.regular ?? "0";
      return parseFloat(String(v).replace(/,/g, "")) || 0;
    };
    return {
      cart,
      wishlist,
      compare,
      addToCart,
      removeFromCart,
      setQty,
      clearCart,
      toggleWishlist,
      toggleCompare,
      cartCount: cart.reduce((n, l) => n + l.qty, 0),
      cartTotal: cartDetailed.reduce((n, d) => n + priceOf(d.product) * d.qty, 0),
      cartDetailed,
    };
  }, [cart, wishlist, compare, addToCart, removeFromCart, setQty, clearCart, toggleWishlist, toggleCompare]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopState {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}
