// Phase A (2026-11-12): taxonomy + vendor data extracted from the live source
// (WP sitemaps, WP REST posts/categories/tags, WC store/category membership
// scraped from source HTML snapshots). Do not invent entries.
import { products, type AmaaliProduct } from "./data";
import { allBlogPosts, type AllPost } from "@/components/sites/amaali/blog";

export type ProductCategoryTerm = { path: string; name: string };
export const productCategories: ProductCategoryTerm[] = [
  {
    "path": "electronics/accessories",
    "name": "Accessories"
  },
  {
    "path": "fashion/accessories-fashion",
    "name": "Accessories"
  },
  {
    "path": "beauty-perfumes/all-beauty",
    "name": "All Beauty"
  },
  {
    "path": "jewelry-watches/all-handmade",
    "name": "All Handmade"
  },
  {
    "path": "beauty-perfumes/all-health-household",
    "name": "All Health & Household"
  },
  {
    "path": "mobile-tablets/android-phones",
    "name": "Android Phones"
  },
  {
    "path": "sport-and-health/athletic-clothing",
    "name": "Athletic Clothing"
  },
  {
    "path": "beauty-perfumes",
    "name": "Beauty & Perfumes"
  },
  {
    "path": "home-kitchen/bed-bath",
    "name": "Bed & Bath"
  },
  {
    "path": "electronics/blank-media",
    "name": "Blank Media"
  },
  {
    "path": "electronics/cable-security-devices",
    "name": "Cable Security Devices"
  },
  {
    "path": "electronics/cables-interconnects",
    "name": "Cables & Interconnects"
  },
  {
    "path": "fashion/clothing",
    "name": "Clothing"
  },
  {
    "path": "computer",
    "name": "Computer"
  },
  {
    "path": "computer/computer-accessories",
    "name": "Computer Accessories"
  },
  {
    "path": "computer/desktops",
    "name": "Desktops"
  },
  {
    "path": "electronics",
    "name": "Electronics"
  },
  {
    "path": "sport-and-health/exercise-fitness",
    "name": "Exercise & Fitness"
  },
  {
    "path": "sport-and-health/fan-shop",
    "name": "Fan Shop"
  },
  {
    "path": "fashion",
    "name": "Fashion"
  },
  {
    "path": "mobile-tablets/feature-phones",
    "name": "Feature Phones"
  },
  {
    "path": "home-kitchen/furniture",
    "name": "Furniture"
  },
  {
    "path": "game-accessories",
    "name": "Game & Accessories"
  },
  {
    "path": "home-kitchen/garden-outdoor",
    "name": "Garden & Outdoor"
  },
  {
    "path": "jewelry-watches/gifts",
    "name": "Gifts"
  },
  {
    "path": "sport-and-health/golf",
    "name": "Golf"
  },
  {
    "path": "fashion/handbags-wallets",
    "name": "Handbags & Wallets"
  },
  {
    "path": "electronics/headphone",
    "name": "Headphone"
  },
  {
    "path": "home-kitchen",
    "name": "Home & Kitchen"
  },
  {
    "path": "jewelry-watches/home-kitchen-jewelry-watches",
    "name": "Home & Kitchen"
  },
  {
    "path": "home-kitchen/home-improvement",
    "name": "Home Improvement"
  },
  {
    "path": "sport-and-health/hunting-fishing",
    "name": "Hunting & Fishing"
  },
  {
    "path": "jewelry-watches/jewelry-jewelry-watches",
    "name": "Jewelry"
  },
  {
    "path": "jewelry-watches",
    "name": "Jewelry & Watches"
  },
  {
    "path": "home-kitchen/kitchen-dining",
    "name": "Kitchen & Dining"
  },
  {
    "path": "computer/laptops",
    "name": "Laptops"
  },
  {
    "path": "beauty-perfumes/luxury-beauty",
    "name": "Luxury Beauty"
  },
  {
    "path": "beauty-perfumes/mens-grooming",
    "name": "Men’s Grooming"
  },
  {
    "path": "mobile-tablets",
    "name": "Mobile & Tablets"
  },
  {
    "path": "computer/monitors",
    "name": "Monitors"
  },
  {
    "path": "computer/pc-components",
    "name": "PC Components"
  },
  {
    "path": "beauty-perfumes/professional-skin-care",
    "name": "Professional Skin Care"
  },
  {
    "path": "mobile-tablets/refurbished-phones",
    "name": "Refurbished Phones"
  },
  {
    "path": "beauty-perfumes/salon-spa",
    "name": "Salon & Spa"
  },
  {
    "path": "fashion/shoes",
    "name": "Shoes"
  },
  {
    "path": "mobile-tablets/smartphones",
    "name": "Smartphones"
  },
  {
    "path": "sport-and-health",
    "name": "Sport and Health"
  },
  {
    "path": "computer/tablets-computer",
    "name": "Tablets"
  },
  {
    "path": "sport-and-health/team-sports",
    "name": "Team Sports"
  },
  {
    "path": "home-kitchen/trade-in",
    "name": "Trade-In"
  },
  {
    "path": "mobile-tablets/unboxed-phones",
    "name": "Unboxed Phones"
  },
  {
    "path": "fashion/watches",
    "name": "Watches"
  },
  {
    "path": "jewelry-watches/watches-jewelry-watches",
    "name": "Watches"
  }
];

