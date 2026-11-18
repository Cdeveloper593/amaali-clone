# Amaali Shop — page brief for clone #3

Source demo: https://amaali.7uptheme.net (real demo inside ThemeForest preview 21899267 — cloned the demo, NOT the preview frame). Site title: "Ama-Ali – Just another WordPress site". WordPress/WooCommerce furniture marketplace theme by 7uptheme.
Cloned: Thu 2026-11-12, 12:45–2:45 PM EST slot. Project: ~/workspace/amaali-clone, port 3500.
Access note: plain curl to the demo returns Cloudflare 403; curl WITH browser User-Agent `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36` returns 200. All content/assets were fetched with that UA.

## Route map (59 routes, all verified 200 locally on port 3500)

| Local route | Source | Notes |
|---|---|---|
| `/` (home-1) | https://amaali.7uptheme.net/ | All 8 sections, see below |
| `/shop` | /shop/ | 21 products, working sort/filter/search, grid/list toggle |
| `/shop-grid-2-column` … `/shop-grid-5-column` | /shop-grid-N-column/ | Same shop, N columns |
| `/shop-list` | /shop/?type=list | List layout |
| `/product/<slug>` (21) | /product/<slug>/ | Detail pages, see product notes |
| `/blog`, `/blog-grid`, `/blog-list` | /blog/, /blog-grid/, /blog-list/ | 10 posts p.1 + sidebar |
| `/post/<slug>` (15) | /<slug>/ | 3 homepage posts + 12 more from blog page 1/sidebar |
| `/cart`, `/checkout`, `/my-account` | /cart/, /checkout/, /my-account/ | Local functional demos |
| `/about`, `/contact` | /about/, /contact/ | Real content from source pages |
| `/home-2` … `/home-9` | /home-2/ … /home-9/ | All 8 built as genuine variants |

## Homepage sections (home-1)
1. **Hero slider** — 3 slides, 6s auto-rotate (pauses on hover), horizontal transitions, 3 dots. Slide 1 "CHAIR COLLECTION / DESIGN FURNITURE / 50% OFF CHAIR FANBONG" $900.00 struck, 450.00 orange; slide 2 "HOME VIEW / LIVING ROOM FURNITURE / LIGHT STYLE BY FANBONG / 2000 OPTION"; slide 3 "DINING ROOM DESIGN / IMPRESSIVE 2018 / WOOD AND SOFT PLASTIC" $900.00 struck, 450.00 orange. Images slide1-3.jpg, slide2-4.jpg, slide3-3.jpg. Buttons BROWSE SHOP (white) / SHOP NOW (outlined).
2. **Popular Categories** — HOME (2 products, From 92.43 - 982.42), CLOCK (9, 38.22 - 994.23), TABLES & CHAIR (7, 284.22 - 994.23), RUDE (9, 71.42 - 982.42), TOYS (7, 82.22 - 847.22). Images cat1-1.jpg … cat5.jpg.
3. **Our Products** — 6 products, 3×2: Campania Table £994.23→£323.12 (-68%), Chaise Lounge Chandelier £520.22, Arm Chair Office MSH34 £284.22→£244.11 (-14%), Table Wood Industry £49.00–£93.42, Sofa Living Room £754.31→£343.24 (-54%), Desk Wood Document £632.24→£422.97 (-33%).
4. **Mega Sale banner** — dark bg (bg-parallax.jpg) + plant image (image-parallax.png), "MEGA SALE! / UP TO 70 % OFF". Countdown is TimeCircles `data-date="12/12/2020"` — in the PAST, so it counts UP (was ~2161 days at mapping). Clone ticks live every second from 2020-12-12. Do NOT invent a near-term sale end.
5. **Featured Products** — heading spelled "FEARUTED PRODUCTS" (sic, preserved). Carousel 3-at-a-time, arrows, 5 items: Campania Table, Blue Long Sofa £38.22→£23.52 (-38%), Table Wood Industry, Glass Dining Room Table £530.32→£244.23 (-54%), Sofa Living Room.
6. **What We Do** — 6 items around central armchair image, typos preserved: "DESIGN COFFE FURNITURE", "HANMADE STORE", "BOOK ROOM FURNITURE", "DINING ROOM", "BED ROOM", "MAKEUP ROOM".
7. **Latest News** — 3 posts: "The Future of Senior Housing" (Home Design), "Sustainable Furniture in Modern World" (Living room), "Creating An Organized Multi-Use Room" (Bedroom); "by: 7uptheme", "0 Comments", excerpt "Porem ipsum dolor sit amet…".
8. **Service strip** — "FREE DELIVERY WORLD WIDE* LEARN MORE" / "LOVED BY OUR CUSTOMERS. 5000+ REVIEWS" / "FREE RETURNS AND FREE SHIPPING".

