"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  ShoppingBasket,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import {
  footerBg,
  formatPrice,
  menu,
  productBySlug,
  productDescription,
} from "@/lib/amaali/data";
import { useShop } from "./cart";

/* ------------------------------------------------------------------ */
/* Link resolution: known local routes stay local, everything else     */
/* points back at the source demo.                                     */
/* ------------------------------------------------------------------ */

const SOURCE = "https://amaali.7uptheme.net";

// All 24 source blog posts live locally under /post/<slug>.
const POST_SLUGS = new Set([
  "wordpress-coding-basics",
  "wordpress-theme-creation-with",
  "building-wp-themes-with-bootstrap",
  "learn-wordpress-development",
  "post-no-sidebar",
  "post-left-sidebar",
  "post-format-audio",
  "post-format-gallery",
  "post-format-video",
  "post-format-image",
  "post-format-standard",
  "surround-yourself-with-angels-learning-is-cool",
  "lorem-khaled-ipsum-is-a-major",
  ...Array.from({ length: 11 }, (_, i) => `lorem-khaled-ipsum-is-a-major-${i + 2}`),
]);

function resolveLink(raw: string): { href: string; external: boolean } {
  if (raw === "#" || raw.startsWith("/?") || raw.startsWith("/#")) {
    return { href: "#", external: false };
  }
  let path = raw;
  if (raw.startsWith("http")) {
    if (!raw.startsWith(SOURCE)) return { href: raw, external: true };
    path = raw.slice(SOURCE.length) || "/";
  }
  const clean = path.split("?")[0].replace(/\/$/, "") || "/";
  if (clean === "/") return { href: "/", external: false };
  const homeMatch = /^\/home-(\d+)$/.exec(clean);
  if (homeMatch) {
    return homeMatch[1] === "1"
      ? { href: "/", external: false }
      : { href: `/home-${homeMatch[1]}`, external: false };
  }
  // Product, vendor-store and taxonomy/archive paths keep their source
  // paths locally (Phase A cloned every one of them).
  if (
    clean.startsWith("/product/") ||
    clean.startsWith("/product-category/") ||
    clean.startsWith("/product-tag/") ||
    clean.startsWith("/brand/") ||
    clean.startsWith("/category/") ||
    clean.startsWith("/tag/") ||
    clean.startsWith("/author/") ||
    clean.startsWith("/vendors/") ||
    clean.startsWith("/blog/page/") ||
    clean.startsWith("/shop/page/")
  ) {
    return { href: clean, external: false };
  }
  const local = [
    "/cart",
    "/checkout",
    "/my-account",
    "/my-account-2",
    "/about",
    "/contact",
    "/blog",
    "/blog-grid",
    "/blog-list",
    "/blog-masonry",
    "/wishlist",
    "/vendors",
    "/shop",
    "/shop-list",
    "/shop-grid-2-column",
    "/shop-grid-3-column",
    "/shop-grid-4-column",
    "/shop-grid-5-column",
    "/shop-grid-6-column",
    "/shop-full-sidebar-left",
    "/shop-full-sidebar-right",
    "/grid-sidebar-right",
    "/list-sidebar-right",
    "/page-accordions",
    "/page-charts",
    "/page-messages",
    "/page-progress-bar",
    "/page-team-member",
    "/page-testimonial",
    "/sample-page",
    "/sample-page-2",
    "/tool-panel",
    "/error-404",
    "/vendor_dashboard",
    "/vendor_dashboard/shop_settings",
    "/vendor_dashboard/product_orders",
  ];
  if (local.includes(clean)) return { href: clean, external: false };
  const postMatch = /^\/([\w-]+)$/.exec(clean);
  if (postMatch && POST_SLUGS.has(postMatch[1])) {
    return { href: `/post/${postMatch[1]}`, external: false };
  }
  return { href: `${SOURCE}${clean}/`, external: true };
}