export const productMembership: Record<string, { cats: string[]; brands: string[]; tags: string[] }> = {
  "arm-chair-office-msh34": {
    "cats": [
      "bed-bath",
      "furniture",
      "garden-outdoor",
      "home-improvement",
      "home-kitchen",
      "trade-in"
    ],
    "brands": [
      "omega",
      "samsung"
    ],
    "tags": []
  },
  "bo-play-a1-portable-wireless": {
    "cats": [
      "accessories",
      "cable-security-devices",
      "cables-interconnects",
      "computer",
      "desktops",
      "electronics",
      "feature-phones",
      "game-accessories",
      "headphone",
      "monitors",
      "refurbished-phones",
      "tablets-computer",
      "unboxed-phones"
    ],
    "brands": [
      "omega",
      "samsung"
    ],
    "tags": []
  },
  "beauty-skincare-face": {
    "cats": [
      "accessories-fashion",
      "all-beauty",
      "beauty-perfumes",
      "fashion",
      "handbags-wallets",
      "mens-grooming",
      "professional-skin-care",
      "salon-spa",
      "shoes"
    ],
    "brands": [
      "apple",
      "gucci"
    ],
    "tags": []
  },
  "blue-long-sofa": {
    "cats": [
      "bed-bath",
      "garden-outdoor",
      "home-kitchen",
      "kitchen-dining",
      "trade-in"
    ],
    "brands": [
      "gucci",
      "samsung"
    ],
    "tags": []
  },
  "camouflage-hat": {
    "cats": [
      "athletic-clothing",
      "beauty-perfumes",
      "clothing",
      "exercise-fitness",
      "fashion",
      "golf",
      "handbags-wallets",
      "luxury-beauty",
      "professional-skin-care",
      "shoes",
      "sport-and-health",
      "team-sports",
      "watches"
    ],
    "brands": [
      "samsung",
      "zara"
    ],
    "tags": []
  },
  "campania-table": {
    "cats": [
      "furniture",
      "home-kitchen"
    ],
    "brands": [
      "gucci",
      "samsung"
    ],
    "tags": []
  },
  "chaise-lounge-chandelier": {
    "cats": [
      "bed-bath",
      "furniture",
      "garden-outdoor",
      "home-kitchen"
    ],
    "brands": [
      "apple",
      "samsung"
    ],
    "tags": []
  },
  "classic-polarized-sunglasses": {
    "cats": [
      "athletic-clothing",
      "beauty-perfumes",
      "fashion",
      "hunting-fishing",
      "jewelry-watches",
      "mens-grooming",
      "team-sports",
      "watches",
      "watches-jewelry-watches"
    ],
    "brands": [
      "gucci",
      "samsung"
    ],
    "tags": []
  },
  "dell-laptop-xps-l50-full-hd": {
    "cats": [
      "computer",
      "computer-accessories",
      "laptops",
      "pc-components"
    ],
    "brands": [
      "apple",
      "gucci"
    ],
    "tags": []
  },
  "desk-wood-document": {
    "cats": [
      "furniture",
      "garden-outdoor",
      "home-kitchen",
      "trade-in"
    ],
    "brands": [
      "apple",
      "omega"
    ],
    "tags": []
  },
  "glass-dining-room-table": {
    "cats": [
      "bed-bath",
      "garden-outdoor",
      "home-kitchen",
      "trade-in"
    ],
    "brands": [
      "samsung",
      "zara"
    ],
    "tags": []
  },
  "malua-outdoor": {
    "cats": [
      "bed-bath",
      "furniture",
      "home-improvement",
      "home-kitchen",
      "kitchen-dining",
      "trade-in"
    ],
    "brands": [
      "gucci",
      "zara"
    ],
    "tags": []
  },
  "martens-1490-boot": {
    "cats": [
      "accessories-fashion",
      "athletic-clothing",
      "beauty-perfumes",
      "clothing",
      "fan-shop",
      "fashion",
      "handbags-wallets",
      "mens-grooming",
      "professional-skin-care",
      "shoes",
      "sport-and-health",
      "team-sports"
    ],
    "brands": [
      "apple",
      "zara"
    ],
    "tags": []
  },
  "micro-lapbell-mc4100": {
    "cats": [
      "blank-media",
      "computer",
      "electronics",
      "exercise-fitness",
      "headphone",
      "laptops",
      "monitors",
      "sport-and-health",
      "team-sports"
    ],
    "brands": [
      "omega",
      "samsung"
    ],
    "tags": []
  },
  "nail-pink-women": {
    "cats": [
      "all-beauty",
      "all-health-household",
      "beauty-perfumes",
      "fashion",
      "handbags-wallets",
      "mens-grooming",
      "salon-spa"
    ],
    "brands": [
      "omega",
      "samsung"
    ],
    "tags": [
      "beauty",
      "lips",
      "macara"
    ]
  },
  "rolec-watch-x007": {
    "cats": [
      "all-handmade",
      "fan-shop",
      "feature-phones",
      "gifts",
      "jewelry-jewelry-watches",
      "jewelry-watches",
      "mobile-tablets",
      "smartphones",
      "sport-and-health",
      "tablets-computer",
      "team-sports",
      "watches-jewelry-watches"
    ],
    "brands": [
      "apple",
      "omega"
    ],
    "tags": []
  },
  "samsung-galaxy-s6": {
    "cats": [
      "android-phones",
      "cables-interconnects",
      "computer",
      "computer-accessories",
      "electronics",
      "feature-phones",
      "headphone",
      "laptops",
      "mobile-tablets",
      "smartphones",
      "tablets-computer",
      "unboxed-phones"
    ],
    "brands": [
      "apple",
      "omega"
    ],
    "tags": []
  },
  "scarleton-shoulder-bag": {
    "cats": [
      "cables-interconnects",
      "computer",
      "desktops",
      "electronics",
      "headphone",
      "pc-components",
      "tablets-computer"
    ],
    "brands": [
      "samsung",
      "zara"
    ],
    "tags": []
  },
  "scarleton-shoulder-bag-2": {
    "cats": [
      "accessories-fashion",
      "all-beauty",
      "all-handmade",
      "beauty-perfumes",
      "fan-shop",
      "fashion",
      "gifts",
      "handbags-wallets",
      "jewelry-watches",
      "sport-and-health",
      "watches"
    ],
    "brands": [
      "omega",
      "samsung"
    ],
    "tags": []
  },
  "sofa-living-room": {
    "cats": [
      "furniture",
      "garden-outdoor",
      "home-improvement",
      "home-kitchen",
      "kitchen-dining"
    ],
    "brands": [
      "omega",
      "zara"
    ],
    "tags": []
  },
  "sound-intones-i65-headphone": {
    "cats": [
      "accessories",
      "android-phones",
      "cable-security-devices",
      "computer",
      "computer-accessories",
      "electronics",
      "feature-phones",
      "headphone",
      "laptops",
      "mobile-tablets",
      "pc-components",
      "smartphones",
      "tablets-computer"
    ],
    "brands": [
      "gucci",
      "omega"
    ],
    "tags": []
  },
  "swiss-quartz-stainless-steel": {
    "cats": [
      "accessories-fashion",
      "beauty-perfumes",
      "fashion",
      "game-accessories",
      "jewelry-jewelry-watches",
      "luxury-beauty",
      "mens-grooming",
      "watches"
    ],
    "brands": [
      "gucci",
      "samsung"
    ],
    "tags": []
  },
  "table-wood-industry": {
    "cats": [
      "furniture",
      "home-kitchen",
      "kitchen-dining"
    ],
    "brands": [
      "omega",
      "samsung"
    ],
    "tags": []
  },
  "womens-44-mbw-ib-round": {
    "cats": [
      "accessories-fashion",
      "beauty-perfumes",
      "blank-media",
      "cables-interconnects",
      "computer",
      "desktops",
      "electronics",
      "fan-shop",
      "fashion",
      "gifts",
      "jewelry-jewelry-watches",
      "jewelry-watches",
      "luxury-beauty",
      "mobile-tablets",
      "professional-skin-care",
      "refurbished-phones",
      "sport-and-health",
      "tablets-computer",
      "team-sports",
      "unboxed-phones",
      "watches",
      "watches-jewelry-watches"
    ],
    "brands": [
      "apple",
      "samsung"
    ],
    "tags": [
      "digital",
      "electronics",
      "steel",
      "watches"
    ]
  },
  "xbox-two-wireless-controller": {
    "cats": [
      "accessories",
      "blank-media",
      "cables-interconnects",
      "computer",
      "electronics",
      "game-accessories",
      "laptops"
    ],
    "brands": [
      "omega",
      "samsung"
    ],
    "tags": []
  },
  "womens-museum-watch": {
    "cats": [
      "accessories-fashion",
      "all-handmade",
      "athletic-clothing",
      "clothing",
      "fan-shop",
      "fashion",
      "home-kitchen-jewelry-watches",
      "jewelry-watches",
      "sport-and-health",
      "team-sports",
      "watches",
      "watches-jewelry-watches"
    ],
    "brands": [
      "omega",
      "zara"
    ],
    "tags": []
  }
};

