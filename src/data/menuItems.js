export const MENU_CATEGORIES = [
  { id: 'All Items', label: 'All Items', jp: 'すべて', count: 30 },
  { id: 'Ramen', label: 'Ramen', jp: 'ラーメン', count: 6 },
  { id: 'Sushi', label: 'Sushi', jp: '寿司ロール', count: 6 },
  { id: 'Fried Chicken', label: 'Fried Chicken', jp: '唐揚げ', count: 6 },
  { id: 'Sides & Snacks', label: 'Sides & Snacks', jp: 'サイド', count: 6 },
  { id: 'Drinks', label: 'Drinks', jp: 'ドリンク', count: 6 },
];

/**
 * Generates an inline SVG fallback data URI in case an external photo fails to load.
 */
export function createFallbackFoodImage(title = 'Iroki Cafe', category = 'Japanese Street Food') {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeCat = category.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420" width="600" height="420">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFF8EE"/>
        <stop offset="100%" stop-color="#FFE2D2"/>
      </linearGradient>
    </defs>
    <rect width="600" height="420" fill="url(#bg)"/>
    <circle cx="300" cy="180" r="95" fill="#FF6B2C" opacity="0.14"/>
    <circle cx="300" cy="180" r="65" fill="#FF6B2C" opacity="0.24"/>
    <path d="M235 185c0 36 29 65 65 65s65-29 65-65H235z" fill="#D9481C"/>
    <path d="M245 162l110-18M245 174l110-8" stroke="#242424" stroke-width="6" stroke-linecap="round"/>
    <text x="300" y="310" text-anchor="middle" font-family="Outfit, sans-serif" font-size="24" font-weight="800" fill="#242424">${safeTitle}</text>
    <text x="300" y="342" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="14" font-weight="600" fill="#D9481C" letter-spacing="2">${safeCat.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Centralized illustrative menu data for Iroki Cafe (30 items across 5 categories).
 * Note: Prices and recipes are illustrative sample menu offerings.
 */
export const MENU_ITEMS = [
  // ==========================================
  // CATEGORY 1: RAMEN — 6 VARIETIES
  // ==========================================
  {
    id: 'ramen-1',
    name: 'Classic Chicken Ramen',
    category: 'Ramen',
    price: 299,
    description:
      'Savory chicken broth, springy wheat noodles, crisp spring onions, jammy soft-boiled egg, and tender slow-simmered chicken.',
    isVeg: false,
    isSpicy: false,
    isBestseller: true,
    badge: 'FAN FAVORITE',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Egg, Soy, Sesame',
  },
  {
    id: 'ramen-2',
    name: 'Spicy Chicken Ramen',
    category: 'Ramen',
    price: 329,
    description:
      'Rich chicken broth infused with house-roasted chili oil, tender chicken slices, artisan noodles, and a fiery kick.',
    isVeg: false,
    isSpicy: true,
    isBestseller: false,
    badge: 'SPICY',
    image:
      'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Egg, Soy, Sesame',
  },
  {
    id: 'ramen-3',
    name: 'Veg Miso Ramen',
    category: 'Ramen',
    price: 249,
    description:
      'Comforting fermented miso-inspired broth loaded with crisp garden vegetables, noodles, shiitake mushrooms, sweet corn, and spring onions.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'COMFORT BOWL',
    image:
      'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Sesame',
  },
  {
    id: 'ramen-4',
    name: 'Shoyu Ramen',
    category: 'Ramen',
    price: 299,
    description:
      'Aromatic soy-seasoned clear broth, artisan noodles, spring onions, marinated mushrooms, and your choice of chicken or vegetarian preparation.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'CUSTOMIZABLE',
    variants: [
      { id: 'veg', label: 'Vegetarian', isVeg: true },
      { id: 'chicken', label: 'Chicken', isVeg: false },
    ],
    defaultVariant: 'veg',
    image:
      'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Sesame',
  },
  {
    id: 'ramen-5',
    name: 'Firecracker Hot Ramen',
    category: 'Ramen',
    price: 349,
    description:
      'Bold volcanic spicy broth, togarashi chili seasoning, springy noodles, charred corn, and juicy seared chicken.',
    isVeg: false,
    isSpicy: true,
    isBestseller: true,
    badge: 'SPICY',
    image:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Egg, Soy, Sesame',
  },
  {
    id: 'ramen-6',
    name: 'Creamy Tantanmen Ramen',
    category: 'Ramen',
    price: 349,
    description:
      'A velvety, roasted sesame-inspired spicy broth with noodles, bok choy, aromatic chili threads, and a choice of chicken or vegetarian preparation.',
    isVeg: true,
    isSpicy: true,
    isBestseller: false,
    badge: 'SPICY',
    variants: [
      { id: 'veg', label: 'Vegetarian', isVeg: true },
      { id: 'chicken', label: 'Chicken', isVeg: false },
    ],
    defaultVariant: 'chicken',
    image:
      'https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Sesame, Wheat (Gluten), Soy',
  },

  // ==========================================
  // CATEGORY 2: SUSHI — 6 VARIETIES
  // ==========================================
  {
    id: 'sushi-1',
    name: 'Classic Veg Maki',
    category: 'Sushi',
    price: 199,
    description:
      'Crisp julienned cucumber, lightly seasoned Japanese short-grain sushi rice, toasted sesame, and roasted nori.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'LIGHT & FRESH',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Soy, Sesame',
  },
  {
    id: 'sushi-2',
    name: 'Avocado Roll',
    category: 'Sushi',
    price: 229,
    description:
      'Buttery Hass avocado slices rolled with seasoned sushi rice, crisp nori, and a delicate sprinkle of white and black sesame.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'CREAMY VEG',
    image:
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Soy, Sesame',
  },
  {
    id: 'sushi-3',
    name: 'Crispy Tempura Roll',
    category: 'Sushi',
    price: 299,
    description:
      'Crunchy golden vegetable tempura filling rolled in seasoned sushi rice, topped with crispy tenkasu flakes and house tare drizzle.',
    isVeg: true,
    isSpicy: false,
    isBestseller: true,
    badge: 'IROKI SPECIAL',
    image:
      'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Sesame',
  },
  {
    id: 'sushi-4',
    name: 'California-Style Roll',
    category: 'Sushi',
    price: 329,
    description:
      'A colorful, creamy crab-style filling prepared with surimi (imitation crab stick), fresh avocado, crisp cucumber, and toasted sesame.',
    isVeg: false,
    isSpicy: false,
    isBestseller: false,
    badge: 'SURIMI / IMITATION SEAFOOD',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80',
    allergens:
      'Note: Prepared with Surimi (imitation crab made from white fish). Allergens: Fish, Egg, Soy, Wheat, Sesame',
  },
  {
    id: 'sushi-5',
    name: 'Spicy Chicken Roll',
    category: 'Sushi',
    price: 299,
    description:
      'Savory crispy-seared chicken strips, seasoned sushi rice, cucumber crunch, and a fiery Japanese togarashi sriracha mayo.',
    isVeg: false,
    isSpicy: true,
    isBestseller: false,
    badge: 'SPICY',
    image:
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Egg, Soy, Wheat (Gluten), Sesame',
  },
  {
    id: 'sushi-6',
    name: 'Dragon Roll',
    category: 'Sushi',
    price: 379,
    description:
      'Visually striking signature roll filled with crispy prawn tempura & cucumber, crowned with layered avocado scales, spicy mayo, and sweet soy glaze.',
    isVeg: false,
    isSpicy: false,
    isBestseller: false,
    badge: 'CHEF SIGNATURE',
    image:
      'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=900&q=80',
    allergens:
      'Ingredients: Prawn tempura, avocado, cucumber, sushi rice, nori, spicy mayo & sweet soy glaze • Allergens: Crustacean (Prawn), Wheat/Gluten, Egg, Soy, Sesame',
  },

  // ==========================================
  // CATEGORY 3: FRIED CHICKEN — 6 VARIETIES
  // ==========================================
  {
    id: 'chicken-1',
    name: 'Japanese Karaage',
    category: 'Fried Chicken',
    price: 249,
    description:
      'Authentic Japanese-style ginger-soy marinated boneless chicken thighs fried to an ultra-crisp golden coating, served with yuzu mayo.',
    isVeg: false,
    isSpicy: false,
    isBestseller: true,
    badge: 'FAN FAVORITE',
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Soy, Wheat, Egg',
  },
  {
    id: 'chicken-2',
    name: 'Spicy Crunch Chicken',
    category: 'Fried Chicken',
    price: 279,
    description:
      'Extra-crispy double-dredged fried chicken tossed in our fiery shichimi chili and roasted garlic seasoning blend.',
    isVeg: false,
    isSpicy: true,
    isBestseller: false,
    badge: 'SPICY',
    image:
      'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Sesame',
  },
  {
    id: 'chicken-3',
    name: 'Korean-Japanese Glazed Wings',
    category: 'Fried Chicken',
    price: 299,
    description:
      'Crackling-crisp chicken wings wok-tossed in a sticky, sweet, and savory honey-soy-gochujang street glaze with toasted sesame.',
    isVeg: false,
    isSpicy: false,
    isBestseller: false,
    badge: 'STICKY GLAZE',
    image:
      'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Soy, Wheat (Gluten), Sesame',
  },
  {
    id: 'chicken-4',
    name: 'Chicken Katsu',
    category: 'Fried Chicken',
    price: 279,
    description:
      'Golden panko-breaded chicken cutlet fried until shatteringly crisp, sliced and served with tangy Japanese tonkatsu sauce and slaw.',
    isVeg: false,
    isSpicy: false,
    isBestseller: false,
    badge: 'TOKYO CLASSIC',
    image:
      'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Egg, Soy',
  },
  {
    id: 'chicken-5',
    name: 'Popcorn Chicken',
    category: 'Fried Chicken',
    price: 199,
    description:
      'Bite-sized crispy chicken morsels dusted with savory nori-salt seasoning, perfect for sharing and snacking.',
    isVeg: false,
    isSpicy: false,
    isBestseller: false,
    badge: 'SNACK HIT',
    image:
      'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy',
  },
  {
    id: 'chicken-6',
    name: 'Firecracker Chicken Bites',
    category: 'Fried Chicken',
    price: 249,
    description:
      'Crunchy golden chicken bites wok-tossed in a bold, spicy signature chili-garlic glaze garnished with fresh scallions.',
    isVeg: false,
    isSpicy: true,
    isBestseller: false,
    badge: 'SPICY',
    image:
      'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Egg, Sesame',
  },

  // ==========================================
  // CATEGORY 4: SIDES & SNACKS — 6 VARIETIES
  // ==========================================
  {
    id: 'sides-1',
    name: 'Edamame',
    category: 'Sides & Snacks',
    price: 149,
    description:
      'Steamed tender young green soybeans in the pod, tossed warm with flaky sea salt and a touch of toasted sesame oil.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'PLANT PROTEIN',
    image:
      'https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Soy, Sesame',
  },
  {
    id: 'sides-2',
    name: 'Vegetable Gyoza',
    category: 'Sides & Snacks',
    price: 199,
    description:
      'Pan-seared Japanese dumplings with delicate lacy bottoms, stuffed with cabbage, shiitake mushrooms, chives, and ginger.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'PAN-SEARED',
    image:
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Sesame',
  },
  {
    id: 'sides-3',
    name: 'Chicken Gyoza',
    category: 'Sides & Snacks',
    price: 229,
    description:
      'Crisp-bottomed Japanese potstickers filled with juicy ginger-scallion minced chicken, served with citrusy soy-ponzu dipping sauce.',
    isVeg: false,
    isSpicy: false,
    isBestseller: false,
    badge: 'JUICY & CRISP',
    image:
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Sesame',
  },
  {
    id: 'sides-4',
    name: 'Crispy Tempura Vegetables',
    category: 'Sides & Snacks',
    price: 199,
    description:
      'Sweet potato, broccoli, zucchini, and bell peppers fried in an airy, ice-cold tempura batter and served with warm tentsuyu dip.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'GOLDEN CRUNCH',
    image:
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy',
  },
  {
    id: 'sides-5',
    name: 'Japanese Fries',
    category: 'Sides & Snacks',
    price: 149,
    description:
      'Crispy golden shoestring fries tossed in roasted seaweed furikake seasoning and finished with tangy Japanese-style mayo zigzags.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'STREET FAVORITE',
    image:
      'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Soy, Sesame',
  },
  {
    id: 'sides-6',
    name: 'Garlic Sesame Noodles',
    category: 'Sides & Snacks',
    price: 199,
    description:
      'Wok-tossed wheat noodles glazed in caramelized garlic, toasted sesame oil, dark soy, and crisp scallions.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'WOK-TOSSED',
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Wheat (Gluten), Soy, Sesame',
  },

  // ==========================================
  // CATEGORY 5: DRINKS — 6 VARIETIES
  // ==========================================
  {
    id: 'drinks-1',
    name: 'Classic Iced Matcha',
    category: 'Drinks',
    price: 179,
    description:
      'Shade-grown Japanese green tea matcha hand-whisked until frothy and poured over chilled creamy milk and crystal ice.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'CAFE SIGNATURE',
    image:
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Milk / Dairy',
  },
  {
    id: 'drinks-2',
    name: 'Strawberry Matcha Latte',
    category: 'Drinks',
    price: 219,
    description:
      'Dreamy three-layer drink pairing sweet muddled strawberry compote, cold milk, and vibrant ceremonial-style whisked matcha.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'CROWD DARLING',
    image:
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=80',
    allergens: 'Contains Milk / Dairy',
  },
  {
    id: 'drinks-3',
    name: 'Japanese Iced Tea',
    category: 'Drinks',
    price: 129,
    description:
      'Crisp, cold-steeped Japanese sencha green tea served over ice with a naturally smooth, uplifting botanical finish.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'REFRESHING',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80',
    allergens: 'Allergen-Free',
  },
  {
    id: 'drinks-4',
    name: 'Yuzu-Style Citrus Cooler',
    category: 'Drinks',
    price: 159,
    description:
      'Zesty yuzu-inspired citrus nectar topped with sparkling soda, fresh garden mint leaves, and crushed ice.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'SPARKLING',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
    allergens: 'Allergen-Free',
  },
  {
    id: 'drinks-5',
    name: 'Lychee Lemonade',
    category: 'Drinks',
    price: 149,
    description:
      'Juicy, floral lychee juice shaken with freshly squeezed tangy lemons, cane syrup, and a sparkling splash.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'FRUITY & BRIGHT',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    allergens: 'Allergen-Free',
  },
  {
    id: 'drinks-6',
    name: 'Classic Lemon Iced Tea',
    category: 'Drinks',
    price: 129,
    description:
      'Slow-brewed amber iced tea infused with bright lemon wheels, fresh mint, and just the right touch of sweetness.',
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
    badge: 'ALL-TIME CLASSIC',
    image:
      'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=80',
    allergens: 'Allergen-Free',
  },
];

export const BESTSELLER_ITEMS = [
  {
    itemId: 'ramen-1',
    featuredTag: 'FAN FAVORITE',
    jpTag: '一番人気',
    highlightQuote: 'Slow-simmered 6-hour broth with jammy egg & tender chicken.',
  },
  {
    itemId: 'ramen-5',
    featuredTag: 'IROKI SPECIAL',
    jpTag: '激辛ラーメン',
    highlightQuote: 'Unapologetically bold, fiery chili broth for true spice chasers.',
  },
  {
    itemId: 'sushi-3',
    featuredTag: 'IROKI SPECIAL',
    jpTag: '特製ロール',
    highlightQuote: 'Double-crunch golden tempura wrapped in seasoned sushi rice.',
  },
  {
    itemId: 'chicken-1',
    featuredTag: 'FAN FAVORITE',
    jpTag: '名物唐揚げ',
    highlightQuote: 'Tokyo street-style ginger-soy fried chicken with yuzu mayo.',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    title: 'Signature Rich Ramen Bowl',
    category: 'Slurp-Worthy Bowls',
    jp: '特製ラーメン',
    span: 'large',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85',
    alt: 'Steaming Japanese ramen bowl topped with soft-boiled egg, noodles, and spring onions',
  },
  {
    id: 'gal-2',
    title: 'Hand-Rolled Sushi Platter',
    category: 'Fresh Every Hour',
    jp: '新鮮な寿司',
    span: 'normal',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
    alt: 'Artfully plated sushi platter with maki and signature rolls',
  },
  {
    id: 'gal-3',
    title: 'Crispy Golden Karaage',
    category: 'Street-Style Crunch',
    jp: '黄金の唐揚げ',
    span: 'normal',
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80',
    alt: 'Golden crispy Japanese fried chicken karaage served hot',
  },
  {
    id: 'gal-4',
    title: 'Whisked Iced Matcha Bar',
    category: 'Cool & Earthy Sips',
    jp: '宇治抹茶ラテ',
    span: 'normal',
    image:
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    alt: 'Iced green tea matcha latte in a glass',
  },
  {
    id: 'gal-5',
    title: 'Tokyo Street-Food Spread',
    category: 'Made For Sharing',
    jp: '屋台グルメ',
    span: 'wide',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    alt: 'Japanese street-food table spread shared with friends',
  },
  {
    id: 'gal-6',
    title: 'Cozy Modern Cafe Vibe',
    category: 'Warm Tokyo Energy',
    jp: 'イロキの空間',
    span: 'normal',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
    alt: 'Warm, contemporary Japanese-inspired cafe interior with cozy lighting',
  },
];
