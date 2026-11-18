"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, RotateCcw, Truck, Users } from "lucide-react";
import {
  blogPosts,
  countdownDate,
  heroSlides,
  megaSaleBg,
  popularCategories,
  productBySlug,
  whatWeDo,
} from "@/lib/amaali/data";
import { ProductCard } from "@/components/sites/amaali/ProductCard";

const OUR_PRODUCTS = [
  "campania-table",
  "chaise-lounge-chandelier",
  "arm-chair-office-msh34",
  "table-wood-industry",
  "sofa-living-room",
  "desk-wood-document",
];

const FEATURED_PRODUCTS = [
  "campania-table",
  "blue-long-sofa",
  "table-wood-industry",
  "glass-dining-room-table",
  "sofa-living-room",
];

const WWD_CENTER_IMAGE = "/sites/amaali/2018/04/ama-ali_furniture-a1.jpg";
const MEGA_SALE_PLANT = "/sites/amaali/2018/05/image-parallax.png";

/* ------------------------------------------------------------------ */
/* Hero slider                                                         */
/* ------------------------------------------------------------------ */

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      6000,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="amaali-hero" aria-label="Featured collections">
      <div
        className="amaali-hero-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="amaali-hero-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.title} className="amaali-hero-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="amaali-hero-img" src={slide.localImage} alt={slide.title} />
              <div className="amaali-hero-content">
                <p className="amaali-hero-kicker">{slide.kicker}</p>
                <h2 className="amaali-hero-title">{slide.title}</h2>
                <p className="amaali-hero-offer">{slide.offer}</p>
                {slide.regular && slide.sale ? (
                  <p className="amaali-hero-price">
                    <del>{slide.regular}</del>
                    <ins>{slide.sale}</ins>
                  </p>
                ) : null}
                {slide.extra ? <p className="amaali-hero-extra">{slide.extra}</p> : null}
                <div className="amaali-hero-buttons">
                  <Link href="/shop" className="shop-button bg-white">
                    Browse Shop
                  </Link>
                  <Link href="/shop" className="shop-button bg-transparent">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="amaali-hero-dots">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            className={`amaali-hero-dot${i === index ? " active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mega Sale countdown — counts UP from the source date (in the past)  */
/* ------------------------------------------------------------------ */

type Elapsed = { days: number; hrs: number; min: number; sec: number };

function elapsedSince(dateStr: string): Elapsed {
  const target = new Date(dateStr).getTime();
  const diff = Math.max(0, Date.now() - target);
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff % 86400000) / 3600000);
  const min = Math.floor((diff % 3600000) / 60000);
  const sec = Math.floor((diff % 60000) / 1000);
  return { days, hrs, min, sec };
}

function MegaSale() {
  const [elapsed, setElapsed] = useState<Elapsed>({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const tick = () => setElapsed(elapsedSince(countdownDate));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells: { value: number; label: string }[] = [
    { value: elapsed.days, label: "Days" },
    { value: elapsed.hrs, label: "Hrs" },
    { value: elapsed.min, label: "Min" },
    { value: elapsed.sec, label: "Sec" },
  ];

  return (
    <section
      className="amaali-mega-sale"
      style={{ backgroundImage: `url(${megaSaleBg})` }}
      aria-label="Mega sale"
    >
      <div className="amaali-container">
        <div className="amaali-mega-sale-inner">
          <div className="amaali-mega-sale-text">
            <h3>MEGA SALE!</h3>
            <h2>
              UP TO 70 <sup>%</sup> <sub>OFF</sub>
            </h2>
            <div className="amaali-countdown" role="timer" aria-label="Time since sale started">
              {cells.map((c) => (
                <div key={c.label} className="amaali-count-circle">
                  <span className="count-num">{c.value}</span>
                  <span className="count-label">{c.label}</span>
                </div>
              ))}
            </div>
            <div>
              <Link href="/shop" className="shop-button bg-white">
                Browse Shop
              </Link>
              <Link href="/shop" className="shop-button bg-transparent">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="amaali-mega-sale-plant">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MEGA_SALE_PLANT} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Featured products carousel (3 at a time)                            */
/* ------------------------------------------------------------------ */

function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  const items = FEATURED_PRODUCTS.map((s) => productBySlug(s)).filter((p) => p !== undefined);
  const maxStart = Math.max(0, items.length - 3);
  const prev = () => setIndex((i) => (i - 1 + (maxStart + 1)) % (maxStart + 1));
  const next = () => setIndex((i) => (i + 1) % (maxStart + 1));

  return (
    <div className="amaali-carousel">
      <button type="button" className="amaali-carousel-arrow prev" aria-label="Previous products" onClick={prev}>
        <ChevronLeft size={20} />
      </button>
      <div className="amaali-carousel-viewport">
        <div
          className="amaali-carousel-track"
          style={{ transform: `translateX(-${index * 33.3333}%)` }}
        >
          {items.map((p) => (
            <div key={p.slug} className="amaali-carousel-slide">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="amaali-carousel-arrow next" aria-label="Next products" onClick={next}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* What We Do                                                          */
/* ------------------------------------------------------------------ */

function WwdItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="amaali-wwd-item">
      <span className="amaali-wwd-letter" aria-hidden="true">
        {title.charAt(0).toUpperCase()}
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link href="/about" className="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Homepage                                                            */
/* ------------------------------------------------------------------ */

export default function Home() {
  const ourProducts = OUR_PRODUCTS.map((s) => productBySlug(s)).filter((p) => p !== undefined);

  return (
    <>
      <HeroSlider />

      {/* 2. Popular Categories */}
      <section className="amaali-section" aria-label="Popular categories">
        <div className="amaali-container">
          <div className="amaali-section-head">
            <h2>Popular Categories</h2>
            <p>Our outstanding products</p>
          </div>
          <div className="amaali-cat-grid">
            {popularCategories.map((cat) => (
              <a key={cat.name} href={cat.url} className="amaali-cat-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.localImage} alt={cat.name} loading="lazy" />
                <h3>{cat.name}</h3>
                <span className="cat-count">
                  {cat.count} Product{cat.count === 1 ? "" : "s"}
                </span>
                <span className="cat-range">From {cat.priceRange}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Products */}
      <section className="amaali-section" style={{ paddingTop: 0 }} aria-label="Our products">
        <div className="amaali-container">
          <div className="amaali-section-head">
            <h2>Our Products</h2>
            <p>Show top items</p>
          </div>
          <div className="amaali-products-grid">
            {ourProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mega Sale */}
      <MegaSale />

      {/* 5. Featured Products */}
      <section className="amaali-section" aria-label="Featured products">
        <div className="amaali-container">
          <div className="amaali-section-head">
            <h2>FEARUTED PRODUCTS</h2>
            <p>Show featured items</p>
          </div>
          <FeaturedCarousel />
        </div>
      </section>

      {/* 6. What We Do */}
      <section className="amaali-section amaali-wwd" aria-label="What we do">
        <div className="amaali-container">
          <div className="amaali-section-head">
            <h2>What We Do</h2>
            <p>From Ama.Ali shop</p>
          </div>
          <div className="amaali-wwd-grid">
            <div className="amaali-wwd-col left">
              {whatWeDo.slice(0, 3).map((w) => (
                <WwdItem key={w.title} title={w.title} text={w.text} />
              ))}
            </div>
            <div className="amaali-wwd-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={WWD_CENTER_IMAGE} alt="Armchair" loading="lazy" />
            </div>
            <div className="amaali-wwd-col right">
              {whatWeDo.slice(3).map((w) => (
                <WwdItem key={w.title} title={w.title} text={w.text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Latest News */}
      <section className="amaali-section" aria-label="Latest news">
        <div className="amaali-container">
          <div className="amaali-section-head">
            <h2>Latest News</h2>
            <p>From the blog</p>
          </div>
          <div className="amaali-news-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="amaali-news-card">
                <Link href={`/blog/${post.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} loading="lazy" />
                </Link>
                <div className="amaali-news-body">
                  <Link href="/blog" className="amaali-news-cat">
                    {post.category}
                  </Link>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <div className="amaali-news-meta">
                    by: <Link href="/blog">7uptheme</Link> |{" "}
                    <Link href={`/blog/${post.slug}`}>0 Comments</Link>
                  </div>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="read-more">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="amaali-view-all">
            <Link href="/blog" className="shop-button bg-dark">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Service strip */}
      <section className="amaali-services" aria-label="Our services">
        <div className="amaali-container">
          <div className="amaali-services-grid">
            <div className="amaali-service">
              <span className="amaali-service-icon">
                <Truck size={26} />
              </span>
              <div>
                <h3>
                  <Link href="/shop">Free Delivery World Wide*</Link>
                </h3>
                <p>
                  <Link href="/about">Learn More</Link>
                </p>
              </div>
            </div>
            <div className="amaali-service">
              <span className="amaali-service-icon">
                <Users size={26} />
              </span>
              <div>
                <h3>Loved By Our Customers.</h3>
                <p>5000+ Reviews</p>
              </div>
            </div>
            <div className="amaali-service">
              <span className="amaali-service-icon">
                <RotateCcw size={26} />
              </span>
              <div>
                <h3>Free Returns And Free Shipping</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