export const productTags: { slug: string; name: string }[] = [
  {
    "slug": "beauty",
    "name": "Beauty"
  },
  {
    "slug": "digital",
    "name": "Digital"
  },
  {
    "slug": "electronics",
    "name": "Electronics"
  },
  {
    "slug": "lips",
    "name": "Lips"
  },
  {
    "slug": "macara",
    "name": "Macara"
  },
  {
    "slug": "steel",
    "name": "Steel"
  },
  {
    "slug": "watches",
    "name": "Watches"
  }
];
export const brands: { slug: string; name: string }[] = [
  {
    "slug": "apple",
    "name": "Apple"
  },
  {
    "slug": "gucci",
    "name": "Gucci"
  },
  {
    "slug": "omega",
    "name": "Omega"
  },
  {
    "slug": "samsung",
    "name": "Samsung"
  },
  {
    "slug": "zara",
    "name": "Zara"
  }
];

export function productsInCategory(path: string): AmaaliProduct[] {
  const leaf = path.split("/").pop() ?? path;
  return products.filter((p) => (productMembership[p.slug]?.cats ?? []).includes(leaf));
}
export function productsWithTag(slug: string): AmaaliProduct[] {
  return products.filter((p) => (productMembership[p.slug]?.tags ?? []).includes(slug));
}
export function productsWithBrand(slug: string): AmaaliProduct[] {
  return products.filter((p) => (productMembership[p.slug]?.brands ?? []).includes(slug));
}

