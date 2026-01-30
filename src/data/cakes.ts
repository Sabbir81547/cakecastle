// ======================================================
// CAKE CASTLE - PRODUCT DATA
// Edit this file to add, modify, or remove cakes
// All prices are in BDT (৳)
// ======================================================

import cakeRedvelvet from '@/assets/cake-redvelvet.jpg';
import cakeChocolate from '@/assets/cake-chocolate.jpg';
import cakeVanilla from '@/assets/cake-vanilla.jpg';
import cakeFruit from '@/assets/cake-fruit.jpg';
import cakeWedding from '@/assets/cake-wedding.jpg';
import cupcakes from '@/assets/cupcakes.jpg';
import cakeRoyal from '@/assets/cake-royal-wedding.png';
import cakeGolden from '@/assets/cake-golden-anniversary.png';
import cakeCartoon from '@/assets/cake-cartoon.png';
import cakeSuperhero from '@/assets/cake-superhero.png';
import cakeCastle from '@/assets/cake-castle.png';
import cakeEid from '@/assets/cake-eid.png';
import cakeRedVelvetNew from '@/assets/cake-redvelvet.jpg';
import cakeHeartAnniversary from '@/assets/cake-heart-anniversary.jpg';
import cakePohelaBoishakh from '@/assets/cake-pohela-boishakh.jpg';

// ======================================================
// TYPES
// ======================================================

export interface CakeSize {
  size: string;
  weight: string;
  price: number;
  serves: string;
}

export interface Cake {
  id: string;
  slug: string;
  name: {
    en: string;
    bn: string;
  };
  shortDescription: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  category: string;
  image: string;
  gallery: string[];
  basePrice: number;
  sizes: CakeSize[];
  flavors: string[];
  isPopular: boolean;
  isNew: boolean;
  isBestseller: boolean;
  ingredients: {
    en: string[];
    bn: string[];
  };
  preparationTime: string;
  tags: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  icon: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: {
    en: string;
    bn: string;
  };
  category: string;
}

// ======================================================
// CATEGORIES - Now includes Anniversary, Kids, Seasonal
// ======================================================

export const categories: Category[] = [
  {
    id: 'birthday',
    slug: 'birthday',
    name: { en: 'Birthday Cakes', bn: 'জন্মদিনের কেক' },
    description: { 
      en: 'Make birthdays special with our custom cakes', 
      bn: 'আমাদের কাস্টম কেক দিয়া জন্মদিন স্পেশাল করেন' 
    },
    icon: '🎂'
  },
  {
    id: 'wedding',
    slug: 'wedding',
    name: { en: 'Wedding Cakes', bn: 'বিয়ার কেক' },
    description: { 
      en: 'Elegant multi-tier cakes for your special day', 
      bn: 'আপনার বিশেষ দিনের লাগি এলিগ্যান্ট মাল্টি-টায়ার কেক' 
    },
    icon: '💒'
  },
  {
    id: 'anniversary',
    slug: 'anniversary',
    name: { en: 'Anniversary Cakes', bn: 'এনিভার্সারি কেক' },
    description: { 
      en: 'Celebrate your love with sweet memories', 
      bn: 'মিষ্টি স্মৃতি দিয়া আপনার ভালোবাসা উদযাপন করেন' 
    },
    icon: '💑'
  },
  {
    id: 'kids',
    slug: 'kids',
    name: { en: 'Kids Themed', bn: 'বাচ্চাদের থিম কেক' },
    description: { 
      en: 'Fun themed cakes for little ones', 
      bn: 'ছোটদের লাগি মজার থিম কেক' 
    },
    icon: '🦸'
  },
  {
    id: 'seasonal',
    slug: 'seasonal',
    name: { en: 'Seasonal Specials', bn: 'সিজনাল স্পেশাল' },
    description: { 
      en: 'Limited edition festive cakes', 
      bn: 'লিমিটেড এডিশন উৎসবের কেক' 
    },
    icon: '🎉'
  },
  {
    id: 'custom',
    slug: 'custom',
    name: { en: 'Custom Cakes', bn: 'কাস্টম কেক' },
    description: { 
      en: 'Your imagination, our creation', 
      bn: 'আপনার কল্পনা, আমাদের সৃষ্টি' 
    },
    icon: '🎨'
  },
  {
    id: 'cupcakes',
    slug: 'cupcakes',
    name: { en: 'Cupcakes', bn: 'কাপকেক' },
    description: { 
      en: 'Perfect bite-sized treats', 
      bn: 'পারফেক্ট ছোট মিষ্টি' 
    },
    icon: '🧁'
  },
  {
    id: 'desserts',
    slug: 'desserts',
    name: { en: 'Desserts', bn: 'ডেজার্ট' },
    description: { 
      en: 'Other sweet delights', 
      bn: 'আরো মিষ্টি আনন্দ' 
    },
    icon: '🍰'
  },
];

