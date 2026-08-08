import { SearchProduct } from "./types";

export const products: SearchProduct[] = [
  // ==========================
  // Cars
  // ==========================

  {
    id: "honda-city",
    name: "Honda City",
    brand: "Honda",
    category: "car",
    estimatedPrice: 1320000,
    variants: [
      {
        id: "sv-mt",
        name: "SV MT",
        exShowroomPrice: 1320000,
      },
      {
        id: "v-mt",
        name: "V MT",
        exShowroomPrice: 1420000,
      },
      {
        id: "v-cvt",
        name: "V CVT",
        exShowroomPrice: 1550000,
      },
      {
        id: "vx-mt",
        name: "VX MT",
        exShowroomPrice: 1630000,
      },
      {
        id: "vx-cvt",
        name: "VX CVT",
        exShowroomPrice: 1770000,
      },
      {
        id: "zx-mt",
        name: "ZX MT",
        exShowroomPrice: 1870000,
      },
      {
        id: "zx-cvt",
        name: "ZX CVT",
        exShowroomPrice: 2030000,
      },
    ],
  },

  {
    id: "hyundai-creta",
    name: "Hyundai Creta",
    brand: "Hyundai",
    category: "car",
    estimatedPrice: 1150000,
    variants: [
      {
        id: "e",
        name: "E",
        exShowroomPrice: 1150000,
      },
      {
        id: "ex",
        name: "EX",
        exShowroomPrice: 1295000,
      },
      {
        id: "s",
        name: "S",
        exShowroomPrice: 1425000,
      },
      {
        id: "so",
        name: "S(O)",
        exShowroomPrice: 1565000,
      },
      {
        id: "sx",
        name: "SX",
        exShowroomPrice: 1715000,
      },
      {
        id: "sx-tech",
        name: "SX Tech",
        exShowroomPrice: 1865000,
      },
      {
        id: "sxo",
        name: "SX(O)",
        exShowroomPrice: 2015000,
      },
    ],
  },

  {
    id: "tata-nexon",
    name: "Tata Nexon",
    brand: "Tata",
    category: "car",
    estimatedPrice: 900000,
    variants: [
      {
        id: "smart",
        name: "Smart",
        exShowroomPrice: 900000,
      },
      {
        id: "pure",
        name: "Pure",
        exShowroomPrice: 1025000,
      },
      {
        id: "creative",
        name: "Creative",
        exShowroomPrice: 1175000,
      },
      {
        id: "fearless",
        name: "Fearless",
        exShowroomPrice: 1340000,
      },
    ],
  },

  // ==========================
  // Bikes
  // ==========================

  {
    id: "royal-enfield-classic-350",
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    category: "bike",
    estimatedPrice: 195000,
    variants: [
      {
        id: "redditch",
        name: "Redditch",
        exShowroomPrice: 195000,
      },
      {
        id: "halcyon",
        name: "Halcyon",
        exShowroomPrice: 199500,
      },
      {
        id: "signals",
        name: "Signals",
        exShowroomPrice: 214000,
      },
      {
        id: "dark",
        name: "Dark",
        exShowroomPrice: 224000,
      },
      {
        id: "chrome",
        name: "Chrome",
        exShowroomPrice: 231000,
      },
    ],
  },

  {
    id: "tvs-raider-125",
    name: "TVS Raider 125",
    brand: "TVS",
    category: "bike",
    estimatedPrice: 95000,
    variants: [
      {
        id: "drum",
        name: "Drum",
        exShowroomPrice: 95000,
      },
      {
        id: "disc",
        name: "Disc",
        exShowroomPrice: 102000,
      },
      {
        id: "smartxonnect",
        name: "SmartXonnect",
        exShowroomPrice: 108000,
      },
      {
        id: "super-squad",
        name: "Super Squad",
        exShowroomPrice: 112000,
      },
    ],
  },
    // ==========================
  // Phones
  // ==========================

  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "phone",
    estimatedPrice: 120000,
    variants: [
      {
        id: "128gb",
        name: "128 GB",
        exShowroomPrice: 120000,
      },
      {
        id: "256gb",
        name: "256 GB",
        exShowroomPrice: 130000,
      },
      {
        id: "512gb",
        name: "512 GB",
        exShowroomPrice: 150000,
      },
      {
        id: "1tb",
        name: "1 TB",
        exShowroomPrice: 170000,
      },
    ],
  },

  {
    id: "samsung-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "phone",
    estimatedPrice: 130000,
    variants: [
      {
        id: "256gb",
        name: "256 GB",
        exShowroomPrice: 130000,
      },
      {
        id: "512gb",
        name: "512 GB",
        exShowroomPrice: 142000,
      },
      {
        id: "1tb",
        name: "1 TB",
        exShowroomPrice: 165000,
      },
    ],
  },

  // ==========================
  // Laptops
  // ==========================

  {
    id: "macbook-air-m4",
    name: "MacBook Air M4",
    brand: "Apple",
    category: "laptop",
    estimatedPrice: 100000,
    variants: [
      {
        id: "13-16-256",
        name: "13-inch 16GB / 256GB",
        exShowroomPrice: 100000,
      },
      {
        id: "13-16-512",
        name: "13-inch 16GB / 512GB",
        exShowroomPrice: 120000,
      },
      {
        id: "15-16-256",
        name: "15-inch 16GB / 256GB",
        exShowroomPrice: 125000,
      },
      {
        id: "15-16-512",
        name: "15-inch 16GB / 512GB",
        exShowroomPrice: 145000,
      },
    ],
  },

  {
    id: "dell-xps-13",
    name: "Dell XPS 13",
    brand: "Dell",
    category: "laptop",
    estimatedPrice: 140000,
    variants: [
      {
        id: "core-ultra-5",
        name: "Core Ultra 5",
        exShowroomPrice: 140000,
      },
      {
        id: "core-ultra-7",
        name: "Core Ultra 7",
        exShowroomPrice: 160000,
      },
      {
        id: "core-ultra-9",
        name: "Core Ultra 9",
        exShowroomPrice: 185000,
      },
    ],
  },
];