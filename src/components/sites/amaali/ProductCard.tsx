"use client";

import Link from "next/link";
import { Heart, Scale, ShoppingBasket, Search } from "lucide-react";
import { formatPrice, type AmaaliProduct } from "@/lib/amaali/data";
import { useShop } from "./cart";

function Stars({ pct }: { pct?: number | null }) {
  const filled = pct == null ? 0 : Math.round(pct / 20);
  return (
    <span className="amaali-stars" aria-label={pct == null ? "No rating" : `${filled} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= filled ? "star on" : "star"}>
          ★
        </span>
      ))}
    </span>
  );
}

export function ProductCard({ product }: { product: AmaaliProduct }) {
  const { addToCart, toggleWishlist, toggleCompare, wishlist, compare } = useShop();
  const price = formatPrice(product);
  const inWish = wishlist.includes(product.slug);
  const inCompare = compare.includes(product.slug);
  const img = product.image ?? "/sites/amaali/2018/04/ama-ali_furniture-c1.jpg";

  return (
    <div className="item-product">
      <div className="product-thumb">
        <Link className="product-thumb-link" href={`/product/${product.slug}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={product.name} loading="lazy" />
        </Link>
        {product.badge ? <span className="percent-sale">{product.badge}</span> : null}
        <div className="product-extra-link">
          <button
            type="button"
            className="addcart-link"
            onClick={() => addToCart(product.slug)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBasket size={18} />
            <span>Add to cart</span>
          </button>
          <button
            type="button"
            className={`wishlist-link${inWish ? " active" : ""}`}
            onClick={() => toggleWishlist(product.slug)}
            aria-label="Wishlist"
          >
            <Heart size={18} />
            <span>Wishlist</span>
          </button>
          <button
            type="button"
            className={`compare-link${inCompare ? " active" : ""}`}
            onClick={() => toggleCompare(product.slug)}
            aria-label="Compare"
          >
            <Scale size={18} />
            <span>Compare</span>
          </button>
        </div>
        <Link
          className="product-quick-view"
          href={`/product/${product.slug}`}
          aria-label={`Quick view ${product.name}`}
        >
          <Search size={18} />
        </Link>
      </div>
      <div className="product-info">
        {product.category ? (
          <span className="cat-parent">{product.category}</span>
        ) : null}
        <h3 className="product-title">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <Stars pct={product.ratingPct} />
        <div className="product-price">
          {price.regular ? <del>{price.regular}</del> : null}
          <ins>{price.sale ?? price.display}</ins>
        </div>
      </div>
    </div>
  );
}