## Header / footer
- Logo "AMA.ALI" (orange dot, orange circle + white cart icon). Menu: DEMO (Home 1–9, "New" tags on 7/8/9), FEATURED mega-menu (left promo "EXAMPLUI COLONIU" + lorem text; right featured-product carousel: Women's Museum Watch £981.24→£534.52, Nail Pink Women £982.42→£442.62, Women's 44-MBW-IB Round £819.11→£433.45, Scarleton Shoulder Bag £77.13→£24.21), SHOP mega-menu (Shop Pages / Product Pages / More Pages), VENDORS, BLOG (incl. Blog Post fly-out), PAGE (Accordions, Charts, Messages, Progress Bar, Team Member, Testimonial).
- Sticky dark header on scroll; orange back-to-top button; bottom-left viewer pop-up "Blue Long Sofa — N people seeing this product right now" (N random 80–180, rotates every 15s, dismissible).
- Footer (dark, bg-footer.jpg): "AMA.ALI SHOP" + "Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam", Download Profile/Catalog, HOT-LINE:0989 177 556; ACCOUNT links; newsletter ("Make sure you dont miss interesting happenings…" — sic "dont") + subscribe (local success state); social icons; bottom bar Terms of Service / Privacy Guidelines / About Us / Blog / Contact Us, "Design by: 7uptheme.com", grey payment boxes.

## Design tokens
- Fonts: Open Sans (body) + PT Sans Narrow (headings, uppercase bold) via next/font/google.
- Accent orange #ff6900; countdown ring #ffcc00 (source `data-color`); dark header/footer #222/#333; light-grey hero bg.
- Product cards: white, 4px radius, orange-circle discount badge top-right, price bar over image bottom on hover, Quick View magnifier top-right on hover.

## Products (21, all real prices in £ — see src/lib/amaali/data.ts)
Campania Table 994.23→323.12 (SKU mns9348), Blue Long Sofa 38.22→23.52, Table Wood Industry £49.00–£93.42 (grouped, SKU mtb2746), Glass Dining Room Table 530.32→244.23 (external), Sofa Living Room 754.31→343.24, Chaise Lounge Chandelier 520.22, Arm Chair Office MSH34 284.22→244.11, Desk Wood Document 632.24→422.97, Women's Museum Watch 981.24→534.52, Nail Pink Women 982.42→442.62, Women's 44-MBW-IB Round 819.11→433.45, Scarleton Shoulder Bag 77.13→24.21, Camouflage Hat 82.12→23.62, Classic Polarized Sunglasses 567.64→363.11, Dell Laptop XPS-L50 Full HD £49.00–£69.00 (variable), Beauty Skincare Face 92.43→33.42, B&O PLAY A1 Portable Wireless 395.23→344.11, Malua® Outdoor 545.34, Micro Lapbell MC4100 346.51 (SKU kad4249, 200 in stock), Xbox Two Wireless Controller 93.42 (SKU rgk7274, 821 in stock). Hats Taibeo Truong Son 301-redirects on the source to Table Wood Industry — clone 307-redirects the same way.

## Product detail behaviour
- Gallery (main + thumbs from product images), qty selector, Add to cart (localStorage), Wishlist/Compare toggles, SKU + Categories meta, tabs Description / Additional Information / Reviews. Variable product: "Select options" dropdown (£49.00/£69.00), add disabled until chosen. Grouped: grouped table (Dell Laptop + Xbox from source grouped form). External: "Buy product" links to source. Reviews: verified single review (5★, 7uptheme, April 27 2018) for Micro Lapbell / Xbox / Table Wood Industry; Campania has 0 reviews ("There are no reviews yet…").

## Blog (15 posts)
Homepage 3 + from blog page 1: Learn WordPress Development, Post No Sidebar, Post Left Sidebar, Post Format Audio/Gallery/Video/Image + sidebar "Latest Posts": Surround Yourself With Angels…, Lorem Khaled Ipsum Is A Major ×4 (May 20 2016). All posts share the demo's single body text (verified from the one downloaded post file). Pagination shows pages 2/3 disabled — pages 2/3 were not downloaded.

## Static pages
- Cart: real localStorage cart table, qty steppers, coupon (local-only note), checkout button, empty state.
- Checkout: billing form + order summary from cart; Place order → local success "Thank you. Your order has been received." + generated AM-###### number; cart cleared. Payment methods are standard WooCommerce ones (source checkout page only showed the empty-cart state, methods not visible).
- My Account: login + register; source's verbatim demo notice (customer/customerofpassword); login accepts those demo credentials; session flag in localStorage; dashboard tabs.
- About: real intro, banner-general-1.jpg, Why Choose Us, 5 testimonials (Vincent Vanilla, Gregor Red, Alexander Green…), Gift Card/Store/Full Support boxes (headings only on source).
- Contact: real address (The Company Name Inc. 4320 St Vincent Place, Glasgow, DC 28), phones 800-6688-999 / 800-8866-404, fax 800-6969-0044, email 7uptheme@gmail.com (decoded from Cloudflare-protected address), hotline 0989 177 556, form (submit labelled "Post Comment"), 6 FAQs. No map embedded — "View on Google Maps" link instead (source embeds a Google Maps iframe).