// ======================================================
// CAKES - Expanded collection with all categories
// ======================================================

export const cakes: Cake[] = [
  // BIRTHDAY CAKES
  {
    id: '1',
    slug: 'red-velvet',
    name: { en: 'Red Velvet Cake', bn: 'রেড ভেলভেট কেক' },
    shortDescription: {
      en: 'Rich, velvety cocoa cake with cream cheese frosting',
      bn: 'ক্রিম চিজ ফ্রস্টিং সহ সমৃদ্ধ ভেলভেটি কোকো কেক'
    },
    description: {
      en: 'Our signature Red Velvet cake is a perfect blend of subtle cocoa flavor with a hint of vanilla, topped with our homemade cream cheese frosting. Each layer is moist and tender, creating an unforgettable taste experience.',
      bn: 'আমাদের সিগনেচার রেড ভেলভেট কেক হইলো সূক্ষ্ম কোকো ফ্লেভার আর ভ্যানিলার নিখুঁত মিশ্রণ, ঘরে তৈরি ক্রিম চিজ ফ্রস্টিং দিয়া সাজানো। প্রতিটা লেয়ার নরম আর ময়েশ্চার, যা এক অবিস্মরণীয় স্বাদ দেয়।'
    },
    category: 'birthday',
    image: cakeRedVelvetNew,
    gallery: [cakeRedVelvetNew, cakeChocolate, cakeVanilla, cakeFruit],
    basePrice: 800,
    sizes: [
      { size: 'Small', weight: '1 lb', price: 800, serves: '4-6 people' },
      { size: 'Medium', weight: '2 lb', price: 1500, serves: '8-12 people' },
      { size: 'Large', weight: '3 lb', price: 2200, serves: '15-20 people' },
    ],
    flavors: ['Classic Red Velvet', 'Blue Velvet', 'Pink Velvet'],
    isPopular: true,
    isNew: false,
    isBestseller: true,
    ingredients: {
      en: ['Premium Flour', 'Dutch Cocoa', 'Cream Cheese', 'Butter', 'Fresh Eggs', 'Vanilla Extract'],
      bn: ['প্রিমিয়াম আটা', 'ডাচ কোকো', 'ক্রিম চিজ', 'মাখন', 'তাজা ডিম', 'ভ্যানিলা এক্সট্র্যাক্ট']
    },
    preparationTime: '24 hours advance order',
    tags: ['bestseller', 'cream-cheese', 'cocoa']
  },
  {
    id: '2',
    slug: 'chocolate-truffle',
    name: { en: 'Chocolate Truffle', bn: 'চকলেট ট্রাফল' },
    shortDescription: {
      en: 'Rich dark chocolate layers with ganache',
      bn: 'গানাশ সহ সমৃদ্ধ ডার্ক চকলেট লেয়ার'
    },
    description: {
      en: 'For true chocolate lovers! Our Chocolate Truffle cake features multiple layers of moist chocolate sponge, filled and covered with rich dark chocolate ganache. A chocolate lovers dream come true.',
      bn: 'সত্যিকারের চকলেট প্রেমীদের জন্য! আমাদের চকলেট ট্রাফল কেকে আছে একাধিক ময়েশ্চার চকলেট স্পঞ্জ লেয়ার, সমৃদ্ধ ডার্ক চকলেট গানাশ দিয়া ভরা আর ঢাকা।'
    },
    category: 'birthday',
    image: cakeChocolate,
    gallery: [cakeChocolate, cakeRedvelvet, cakeVanilla, cupcakes],
    basePrice: 700,
    sizes: [
      { size: 'Small', weight: '1 lb', price: 700, serves: '4-6 people' },
      { size: 'Medium', weight: '2 lb', price: 1300, serves: '8-12 people' },
      { size: 'Large', weight: '3 lb', price: 1900, serves: '15-20 people' },
    ],
    flavors: ['Dark Chocolate', 'Milk Chocolate', 'White Chocolate'],
    isPopular: true,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Belgian Chocolate', 'Fresh Cream', 'Premium Butter', 'Fresh Eggs', 'Premium Flour'],
      bn: ['বেলজিয়ান চকলেট', 'ফ্রেশ ক্রিম', 'প্রিমিয়াম মাখন', 'তাজা ডিম', 'প্রিমিয়াম আটা']
    },
    preparationTime: '24 hours advance order',
    tags: ['chocolate', 'ganache', 'rich']
  },
  {
    id: '3',
    slug: 'vanilla-birthday',
    name: { en: 'Vanilla Birthday Cake', bn: 'ভ্যানিলা জন্মদিনের কেক' },
    shortDescription: {
      en: 'Classic vanilla sponge with buttercream',
      bn: 'বাটারক্রিম সহ ক্লাসিক ভ্যানিলা স্পঞ্জ'
    },
    description: {
      en: 'The timeless classic! Our Vanilla Birthday Cake is a fluffy, moist vanilla sponge layered with smooth buttercream. Perfect for any celebration, customizable with your choice of colors and decorations.',
      bn: 'চিরন্তন ক্লাসিক! আমাদের ভ্যানিলা জন্মদিনের কেক হইলো ফ্লাফি, ময়েশ্চার ভ্যানিলা স্পঞ্জ স্মুথ বাটারক্রিম দিয়া লেয়ার করা। যেকোনো উদযাপনের লাগি পারফেক্ট, আপনার পছন্দের রঙ আর ডেকোরেশন দিয়া কাস্টমাইজ করা যায়।'
    },
    category: 'birthday',
    image: cakeVanilla,
    gallery: [cakeVanilla, cakeChocolate, cakeFruit, cakeRedvelvet],
    basePrice: 600,
    sizes: [
      { size: 'Small', weight: '1 lb', price: 600, serves: '4-6 people' },
      { size: 'Medium', weight: '2 lb', price: 1100, serves: '8-12 people' },
      { size: 'Large', weight: '3 lb', price: 1600, serves: '15-20 people' },
    ],
    flavors: ['Classic Vanilla', 'French Vanilla', 'Vanilla Bean'],
    isPopular: true,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Pure Vanilla Extract', 'Fresh Butter', 'Premium Flour', 'Fresh Eggs', 'Powdered Sugar'],
      bn: ['বিশুদ্ধ ভ্যানিলা এক্সট্র্যাক্ট', 'তাজা মাখন', 'প্রিমিয়াম আটা', 'তাজা ডিম', 'পাউডার চিনি']
    },
    preparationTime: '24 hours advance order',
    tags: ['vanilla', 'classic', 'customizable']
  },

  // WEDDING CAKES
  {
    id: '5',
    slug: 'wedding-special',
    name: { en: 'Wedding Special', bn: 'বিয়া স্পেশাল' },
    shortDescription: {
      en: 'Elegant multi-tier cake for your big day',
      bn: 'আপনার বড় দিনের লাগি এলিগ্যান্ট মাল্টি-টায়ার কেক'
    },
    description: {
      en: 'Make your wedding unforgettable with our stunning multi-tier wedding cakes. Each tier is customizable with your preferred flavors, and we create beautiful fondant decorations to match your wedding theme.',
      bn: 'আমাদের অসাধারণ মাল্টি-টায়ার বিয়ার কেক দিয়া আপনার বিয়া অবিস্মরণীয় করেন। প্রতিটা টায়ার আপনার পছন্দের ফ্লেভার দিয়া কাস্টমাইজ করা যায়, আর আমরা আপনার বিয়ার থিমের সাথে মিলায়া সুন্দর ফন্ড্যান্ট ডেকোরেশন তৈরি করি।'
    },
    category: 'wedding',
    image: cakeWedding,
    gallery: [cakeWedding, cakeVanilla, cakeRedvelvet, cakeFruit],
    basePrice: 3000,
    sizes: [
      { size: '2 Tier', weight: '5 lb', price: 3000, serves: '25-30 people' },
      { size: '3 Tier', weight: '8 lb', price: 5000, serves: '50-60 people' },
      { size: '4 Tier', weight: '12 lb', price: 8000, serves: '80-100 people' },
    ],
    flavors: ['Vanilla & Chocolate', 'Red Velvet', 'All Vanilla', 'All Chocolate'],
    isPopular: true,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Premium Fondant', 'Vanilla/Chocolate Sponge', 'Buttercream', 'Edible Flowers', 'Premium Flour'],
      bn: ['প্রিমিয়াম ফন্ড্যান্ট', 'ভ্যানিলা/চকলেট স্পঞ্জ', 'বাটারক্রিম', 'খাওয়ার ফুল', 'প্রিমিয়াম আটা']
    },
    preparationTime: '3-5 days advance order',
    tags: ['wedding', 'multi-tier', 'elegant', 'fondant']
  },
  {
    id: '12',
    slug: 'royal-wedding',
    name: { en: 'Royal Wedding Cake', bn: 'রয়্যাল বিয়ার কেক' },
    shortDescription: {
      en: 'Luxurious gold-accented wedding cake',
      bn: 'সোনালি ডিজাইনের বিলাসবহুল বিয়ার কেক'
    },
    description: {
      en: 'The ultimate statement piece for your wedding. Features elegant gold accents, hand-piped royal icing, and cascading sugar flowers. A true showstopper that will leave your guests in awe.',
      bn: 'আপনার বিয়ার লাগি চূড়ান্ত স্টেটমেন্ট পিস। এলিগ্যান্ট সোনালি অ্যাকসেন্ট, হাতে পাইপ করা রয়্যাল আইসিং, আর ঝরনার মতো চিনির ফুল। এমন একটা শোস্টপার যা আপনার অতিথিদের মুগ্ধ কইরা দিব।'
    },
    category: 'wedding',
    image: cakeRoyal,
    gallery: [cakeRoyal, cakeWedding, cupcakes, cakeRedvelvet],
    basePrice: 5000,
    sizes: [
      { size: '3 Tier', weight: '10 lb', price: 5000, serves: '60-70 people' },
      { size: '4 Tier', weight: '15 lb', price: 8000, serves: '100-120 people' },
      { size: '5 Tier', weight: '20 lb', price: 12000, serves: '150+ people' },
    ],
    flavors: ['Vanilla Bean', 'White Chocolate', 'Champagne', 'Lemon'],
    isPopular: false,
    isNew: true,
    isBestseller: false,
    ingredients: {
      en: ['Premium Fondant', 'Edible Gold', 'Sugar Flowers', 'Royal Icing', 'Premium Butter'],
      bn: ['প্রিমিয়াম ফন্ড্যান্ট', 'খাওয়ার সোনা', 'চিনির ফুল', 'রয়্যাল আইসিং', 'প্রিমিয়াম মাখন']
    },
    preparationTime: '5-7 days advance order',
    tags: ['wedding', 'luxury', 'gold', 'premium']
  },

  // ANNIVERSARY CAKES
  {
    id: '7',
    slug: 'heart-anniversary',
    name: { en: 'Heart Anniversary Cake', bn: 'হার্ট এনিভার্সারি কেক' },
    shortDescription: {
      en: 'Heart-shaped cake for your special day',
      bn: 'আপনার বিশেষ দিনের লাগি হার্ট শেপ কেক'
    },
    description: {
      en: 'Celebrate your love with our romantic heart-shaped anniversary cake. Decorated with roses and personalized message, perfect for couples celebrating their special milestone.',
      bn: 'আমাদের রোমান্টিক হার্ট শেপ এনিভার্সারি কেক দিয়া আপনার ভালোবাসা উদযাপন করেন। গোলাপ আর পার্সোনালাইজড মেসেজ দিয়া সাজানো, দম্পতিদের বিশেষ মাইলফলক উদযাপনের লাগি পারফেক্ট।'
    },
    category: 'anniversary',
    image: cakeHeartAnniversary,
    gallery: [cakeHeartAnniversary, cakeChocolate, cakeFruit, cakeWedding],
    basePrice: 900,
    sizes: [
      { size: 'Small Heart', weight: '1.5 lb', price: 900, serves: '6-8 people' },
      { size: 'Medium Heart', weight: '2.5 lb', price: 1600, serves: '10-14 people' },
      { size: 'Large Heart', weight: '4 lb', price: 2500, serves: '18-22 people' },
    ],
    flavors: ['Red Velvet', 'Strawberry', 'Chocolate', 'Vanilla'],
    isPopular: true,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Fondant Roses', 'Premium Flour', 'Fresh Cream', 'Butter', 'Edible Pearls'],
      bn: ['ফন্ড্যান্ট গোলাপ', 'প্রিমিয়াম আটা', 'ফ্রেশ ক্রিম', 'মাখন', 'খাওয়ার মুক্তা']
    },
    preparationTime: '24-48 hours advance order',
    tags: ['anniversary', 'heart', 'romantic', 'couple']
  },
  {
    id: '8',
    slug: 'golden-anniversary',
    name: { en: 'Golden Anniversary Cake', bn: 'গোল্ডেন এনিভার্সারি কেক' },
    shortDescription: {
      en: 'Elegant gold-themed celebration cake',
      bn: 'এলিগ্যান্ট সোনালি থিমের উদযাপন কেক'
    },
    description: {
      en: 'Perfect for milestone anniversaries like 25th or 50th. Features elegant gold accents, personalized topper with years, and your choice of premium flavors.',
      bn: '২৫তম বা ৫০তম এর মতো মাইলফলক এনিভার্সারির লাগি পারফেক্ট। এলিগ্যান্ট সোনালি অ্যাকসেন্ট, বছর সহ পার্সোনালাইজড টপার, আর আপনার পছন্দের প্রিমিয়াম ফ্লেভার।'
    },
    category: 'anniversary',
    image: cakeGolden,
    gallery: [cakeGolden, cakeWedding, cakeRedvelvet, cupcakes],
    basePrice: 1500,
    sizes: [
      { size: 'Standard', weight: '2 lb', price: 1500, serves: '10-12 people' },
      { size: 'Premium', weight: '3 lb', price: 2200, serves: '18-22 people' },
      { size: 'Grand', weight: '5 lb', price: 3500, serves: '30-35 people' },
    ],
    flavors: ['Vanilla Gold', 'Chocolate Truffle', 'Butterscotch', 'Caramel'],
    isPopular: false,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Edible Gold Leaf', 'Premium Butter', 'Fresh Eggs', 'Fondant', 'Caramel'],
      bn: ['খাওয়ার সোনার পাতা', 'প্রিমিয়াম মাখন', 'তাজা ডিম', 'ফন্ড্যান্ট', 'ক্যারামেল']
    },
    preparationTime: '48 hours advance order',
    tags: ['anniversary', 'gold', 'milestone', 'elegant']
  },

  // KIDS THEMED CAKES
  {
    id: '9',
    slug: 'cartoon-character',
    name: { en: 'Cartoon Character Cake', bn: 'কার্টুন ক্যারেক্টার কেক' },
    shortDescription: {
      en: 'Your kids favorite cartoon on a cake',
      bn: 'আপনার বাচ্চার প্রিয় কার্টুন কেকে'
    },
    description: {
      en: 'Make your little ones birthday magical! Choose any cartoon character and we will recreate it beautifully on a delicious cake. Popular choices include Doraemon, Ben 10, Frozen, Barbie, and more.',
      bn: 'আপনার ছোট্টদের জন্মদিন জাদুময় করেন! যেকোনো কার্টুন ক্যারেক্টার বাছাই করেন আর আমরা সেইটা সুন্দরভাবে সুস্বাদু কেকে তৈরি কইরা দিমু। জনপ্রিয় চয়েসগুলার মধ্যে আছে ডোরেমন, বেন ১০, ফ্রোজেন, বার্বি ইত্যাদি।'
    },
    category: 'kids',
    image: cakeCartoon,
    gallery: [cakeCartoon, cakeVanilla],
    basePrice: 1000,
    sizes: [
      { size: 'Small', weight: '1.5 lb', price: 1000, serves: '8-10 people' },
      { size: 'Medium', weight: '2.5 lb', price: 1800, serves: '15-18 people' },
      { size: 'Large', weight: '4 lb', price: 2800, serves: '25-30 people' },
    ],
    flavors: ['Vanilla Rainbow', 'Chocolate', 'Strawberry', 'Butterscotch'],
    isPopular: true,
    isNew: false,
    isBestseller: true,
    ingredients: {
      en: ['Fondant Characters', 'Food Colors', 'Buttercream', 'Premium Flour', 'Fresh Eggs'],
      bn: ['ফন্ড্যান্ট ক্যারেক্টার', 'ফুড কালার', 'বাটারক্রিম', 'প্রিমিয়াম আটা', 'তাজা ডিম']
    },
    preparationTime: '48-72 hours advance order',
    tags: ['kids', 'cartoon', 'birthday', 'colorful']
  },
  {
    id: '10',
    slug: 'superhero-cake',
    name: { en: 'Superhero Cake', bn: 'সুপারহিরো কেক' },
    shortDescription: {
      en: 'Action-packed superhero themed cake',
      bn: 'অ্যাকশন-ভরা সুপারহিরো থিম কেক'
    },
    description: {
      en: 'For little heroes! Choose from Spider-Man, Batman, Superman, Avengers, or any superhero your child loves. Complete with action figure toppers and themed decorations.',
      bn: 'ছোট্ট হিরোদের লাগি! স্পাইডার-ম্যান, ব্যাটম্যান, সুপারম্যান, অ্যাভেঞ্জার্স বা আপনার বাচ্চার পছন্দের যেকোনো সুপারহিরো বাছাই করেন। অ্যাকশন ফিগার টপার আর থিমড ডেকোরেশন সহ।'
    },
    category: 'kids',
    image: cakeSuperhero,
    gallery: [cakeSuperhero, cakeChocolate],
    basePrice: 1200,
    sizes: [
      { size: 'Standard', weight: '2 lb', price: 1200, serves: '10-12 people' },
      { size: 'Party Size', weight: '3 lb', price: 1900, serves: '18-22 people' },
      { size: 'Grand', weight: '4.5 lb', price: 2800, serves: '30-35 people' },
    ],
    flavors: ['Chocolate Power', 'Vanilla Shield', 'Strawberry Blast'],
    isPopular: true,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Fondant Figures', 'Buttercream', 'Edible Prints', 'Premium Chocolate', 'Fresh Cream'],
      bn: ['ফন্ড্যান্ট ফিগার', 'বাটারক্রিম', 'খাওয়ার প্রিন্ট', 'প্রিমিয়াম চকলেট', 'ফ্রেশ ক্রিম']
    },
    preparationTime: '48-72 hours advance order',
    tags: ['kids', 'superhero', 'birthday', 'action']
  },
  {
    id: '11',
    slug: 'princess-castle',
    name: { en: 'Princess Castle Cake', bn: 'প্রিন্সেস ক্যাসল কেক' },
    shortDescription: {
      en: 'Magical castle cake for little princesses',
      bn: 'ছোট্ট রাজকন্যাদের লাগি জাদুর প্রাসাদ কেক'
    },
    description: {
      en: 'Every little girl dreams of being a princess! Our castle cake features towers, turrets, and your choice of princess theme - Frozen, Cinderella, or custom design.',
      bn: 'প্রতিটা ছোট্ট মেয়ে রাজকন্যা হওয়ার স্বপ্ন দেখে! আমাদের ক্যাসল কেকে আছে টাওয়ার, টারেট, আর আপনার পছন্দের প্রিন্সেস থিম - ফ্রোজেন, সিন্ডারেলা, বা কাস্টম ডিজাইন।'
    },
    category: 'kids',
    image: cakeCastle,
    gallery: [cakeCastle, cakeVanilla],
    basePrice: 1500,
    sizes: [
      { size: 'Mini Castle', weight: '2 lb', price: 1500, serves: '12-15 people' },
      { size: 'Royal Castle', weight: '3.5 lb', price: 2500, serves: '25-30 people' },
      { size: 'Grand Palace', weight: '5 lb', price: 4000, serves: '40-50 people' },
    ],
    flavors: ['Pink Vanilla', 'Strawberry Dream', 'White Chocolate'],
    isPopular: false,
    isNew: true,
    isBestseller: false,
    ingredients: {
      en: ['Fondant Castle', 'Edible Glitter', 'Pink Buttercream', 'Sugar Flowers', 'Edible Pearls'],
      bn: ['ফন্ড্যান্ট ক্যাসল', 'খাওয়ার গ্লিটার', 'পিংক বাটারক্রিম', 'চিনির ফুল', 'খাওয়ার মুক্তা']
    },
    preparationTime: '72 hours advance order',
    tags: ['kids', 'princess', 'castle', 'girls']
  },

  // SEASONAL SPECIALS
  {
    id: '13',
    slug: 'eid-special',
    name: { en: 'Eid Special Cake', bn: 'ঈদ স্পেশাল কেক' },
    shortDescription: {
      en: 'Festive cake for Eid celebrations',
      bn: 'ঈদ উদযাপনের লাগি ফেস্টিভ কেক'
    },
    description: {
      en: 'Celebrate Eid with our specially designed festive cakes. Features crescent moon and star decorations, available in premium flavors perfect for family gatherings.',
      bn: 'আমাদের স্পেশালি ডিজাইন করা ফেস্টিভ কেক দিয়া ঈদ উদযাপন করেন। চাঁদ আর তারা ডেকোরেশন সহ, পারিবারিক সমাবেশের লাগি পারফেক্ট প্রিমিয়াম ফ্লেভারে পাওয়া যায়।'
    },
    category: 'seasonal',
    image: cakeEid,
    gallery: [cakeEid, cakeVanilla],
    basePrice: 850,
    sizes: [
      { size: 'Family', weight: '2 lb', price: 850, serves: '10-12 people' },
      { size: 'Celebration', weight: '3 lb', price: 1400, serves: '18-22 people' },
      { size: 'Grand Feast', weight: '5 lb', price: 2200, serves: '35-40 people' },
    ],
    flavors: ['Sheer Khurma', 'Pistachio Rose', 'Mango Delight', 'Classic Vanilla'],
    isPopular: true,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Dates', 'Pistachios', 'Rose Water', 'Vermicelli', 'Fresh Cream'],
      bn: ['খেজুর', 'পেস্তা', 'গোলাপ জল', 'সেমাই', 'ফ্রেশ ক্রিম']
    },
    preparationTime: '24-48 hours advance order',
    tags: ['eid', 'festive', 'seasonal', 'family']
  },
  {
    id: '14',
    slug: 'pohela-boishakh',
    name: { en: 'Pohela Boishakh Cake', bn: 'পহেলা বৈশাখের কেক' },
    shortDescription: {
      en: 'Traditional Bengali New Year cake',
      bn: 'ঐতিহ্যবাহী বাংলা নববর্ষের কেক'
    },
    description: {
      en: 'Welcome the Bengali New Year with our specially designed Pohela Boishakh cake. Features traditional alpona designs, red and white theme, and classic Bengali flavors.',
      bn: 'আমাদের স্পেশালি ডিজাইন করা পহেলা বৈশাখের কেক দিয়া বাংলা নববর্ষকে স্বাগতম জানান। ঐতিহ্যবাহী আলপনা ডিজাইন, লাল-সাদা থিম, আর ক্লাসিক বাংলা ফ্লেভার সহ।'
    },
    category: 'seasonal',
    image: cakePohelaBoishakh,
    gallery: [cakePohelaBoishakh],
    basePrice: 900,
    sizes: [
      { size: 'Standard', weight: '2 lb', price: 900, serves: '10-12 people' },
      { size: 'Family', weight: '3 lb', price: 1500, serves: '18-22 people' },
      { size: 'Celebration', weight: '4.5 lb', price: 2300, serves: '30-35 people' },
    ],
    flavors: ['Mishti Doi', 'Mango', 'Litchi', 'Rose Sandesh'],
    isPopular: false,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Yogurt', 'Mango', 'Rose Syrup', 'Cardamom', 'Saffron'],
      bn: ['দই', 'আম', 'গোলাপ সিরাপ', 'এলাচ', 'জাফরান']
    },
    preparationTime: '24-48 hours advance order',
    tags: ['boishakh', 'bengali', 'new-year', 'traditional']
  },
  {
    id: '15',
    slug: 'valentines-special',
    name: { en: "Valentine's Special", bn: 'ভ্যালেন্টাইন স্পেশাল' },
    shortDescription: {
      en: 'Romantic cake for your loved one',
      bn: 'আপনার প্রিয়জনের লাগি রোমান্টিক কেক'
    },
    description: {
      en: 'Express your love with our romantic Valentine\'s special cakes. Features heart shapes, rose decorations, and personalized love messages.',
      bn: 'আমাদের রোমান্টিক ভ্যালেন্টাইন স্পেশাল কেক দিয়া আপনার ভালোবাসা প্রকাশ করেন। হার্ট শেপ, গোলাপ ডেকোরেশন, আর পার্সোনালাইজড প্রেম বার্তা সহ।'
    },
    category: 'seasonal',
    image: cakeHeartAnniversary,
    gallery: [cakeHeartAnniversary],
    basePrice: 1000,
    sizes: [
      { size: 'Couple', weight: '1 lb', price: 1000, serves: '4-6 people' },
      { size: 'Love', weight: '2 lb', price: 1800, serves: '10-12 people' },
      { size: 'Romance', weight: '3 lb', price: 2600, serves: '18-20 people' },
    ],
    flavors: ['Red Velvet Love', 'Strawberry Kiss', 'Chocolate Passion', 'Rose Petal'],
    isPopular: true,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Fresh Strawberries', 'Rose Petals', 'Belgian Chocolate', 'Fresh Cream', 'Fondant Hearts'],
      bn: ['তাজা স্ট্রবেরি', 'গোলাপ পাপড়ি', 'বেলজিয়ান চকলেট', 'ফ্রেশ ক্রিম', 'ফন্ড্যান্ট হার্ট']
    },
    preparationTime: '24 hours advance order',
    tags: ['valentine', 'romantic', 'love', 'heart']
  },

  // DESSERTS & CUPCAKES
  {
    id: '4',
    slug: 'fresh-fruit',
    name: { en: 'Fresh Fruit Cake', bn: 'তাজা ফ্রুট কেক' },
    shortDescription: {
      en: 'Light sponge topped with seasonal fresh fruits',
      bn: 'মৌসুমী তাজা ফল সহ হালকা স্পঞ্জ'
    },
    description: {
      en: 'A refreshing delight! Our Fresh Fruit Cake features a light vanilla sponge topped with fresh whipped cream and an assortment of seasonal fruits. Perfect for those who prefer something lighter.',
      bn: 'একটা সতেজ আনন্দ! আমাদের ফ্রেশ ফ্রুট কেকে আছে হালকা ভ্যানিলা স্পঞ্জ, ফ্রেশ হুইপড ক্রিম আর মৌসুমী ফলের সমাহার। যারা হালকা কিছু পছন্দ করেন তাদের লাগি পারফেক্ট।'
    },
    category: 'desserts',
    image: cakeFruit,
    gallery: [cakeFruit, cakeVanilla, cakeChocolate, cupcakes],
    basePrice: 900,
    sizes: [
      { size: 'Small', weight: '1 lb', price: 900, serves: '4-6 people' },
      { size: 'Medium', weight: '2 lb', price: 1700, serves: '8-12 people' },
      { size: 'Large', weight: '3 lb', price: 2500, serves: '15-20 people' },
    ],
    flavors: ['Mixed Fruits', 'Mango Special', 'Strawberry Delight'],
    isPopular: false,
    isNew: true,
    isBestseller: false,
    ingredients: {
      en: ['Seasonal Fresh Fruits', 'Whipped Cream', 'Vanilla Sponge', 'Fresh Eggs', 'Premium Flour'],
      bn: ['মৌসুমী তাজা ফল', 'হুইপড ক্রিম', 'ভ্যানিলা স্পঞ্জ', 'তাজা ডিম', 'প্রিমিয়াম আটা']
    },
    preparationTime: '24 hours advance order',
    tags: ['fresh', 'fruit', 'light', 'healthy']
  },
  {
    id: '6',
    slug: 'cupcake-box',
    name: { en: 'Cupcake Box', bn: 'কাপকেক বক্স' },
    shortDescription: {
      en: 'Box of 6 or 12 delicious cupcakes',
      bn: '৬ বা ১২টা সুস্বাদু কাপকেকের বক্স'
    },
    description: {
      en: 'Perfect for parties or gifts! Our cupcake boxes come with an assortment of flavors, each topped with beautiful buttercream swirls and decorations. Available in boxes of 6 or 12.',
      bn: 'পার্টি বা গিফটের লাগি পারফেক্ট! আমাদের কাপকেক বক্সে বিভিন্ন ফ্লেভারের সমাহার থাকে, প্রতিটায় সুন্দর বাটারক্রিম সোয়ার্ল আর ডেকোরেশন। ৬ বা ১২ টার বক্সে পাওয়া যায়।'
    },
    category: 'cupcakes',
    image: cupcakes,
    gallery: [cupcakes, cakeRedvelvet, cakeChocolate, cakeVanilla],
    basePrice: 400,
    sizes: [
      { size: 'Box of 6', weight: '6 pcs', price: 400, serves: '6 people' },
      { size: 'Box of 12', weight: '12 pcs', price: 750, serves: '12 people' },
      { size: 'Party Box 24', weight: '24 pcs', price: 1400, serves: '24 people' },
    ],
    flavors: ['Vanilla', 'Chocolate', 'Red Velvet', 'Mixed'],
    isPopular: false,
    isNew: false,
    isBestseller: false,
    ingredients: {
      en: ['Buttercream', 'Various Flavored Sponge', 'Decorative Sprinkles', 'Fresh Eggs', 'Premium Flour'],
      bn: ['বাটারক্রিম', 'বিভিন্ন ফ্লেভারের স্পঞ্জ', 'ডেকোরেটিভ স্প্রিঙ্কলস', 'তাজা ডিম', 'প্রিমিয়াম আটা']
    },
    preparationTime: '12-24 hours advance order',
    tags: ['cupcakes', 'party', 'gift', 'assorted']
  },
];

