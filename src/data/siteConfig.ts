// ======================================================
// SITE CONFIGURATION
// Edit this file to update contact info, business hours, etc.
// ======================================================

export const siteConfig = {
  // Business Info
  businessName: 'Cake Castle',
  tagline: {
    en: 'Handcrafted Cakes Made with Love',
    bn: 'ভালোবাসায় হাতে তৈরি কেক'
  },
  
  // Contact Information
  phone: '+880 1875-268567',
  whatsappNumber: '8801875268567', // Without + sign
  email: 'cakecastle@example.com',
  facebookPageUrl: 'https://www.facebook.com/share/1Fy8Kbidcu/',
  facebookPage: '1Fy8Kbidcu',
  instagramHandle: 'cakecastlebeanibazar',
  bkashNumber: '01875268567',
  
  // Location
  location: {
    en: 'Beanibazar, Sylhet, Bangladesh',
    bn: 'বিয়ানীবাজার, সিলেট, বাংলাদেশ'
  },
  googleMapsUrl: 'https://maps.google.com/?q=Beanibazar,Sylhet,Bangladesh',
  
  // Business Hours
  businessHours: {
    en: 'Sat-Thu: 10 AM - 8 PM',
    bn: 'শনি-বৃহঃ: সকাল ১০টা - রাত ৮টা'
  },
  
  // Payment Methods
  paymentMethods: [
    { name: 'Cash', icon: '💵', color: null },
    { name: 'bKash', icon: null, color: '#E2136E' },
  ],
  
  // Social Proof Stats
  stats: {
    happyCustomers: '500+',
    yearsExperience: '3+',
    cakesMade: '500+',
    fbRating: '4.9',
  },
  
  // SEO
  seo: {
    title: 'Cake Castle Beanibazar | Homemade Cakes in Sylhet',
    description: 'Order delicious homemade cakes for birthdays, weddings, and all celebrations in Beanibazar, Sylhet. Fresh, handcrafted with love.',
    keywords: 'cake, beanibazar, sylhet, birthday cake, wedding cake, homemade cake, কেক, বিয়ানীবাজার, সিলেট',
  },
  
  // Delivery Info
  delivery: {
    area: {
      en: 'Beanibazar and surrounding areas',
      bn: 'বিয়ানীবাজার এবং আশেপাশের এলাকা'
    },
    minOrder: 600,
    deliveryFee: {
      en: 'Free delivery within Beanibazar',
      bn: 'বিয়ানীবাজারে ফ্রি ডেলিভারি'
    }
  },
  
  // Order Lead Times
  orderLeadTimes: {
    standard: '24 hours',
    wedding: '3-5 days',
    custom: '48 hours',
  },

  // Customer Testimonials/Reviews
  testimonials: [
    {
      id: 1,
      name: { en: 'Fatima Rahman', bn: 'ফাতিমা রহমান' },
      location: { en: 'Beanibazar', bn: 'বিয়ানীবাজার' },
      rating: 5,
      text: {
        en: 'The wedding cake was beautiful and delicious! Everyone at the event loved it. It looked amazing and tasted even better.',
        bn: 'বিয়ার কেক খুব ভালা লাগছে, মজাও অইছে। অনুষ্ঠানো সবর পছন্দ অইছে। দেখতেও যেলা সুন্দর, খাইতেও বেশ মজা।'
      },
      cakeType: { en: 'Wedding Cake', bn: 'বিয়ার কেক' },
      avatar: '👩'
    },
    {
      id: 2,
      name: { en: 'Karim Ahmed', bn: 'করিম আহমেদ' },
      location: { en: 'Beanibazar', bn: 'বিয়ানীবাজার' },
      rating: 5,
      text: {
        en: 'Ordered a chocolate cake for my little one\'s birthday. The design was great. Will definitely order again!',
        bn: 'আমার ছোটোজনর জন্নদিন নিছি, চেকলেটর আচিল। ডিযাইন ভালা লগছে। বাদে খাইলেও অডার দিমু।'
      },
      cakeType: { en: 'Birthday Cake', bn: 'জন্মদিনের কেক' },
      avatar: '👨'
    },
    {
      id: 3,
      name: { en: 'Sumaiya Begum', bn: 'সুমাইয়া বেগম' },
      location: { en: 'Beanibazar', bn: 'বিয়ানীবাজার' },
      rating: 5,
      text: {
        en: 'Best mango cake in Beanibazar! Fresh and delicious, MashaAllah.',
        bn: 'amar gece lagsi beyanibajar or sera mangoo cake. kaite taja ar moja, mashaAllah'
      },
      cakeType: { en: 'Mango Cake', bn: 'ম্যাংগো কেক' },
      avatar: '👩'
    },
    {
      id: 4,
      name: { en: 'Rofiq Ahmed', bn: 'রফিক আহমেদ' },
      location: { en: 'Beanibazar', bn: 'বিয়ানীবাজার' },
      rating: 5,
      text: {
        en: 'Ordered for Eid and the cake was perfect. Looked premium and tasted great.',
        bn: 'ঈদের দিন অর্ডার দিসলাম। খুব পারফেক্ট লাগছে। দেখতেও উন্নত খাইতেও ভালা।'
      },
      cakeType: { en: 'Eid Cake', bn: 'ঈদের কেক' },
      avatar: '👨'
    }
  ],

  // FAQ Items
  faq: [
    {
      id: 1,
      question: {
        en: 'How do I place an order?',
        bn: 'কিভাবে অর্ডার দিমু?'
      },
      answer: {
        en: 'Simply message us on WhatsApp or Facebook with your cake choice, size, and delivery date. We\'ll confirm your order and provide payment details.',
        bn: 'হোয়াটসঅ্যাপ বা ফেসবুকে মেসেজ করেন আপনার পছন্দের কেক, সাইজ আর ডেলিভারির তারিখ দিয়া। আমরা অর্ডার নিশ্চিত কইরা পেমেন্টের বিস্তারিত জানামু।'
      }
    },
    {
      id: 2,
      question: {
        en: 'What payment methods do you accept?',
        bn: 'কোন কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?'
      },
      answer: {
        en: 'We accept Cash and bKash. For custom orders, 50% advance payment is required.',
        bn: 'আমরা ক্যাশ আর বিকাশ নিই। কাস্টম অর্ডারে ৫০% অগ্রিম পেমেন্ট লাগে।'
      }
    },
    {
      id: 3,
      question: {
        en: 'How much advance notice do you need?',
        bn: 'কতদিন আগে অর্ডার দিতে হবে?'
      },
      answer: {
        en: 'Standard cakes need 24 hours notice. Custom cakes require 48 hours, and wedding cakes need 3-5 days advance booking.',
        bn: 'সাধারণ কেকে ২৪ ঘণ্টা আগে। কাস্টম কেকে ৪৮ ঘণ্টা, আর বিয়ার কেকে ৩-৫ দিন আগে অর্ডার দিতে হবে।'
      }
    },
    {
      id: 4,
      question: {
        en: 'Do you deliver outside Beanibazar?',
        bn: 'বিয়ানীবাজারের বাইরে ডেলিভারি দেন?'
      },
      answer: {
        en: 'Yes! We deliver to Sylhet city and surrounding areas. Delivery charges apply for locations outside Beanibazar.',
        bn: 'হ্যাঁ! সিলেট শহর আর আশেপাশের এলাকায় ডেলিভারি দিই। বিয়ানীবাজারের বাইরে ডেলিভারি চার্জ লাগে।'
      }
    },
    {
      id: 5,
      question: {
        en: 'Can I customize my cake design?',
        bn: 'কেকের ডিজাইন কাস্টমাইজ করা যাবে?'
      },
      answer: {
        en: 'Absolutely! Send us your design ideas, themes, or reference photos and we\'ll create your dream cake.',
        bn: 'অবশ্যই! আপনার ডিজাইন আইডিয়া, থিম বা রেফারেন্স ছবি পাঠান, আমরা আপনার স্বপ্নের কেক বানামু।'
      }
    },
    {
      id: 6,
      question: {
        en: 'What if I need to cancel my order?',
        bn: 'অর্ডার বাতিল করতে হইলে কি করতে হবে?'
      },
      answer: {
        en: 'Cancel 24 hours before for a full refund. Same-day cancellations may be subject to partial charges.',
        bn: '২৪ ঘণ্টা আগে বাতিল করলে পুরা টাকা ফেরত। একই দিনে বাতিল করলে আংশিক চার্জ লাগতে পারে।'
      }
    }
  ]
};

// Quick messages for WhatsApp ordering
export const quickMessages = {
  general: {
    en: 'Hello! I want to order a cake from Cake Castle Beanibazar',
    bn: 'আসসালামু আলাইকুম! আমি কেক ক্যাসল থাইকা কেক অর্ডার দিতে চাই'
  },
  customOrder: {
    en: 'Hi! I want to order a custom cake. Here are my requirements:',
    bn: 'আসসালামু আলাইকুম! আমি একটা কাস্টম কেক অর্ডার দিতে চাই। আমার চাহিদাগুলা হইলো:'
  },
  priceInquiry: {
    en: 'Hello! I want to know the price for',
    bn: 'আসসালামু আলাইকুম! আমি দাম জানতে চাই'
  }
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getMessengerLink = () => {
  return `https://m.me/${siteConfig.facebookPage}`;
};

export const getFacebookLink = () => {
  return siteConfig.facebookPageUrl;
};

export const getInstagramLink = () => {
  return `https://instagram.com/${siteConfig.instagramHandle}`;
};