## Home variants (home-2 … home-9)
All 8 built from their home-N.html files: home-2 electronics/fashion + Galaxy promos; home-3/4/5/6 department-sidebar layouts with distinct promos; home-7 Galaxy + Raypa/Parador + Mega Sale + Client Review; home-8 compact furniture + Mega Sale + "Testimonals" (source spelling); home-9 category tiles + latest/on-sale/most-viewed/recommended. Variants reuse home-1 slides/category images (their own slide files were not downloaded).

## Animations / interactions kept
Hero slider auto-rotate + dots; Mega Sale countdown ticking every 1s (count-up from 2020-12-12); Featured Products + Featured mega-menu carousels with arrows; product-card hover reveals (price bar, Quick View, basket); hover dropdown/mega-menus; sticky dark header; back-to-top; viewer pop-up rotation; working cart/wishlist/compare (localStorage); shop sort/filter/search; mobile hamburger menu.

## Assets
90 unique original images in public/sites/amaali/ (2018/04, 2018/05, 2018/06), ~3.9 MB, all verified JPEG/PNG. Full manifest: ~/workspace/goals/five-site-website-clone-schedule/hidden_files/amaali/download-manifest.tsv. Source HTML snapshots: ~/workspace/goals/five-site-website-clone-schedule/hidden_files/amaali/ (home.html + pages/).

## Checks run
- `npm run check` (lint + typecheck + build) passes; 62 pages prerendered.
- Production server on port 3500; all 59 routes curl-verified 200; 56 unique local image refs checked, none missing/broken; hats→table-wood-industry is a real 307 redirect.
- Fixes during integration: moved `bySlugs` out of a "use client" module (broke prerender of home-2…9); normalized double-slash image paths inherited from source URLs (were 308-redirecting); fixed 4 lint errors (children-as-prop, setState-in-effect).

## Gaps (honest)
- No live visual side-by-side vs source yet (final pass).
- Shop Color/Size sidebar widgets are presentational only — source lists values (Color: Black/Blue/Gray/Green/Red; Size: 2XL/L/M/S/XL) but no per-product color/size data exists, so they cannot filter; no values invented.
- Review counts default to 1 with the source's generic 7uptheme review text for 17 products whose product pages were not downloaded; only Campania (0), Micro Lapbell, Xbox, Table Wood Industry (1 each) were verified in HTML.
- Cart/checkout/my-account are local demos (no WooCommerce backend); newsletter/contact forms local-only.
- Blog pagination pages 2/3 not cloned (not downloaded); vendor pages, category pages, and PAGE-menu demo pages (accordions/charts/etc.) not cloned — links point at the source.
- Home-2…9 reuse home-1 slide images (their own slide files not downloaded); testimonial quote text on home-7/8 reuses the theme's standard text from about.html.
- Checkout payment methods assumed standard WooCommerce (source page showed only empty-cart state).
- Contact hours: none in source, none shown.

## Phase A addendum (2026-11-12 ~22:05 EST) — full inventory completion
Source inventory built from WP sitemaps + WP REST + HTML snapshots (snapshots/data: ~/workspace/goals/five-site-website-clone-schedule/hidden_files/amaali/phase-a/): 45 WP pages, 24 posts, 26 products, 53 product categories, 7 product tags, 5 brands, 6 blog categories, 19 blog tags, 5 authors = 190 sitemap URLs + 5 vendor stores + blog/shop pagination (4) + hats redirect product = **200 source URLs → 200 local routes, all verified 200/307 on port 3500** (196 × 200; 307s = /vendor_dashboard ×3 → /my-account-2 mirroring the source's 303, and the hats product redirect). `npm run check` passes (0 errors, 204 static pages).
- New data: src/lib/amaali/archives.ts (category tree + per-product category/brand/tag membership scraped from source product pages, post taxonomy from REST, vendor store product lists extracted from store-page main content). Products array now 27 entries (26 + hats redirect); blog now all 24 posts.
- ShopGrid gained items/sidebar/columns-6 props (defaults unchanged). chrome.tsx resolveLink rewritten: post slugs → /post/<slug>, taxonomy/vendor paths stay local, PAGE/vendor/shop-variant pages local. ProductDetail category links → local category archives. Blog sidebar category/tag links → local archives.
- Vendor stores: customer & vendor = same 9 products; vendor-1 = camouflage-hat; vendor-2 = rolec-watch-x007; vendor-3 = martens-1490-boot. Author archives for vendor users show the source's "Sorry, but nothing matched your search terms…" blog layout.
- Assets: public/sites/amaali/2018/04 now 118 files (+ blog-07/10/11/12/13/17/19, new-product galleries, team post/team/rect/tm photos, testimonial t-photos) + 2018/05/404.png.
- Remaining approximations: as listed in STATUS.md row 3 (charts bar/line datasets, shop pagination model, Color/Size widgets, customer-vendor avatar stand-in).