// ======================================================
// GALLERY ITEMS
// ======================================================

export const galleryItems: GalleryItem[] = [
  { id: '1', image: cakeRedvelvet, title: { en: 'Red Velvet Delight', bn: 'রেড ভেলভেট ডিলাইট' }, category: 'birthday' },
  { id: '2', image: cakeChocolate, title: { en: 'Chocolate Dream', bn: 'চকলেট ড্রিম' }, category: 'birthday' },
  { id: '3', image: cakeVanilla, title: { en: 'Classic Birthday', bn: 'ক্লাসিক জন্মদিন' }, category: 'birthday' },
  { id: '4', image: cakeFruit, title: { en: 'Fresh Fruit Bliss', bn: 'ফ্রেশ ফ্রুট ব্লিস' }, category: 'desserts' },
  { id: '5', image: cakeWedding, title: { en: 'Elegant Wedding', bn: 'এলিগ্যান্ট বিয়া' }, category: 'wedding' },
  { id: '6', image: cupcakes, title: { en: 'Cupcake Party', bn: 'কাপকেক পার্টি' }, category: 'cupcakes' },
  { id: '7', image: cakeRedvelvet, title: { en: 'Anniversary Love', bn: 'এনিভার্সারি লাভ' }, category: 'anniversary' },
  { id: '8', image: cakeVanilla, title: { en: 'Princess Party', bn: 'প্রিন্সেস পার্টি' }, category: 'kids' },
  { id: '9', image: cakeChocolate, title: { en: 'Superhero Action', bn: 'সুপারহিরো অ্যাকশন' }, category: 'kids' },
];

// ======================================================
// HELPER FUNCTIONS
// ======================================================

export const getCakeBySlug = (slug: string): Cake | undefined => {
  return cakes.find(cake => cake.slug === slug);
};

export const getCakesByCategory = (categorySlug: string): Cake[] => {
  return cakes.filter(cake => cake.category === categorySlug);
};

export const getPopularCakes = (): Cake[] => {
  return cakes.filter(cake => cake.isPopular);
};

export const getFeaturedCakes = (limit: number = 6): Cake[] => {
  // Get a mix of popular, bestseller, and new cakes
  const featured = cakes.filter(cake => cake.isPopular || cake.isBestseller || cake.isNew);
  return featured.slice(0, limit);
};

export const getRelatedCakes = (currentCakeId: string, category: string, limit: number = 3): Cake[] => {
  return cakes
    .filter(cake => cake.id !== currentCakeId && cake.category === category)
    .slice(0, limit);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};