export const blogCategories: { slug: string; name: string }[] = [
  {
    "slug": "accessories",
    "name": "Accessories"
  },
  {
    "slug": "audio",
    "name": "Audio"
  },
  {
    "slug": "bedroom",
    "name": "Bedroom"
  },
  {
    "slug": "headphone",
    "name": "Headphone"
  },
  {
    "slug": "home-design",
    "name": "Home Design"
  },
  {
    "slug": "living-room",
    "name": "Living room"
  }
];
export const blogTags: { slug: string; name: string }[] = [
  {
    "slug": "audio",
    "name": "Audio"
  },
  {
    "slug": "camera",
    "name": "Camera"
  },
  {
    "slug": "chair",
    "name": "Chair"
  },
  {
    "slug": "computer",
    "name": "Computer"
  },
  {
    "slug": "desk",
    "name": "Desk"
  },
  {
    "slug": "glasses",
    "name": "Glasses"
  },
  {
    "slug": "hats",
    "name": "Hats"
  },
  {
    "slug": "header-phone",
    "name": "Header Phone"
  },
  {
    "slug": "jewelry",
    "name": "Jewelry"
  },
  {
    "slug": "lips",
    "name": "Lips"
  },
  {
    "slug": "loa",
    "name": "Loa"
  },
  {
    "slug": "macara",
    "name": "Macara"
  },
  {
    "slug": "mobile",
    "name": "Mobile"
  },
  {
    "slug": "printer",
    "name": "Printer"
  },
  {
    "slug": "shoes",
    "name": "Shoes"
  },
  {
    "slug": "tablet",
    "name": "Tablet"
  },
  {
    "slug": "tag-name",
    "name": "tag name"
  },
  {
    "slug": "television",
    "name": "Television"
  },
  {
    "slug": "watches",
    "name": "watches"
  }
];
export const postTaxonomy: Record<string, { cats: string[]; tags: string[] }> = {
  "wordpress-coding-basics": {
    "cats": [
      "home-design"
    ],
    "tags": []
  },
  "wordpress-theme-creation-with": {
    "cats": [
      "living-room"
    ],
    "tags": []
  },
  "building-wp-themes-with-bootstrap": {
    "cats": [
      "bedroom"
    ],
    "tags": []
  },
  "learn-wordpress-development": {
    "cats": [
      "headphone"
    ],
    "tags": []
  },
  "post-no-sidebar": {
    "cats": [
      "accessories",
      "audio",
      "headphone",
      "living-room"
    ],
    "tags": []
  },
  "post-left-sidebar": {
    "cats": [
      "accessories",
      "audio",
      "home-design",
      "living-room"
    ],
    "tags": [
      "loa",
      "printer"
    ]
  },
  "post-format-audio": {
    "cats": [
      "accessories",
      "audio",
      "bedroom",
      "headphone"
    ],
    "tags": []
  },
  "post-format-gallery": {
    "cats": [
      "accessories",
      "headphone",
      "home-design",
      "living-room"
    ],
    "tags": [
      "chair",
      "desk",
      "jewelry",
      "watches"
    ]
  },
  "post-format-video": {
    "cats": [
      "accessories",
      "bedroom",
      "headphone",
      "living-room"
    ],
    "tags": [
      "glasses",
      "mobile",
      "shoes",
      "tablet",
      "television"
    ]
  },
  "post-format-image": {
    "cats": [
      "audio",
      "headphone",
      "living-room"
    ],
    "tags": [
      "hats",
      "lips",
      "macara"
    ]
  },
  "post-format-standard": {
    "cats": [
      "accessories",
      "headphone",
      "home-design"
    ],
    "tags": [
      "audio",
      "chair",
      "lips"
    ]
  },
  "lorem-khaled-ipsum-is-a-major-12": {
    "cats": [
      "headphone"
    ],
    "tags": [
      "camera",
      "computer",
      "header-phone",
      "tag-name"
    ]
  },
  "lorem-khaled-ipsum-is-a-major-11": {
    "cats": [
      "audio"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major-10": {
    "cats": [
      "accessories"
    ],
    "tags": [
      "tag-name"
    ]
  },
  "lorem-khaled-ipsum-is-a-major-9": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major-8": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": [
      "tag-name"
    ]
  },
  "lorem-khaled-ipsum-is-a-major-7": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major-6": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major-5": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major-4": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major-3": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major-2": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "lorem-khaled-ipsum-is-a-major": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  },
  "surround-yourself-with-angels-learning-is-cool": {
    "cats": [
      "accessories",
      "audio",
      "headphone"
    ],
    "tags": []
  }
};

