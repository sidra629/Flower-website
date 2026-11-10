export const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Apex DH Technical Jersey",
    category: "Jerseys",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.9,
    reviews: 24,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Built for extreme downhill speed and mobility. Features sweat-wicking ripstop fabric and abrasion-resistant forearm panels.",
  },
  {
    id: 2,
    name: "Outlaw Stealth Trail Pants",
    category: "Pants",
    price: 139.99,
    originalPrice: 159.99,
    rating: 5.0,
    reviews: 18,
    badge: "Hot",
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["30", "32", "34", "36"],
    description:
      "4-way stretch water-resistant race pants. Designed with tapered ankles to prevent chain snag during heavy rides.",
  },
  {
    id: 3,
    name: "Neon Shred Oversized Hoodie",
    category: "Streetwear",
    price: 95.0,
    rating: 4.8,
    reviews: 42,
    badge: "Limited Edition",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Heavyweight 450GSM organic cotton hoodie featuring embroidered Outlaw Studio chest branding and high-visibility hot pink hood accents.",
  },
  {
    id: 4,
    name: "Pro-Line Carbon DH Helmet",
    category: "Protection",
    price: 299.99,
    originalPrice: 349.99,
    rating: 5.0,
    reviews: 11,
    badge: "Pro Choice",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["M", "L"],
    description:
      "Full-face carbon fiber shell with emergency cheek pad release system and max airflow ventilation ports.",
  },
];

export const INITIAL_GALLERY = [
  {
    id: "d1",
    title: "Whistler Blackcomb Gap Jump",
    category: "Downhill",
    imageUrl:
      "https://images.unsplash.com/photo-1642970047633-a8ef4f05edeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: "d2",
    title: "Urban Freeride Drop",
    category: "Freeride",
    imageUrl:
      "https://images.unsplash.com/photo-1745860794865-6ac4709fea6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: "d3",
    title: "Beautiful Heart Flowers",
    category: "Enduro",
    imageUrl:
      "https://images.unsplash.com/photo-1561690670-44ff9a440ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: "d4",
    title: "Midnight Slope Jump",
    category: "SlopeStyle",
    imageUrl:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d5",
    title: "Forest Canopy Line",
    category: "Trail",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d6",
    title: "Extreme Rock Section",
    category: "Downhill",
    imageUrl:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d7",
    title: "Speed & Dust Drift",
    category: "Enduro",
    imageUrl:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d8",
    title: "Sunset Gap Jump",
    category: "Freeride",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d9",
    title: "Mountain Ridge Descent",
    category: "Downhill",
    imageUrl:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d10",
    title: "Pro Jump Session",
    category: "SlopeStyle",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d11",
    title: "Muddy Track Battle",
    category: "Trail",
    imageUrl:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d12",
    title: "High Altitude Berm",
    category: "Enduro",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  },
];

export const INITIAL_TEAM = [
  {
    id: 1,
    name: "Jaxson Reed",
    role: "Factory Downhill Rider",
    hometown: "Vancouver, Canada",
    bike: "Santa Cruz V10 CC",
    bio: "3x World Cup Top 10 finisher known for aggressive line choices and high-speed technical style.",
    achievements: ["1st Place Crankworx DH 2024", "Red Bull Hardline Finalist"],
    instagram: "@jaxson_dh",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Enduro World Series Racer",
    hometown: "Innsbruck, Austria",
    bike: "Specialized S-Works Enduro",
    bio: "Relentless stamina and precision cornering. Pushing boundary lines in European enduro stages.",
    achievements: ["EWS Stage Winner 2023", "National Champion"],
    instagram: "@elena_mtb",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
  },
];