function MenuLink({
  href,
  children,
  onClick,
  className,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const { href: to, external } = resolveLink(href);
  if (external) {
    return (
      <a href={to} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/* Brand icons (lucide-react no longer ships brand glyphs) — simple-icons paths. */
function BrandIcon({ d, size = 16 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon
    size={size}
    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  />
);
const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon
    size={size}
    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  />
);
const PinterestIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon
    size={size}
    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.627 0 11.986-5.367 11.986-12.013C24.003 5.367 18.644.001 12.017.001z"
  />
);
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon
    size={size}
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  />
);

/* ------------------------------------------------------------------ */
/* Featured mega-menu carousel                                         */
/* ------------------------------------------------------------------ */

const FEATURED_MEGA_SLUGS = [
  "womens-museum-watch",
  "nail-pink-women",
  "womens-44-mbw-ib-round",
  "scarleton-shoulder-bag-2",
];

function FeaturedMegaCarousel() {
  const { addToCart } = useShop();
  const [start, setStart] = useState(0);
  const items = useMemo(
    () => FEATURED_MEGA_SLUGS.map((s) => productBySlug(s)).filter((p) => p !== undefined),
    [],
  );
  const visible = [items[start % items.length], items[(start + 1) % items.length]].filter(
    (p) => p !== undefined,
  );
  const prev = () => setStart((s) => (s - 1 + items.length) % items.length);
  const next = () => setStart((s) => (s + 1) % items.length);

  return (
    <div className="amaali-mini-carousel">
      <button type="button" className="amaali-mini-arrow prev" aria-label="Previous featured products" onClick={prev}>
        <ChevronLeft size={16} />
      </button>
      <div className="amaali-mini-track">
        {visible.map((p) => {
          const price = formatPrice(p);
          return (
            <div key={p.slug} className="amaali-mini-product">
              <Link href={`/product/${p.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image ?? ""} alt={p.name} loading="lazy" />
              </Link>
              {p.category ? <span className="mini-cat">{p.category}</span> : null}
              <h4>
                <Link href={`/product/${p.slug}`}>{p.name}</Link>
              </h4>
              <div className="mini-price">
                {price.regular ? <del>{price.regular}</del> : null}
                {price.sale ?? price.display}
              </div>
              <button type="button" className="amaali-mini-add" onClick={() => addToCart(p.slug)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <button type="button" className="amaali-mini-arrow next" aria-label="Next featured products" onClick={next}>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

type MenuChild = { label: string; url: string; children?: MenuChild[] };

function SubmenuList({ items }: { items: MenuChild[] }) {
  return (
    <ul className="amaali-submenu">
      {items.map((c) => (
        <li key={c.url} className="amaali-submenu-item">
          <MenuLink href={c.url}>
            {c.label}
            {["Home 7", "Home 8", "Home 9"].includes(c.label) ? (
              <span className="new-tag">New</span>
            ) : null}
            {c.children ? <ChevronRight size={13} /> : null}
          </MenuLink>
          {c.children ? <SubmenuList items={c.children} /> : null}
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const { cartCount } = useShop();
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shopItem = menu.find((m) => m.label === "Shop");
  const shopLinks = shopItem?.megaLinks ?? [];
  // Raw list partitions exactly as the source groups it:
  // 11 Shop Pages, 11 Product Pages, 7 More Pages.
  const shopGroups: { title: string; links: { label: string; url: string }[] }[] = [
    { title: "Shop Pages", links: shopLinks.slice(0, 11) },
    { title: "Product Pages", links: shopLinks.slice(11, 22) },
    { title: "More Pages", links: shopLinks.slice(22) },
  ];

  return (
    <>
      <div className={`amaali-header-spacer${sticky ? " active" : ""}`} aria-hidden="true" />
      <header className={`amaali-header${sticky ? " sticky" : ""}`}>
        <div className="amaali-container">
          <div className="amaali-header-top">
            <h1 style={{ margin: 0 }}>
              <Link href="/" className="amaali-logo" aria-label="Ama.Ali home">
                <span className="amaali-logo-cart">
                  <ShoppingCart size={22} />
                </span>
                <span>
                  AMA<span className="dot">.</span>ALI
                </span>
              </Link>
            </h1>
            <div className="amaali-header-icons">
              <Link href="/my-account" className="amaali-header-icon" aria-label="My Account">
                <User size={21} />
              </Link>
              <Link href="/cart" className="amaali-header-icon" aria-label="Basket">
                <ShoppingBasket size={21} />
                {cartCount > 0 ? <span className="amaali-cart-count">{cartCount}</span> : null}
              </Link>
              <button
                type="button"
                className="amaali-header-icon amaali-mobile-btn"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        <nav className="amaali-main-nav" aria-label="Main navigation">
          <div className="amaali-container">
            <ul>
              {menu.map((item) => (
                <li key={item.label} className="amaali-nav-item">
                  {item.label === "Featured" ? (
                    <>
                      <span className="amaali-nav-link">
                        {item.label} <ChevronDown size={14} className="chev" />
                      </span>
                      <div className="amaali-mega">
                        <div className="amaali-featured-mega">
                          <div className="amaali-mega-promo">
                            <h3>
                              <a href="#">EXAMPLUI COLONIU</a>
                            </h3>
                            <p className="desc">{productDescription}</p>
                          </div>
                          <div className="amaali-mega-featured">
                            <h2>Featured Product</h2>
                            <FeaturedMegaCarousel />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : item.label === "Shop" ? (
                    <>
                      <MenuLink href={item.url}>
                        {item.label} <ChevronDown size={14} className="chev" />
                      </MenuLink>
                      <div className="amaali-mega">
                        <div className="amaali-mega-cols">
                          {shopGroups.map((g) => (
                            <div key={g.title} className="amaali-mega-col">
                              <h3 className="amaali-mega-title">{g.title}</h3>
                              <ul>
                                {g.links.map((l) => (
                                  <li key={l.url}>
                                    <MenuLink href={l.url}>{l.label}</MenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.children ? (
                    <>
                      <MenuLink href={item.url}>
                        {item.label} <ChevronDown size={14} className="chev" />
                      </MenuLink>
                      <SubmenuList items={item.children} />
                    </>
                  ) : (
                    <MenuLink href={item.url}>{item.label}</MenuLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className={`amaali-mobile-menu${mobileOpen ? " open" : ""}`}>
          <ul>
            {menu.map((item) => (
              <li key={item.label}>
                {item.label === "Featured" || item.label === "Shop" ? (
                  <span className="mobile-group">{item.label}</span>
                ) : (
                  <MenuLink href={item.url} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </MenuLink>
                )}
                {item.children ? (
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.url}>
                        <MenuLink href={c.url} onClick={() => setMobileOpen(false)}>
                          {c.label}
                          {["Home 7", "Home 8", "Home 9"].includes(c.label) ? (
                            <span className="new-tag">New</span>
                          ) : null}
                        </MenuLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.label === "Shop" ? (
                  <ul>
                    {shopGroups.flatMap((g) => g.links).map((l) => (
                      <li key={l.url}>
                        <MenuLink href={l.url} onClick={() => setMobileOpen(false)}>
                          {l.label}
                        </MenuLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const ACCOUNT_LINKS = [
  { label: "My Account", href: "/my-account" },
  { label: "Orders and Returns", href: "/my-account" },
  { label: "Customer Service", href: "/contact" },
  { label: "Search Terms", href: "/shop" },
  { label: "Advanced Search", href: "/shop" },
  { label: "FAQs", href: "/contact" },
];

const BOTTOM_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Guidelines", href: "/privacy-policy" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer
      className="amaali-footer"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="amaali-footer-main">
        <div className="amaali-container">
          <div className="amaali-footer-grid">
            <div>
              <h3>AMA.ALI SHOP</h3>
              <p>
                Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              </p>
              <ul>
                <li>
                  <a href="#">Download Profile</a>
                </li>
                <li>
                  <a href="#">Download Catalog</a>
                </li>
              </ul>
              <p className="hotline">
                HOT-LINE:<span>0989 177 556</span>
              </p>
            </div>
            <div>
              <h3>ACCOUNT</h3>
              <ul>
                {ACCOUNT_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>AMA.ALI SHOP</h3>
              <p>
                Make sure you dont miss interesting happenings by joining our
                newsletter program.
              </p>
              {subscribed ? (
                <p className="amaali-newsletter-ok">
                  Thank you for subscribing to our newsletter.
                </p>
              ) : (
                <form
                  className="amaali-newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                  />
                  <button type="submit">subscribe</button>
                </form>
              )}
              <div className="amaali-social">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon size={16} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <TwitterIcon size={16} />
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">
                  <PinterestIcon size={16} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="amaali-footer-bottom">
        <div className="amaali-container amaali-footer-bottom-inner">
          <ul>
            {BOTTOM_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <p>
            Design by:{" "}
            <a href="https://7uptheme.com" target="_blank" rel="noreferrer">
              7uptheme.com
            </a>
          </p>
          <div className="amaali-payments" aria-label="Payment methods">
            {["VISA", "MC", "PayPal", "AMEX", "DISCOVER"].map((p) => (
              <span key={p} className="amaali-pay-box">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Back to top                                                         */
/* ------------------------------------------------------------------ */

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`amaali-back-top${visible ? " visible" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={20} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Rotating viewer pop-up (bottom-left)                                */
/* ------------------------------------------------------------------ */

const VIEWER_SLUGS = [
  "blue-long-sofa",
  "campania-table",
  "sofa-living-room",
  "table-wood-industry",
  "glass-dining-room-table",
];

export function ViewerPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(134);

  useEffect(() => {
    if (dismissed) return;
    const show = window.setTimeout(() => setVisible(true), 4000);
    return () => window.clearTimeout(show);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % VIEWER_SLUGS.length);
      setCount(80 + Math.floor(Math.random() * 101));
    }, 15000);
    return () => window.clearInterval(id);
  }, [visible, dismissed]);

  if (!visible || dismissed) return null;
  const product = productBySlug(VIEWER_SLUGS[index % VIEWER_SLUGS.length]);
  if (!product) return null;

  return (
    <div className="amaali-viewer-popup" role="status">
      <button
        type="button"
        className="amaali-viewer-close"
        aria-label="Close"
        onClick={() => {
          setDismissed(true);
          setVisible(false);
        }}
      >
        <X size={14} />
      </button>
      <Link href={`/product/${product.slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image ?? ""} alt={product.name} />
      </Link>
      <span className="viewer-text">
        <Link href={`/product/${product.slug}`}>{product.name}</Link>
        <br />
        {count} people seeing this product right now
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Site shell                                                          */
/* ------------------------------------------------------------------ */

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <BackToTop />
      <ViewerPopup />
    </>
  );
}
