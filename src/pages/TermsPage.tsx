import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const { language, t } = useLanguage();

  const terms = {
    en: [
      {
        title: 'Ordering Policy',
        items: [
          'Orders must be placed at least 24 hours in advance for regular cakes',
          'Wedding and multi-tier cakes require 3-5 days advance notice',
          'Custom design cakes need 48 hours minimum notice',
          'All orders are confirmed only after receiving advance payment'
        ]
      },
      {
        title: 'Payment Terms',
        items: [
          '50% advance payment required for all orders',
          'Remaining 50% due upon pickup/delivery',
          'Payment accepted via bKash, Nagad, or Cash',
          'No refunds on confirmed orders'
        ]
      },
      {
        title: 'Delivery & Pickup',
        items: [
          'Free delivery within Beanibazar town',
          'Delivery charges apply for surrounding areas',
          'Customer must be available at delivery time',
          'Pickup available from our location during business hours'
        ]
      },
      {
        title: 'Cancellation Policy',
        items: [
          'Cancellations accepted 48+ hours before delivery - 75% refund',
          'Cancellations within 24-48 hours - 50% refund',
          'No refund for cancellations within 24 hours',
          'Custom cakes are non-refundable once production starts'
        ]
      },
      {
        title: 'Quality Guarantee',
        items: [
          'All cakes are freshly baked on the day of delivery',
          'We use only quality ingredients',
          'Report any issues within 2 hours of receiving the cake',
          'We will replace or compensate for any quality issues'
        ]
      }
    ],
    bn: [
      {
        title: 'অর্ডার নীতি',
        items: [
          'সাধারণ কেকের লাগি অন্তত ২৪ ঘণ্টা আগে অর্ডার দিতে হইব',
          'বিয়া আর মাল্টি-টায়ার কেকের লাগি ৩-৫ দিন আগে জানাইতে হইব',
          'কাস্টম ডিজাইন কেকের লাগি সর্বনিম্ন ৪৮ ঘণ্টা আগে জানাইতে হইব',
          'অগ্রিম পেমেন্ট পাওয়ার পরেই অর্ডার নিশ্চিত করা হইব'
        ]
      },
      {
        title: 'পেমেন্ট শর্তাবলী',
        items: [
          'সব অর্ডারের লাগি ৫০% অগ্রিম পেমেন্ট দিতে হইব',
          'বাকি ৫০% পিকআপ/ডেলিভারির সময় দিতে হইব',
          'বিকাশ, নগদ বা ক্যাশে পেমেন্ট করা যাইব',
          'নিশ্চিত অর্ডারে কোনো রিফান্ড নাই'
        ]
      },
      {
        title: 'ডেলিভারি ও পিকআপ',
        items: [
          'বিয়ানীবাজার শহরে ফ্রি ডেলিভারি',
          'আশেপাশের এলাকায় ডেলিভারি চার্জ লাগব',
          'ডেলিভারির সময় গ্রাহককে থাকতে হইব',
          'আমাদের লোকেশন থাইকা বিজনেস আওয়ারে পিকআপ করা যাইব'
        ]
      },
      {
        title: 'বাতিল নীতি',
        items: [
          'ডেলিভারির ৪৮+ ঘণ্টা আগে বাতিল করলে ৭৫% রিফান্ড',
          '২৪-৪৮ ঘণ্টার মধ্যে বাতিল করলে ৫০% রিফান্ড',
          '২৪ ঘণ্টার মধ্যে বাতিল করলে কোনো রিফান্ড নাই',
          'কাস্টম কেক তৈরি শুরু হইলে রিফান্ড নাই'
        ]
      },
      {
        title: 'কোয়ালিটি গ্যারান্টি',
        items: [
          'সব কেক ডেলিভারির দিন তাজা বেক করা হয়',
          'আমরা শুধু ভালো মানের উপাদান ব্যবহার করি',
          'কেক পাওয়ার ২ ঘণ্টার মধ্যে সমস্যা জানান',
          'কোনো কোয়ালিটি সমস্যা হইলে আমরা বদলায়া দিব বা ক্ষতিপূরণ দিব'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="heading-section text-foreground mb-4">{t('terms.title')}</h1>
            <p className="text-muted-foreground">{t('terms.subtitle')}</p>
          </motion.div>

          <div className="space-y-8">
            {terms[language].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-soft"
              >
                <h2 className="heading-card text-foreground mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