export function postsInCategory(slug: string): AllPost[] {
  return allBlogPosts.filter((p) => (postTaxonomy[p.slug]?.cats ?? []).includes(slug));
}
export function postsWithTag(slug: string): AllPost[] {
  return allBlogPosts.filter((p) => (postTaxonomy[p.slug]?.tags ?? []).includes(slug));
}

export type Vendor = { slug: string; name: string; products: string[] };
export const vendors: Vendor[] = [
  {
    "slug": "customer",
    "name": "Vendor",
    "products": [
      "blue-long-sofa",
      "chaise-lounge-chandelier",
      "classic-polarized-sunglasses",
      "desk-wood-document",
      "micro-lapbell-mc4100",
      "nail-pink-women",
      "sofa-living-room",
      "swiss-quartz-stainless-steel",
      "womens-museum-watch"
    ]
  },
  {
    "slug": "vendor",
    "name": "Vendor",
    "products": [
      "blue-long-sofa",
      "chaise-lounge-chandelier",
      "classic-polarized-sunglasses",
      "desk-wood-document",
      "micro-lapbell-mc4100",
      "nail-pink-women",
      "sofa-living-room",
      "swiss-quartz-stainless-steel",
      "womens-museum-watch"
    ]
  },
  {
    "slug": "vendor-1",
    "name": "Vendor 1",
    "products": [
      "camouflage-hat"
    ]
  },
  {
    "slug": "vendor-2",
    "name": "Vendor 2",
    "products": [
      "rolec-watch-x007"
    ]
  },
  {
    "slug": "vendor-3",
    "name": "Vendor 3",
    "products": [
      "martens-1490-boot"
    ]
  }
];
export function vendorBySlug(slug: string): Vendor | undefined {
  return vendors.find((v) => v.slug === slug);
}
export function vendorProducts(v: Vendor): AmaaliProduct[] {
  return v.products
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is AmaaliProduct => Boolean(p));
}
