'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Import critical components directly
import Navbar from '@/components/Navbar/Navbar';
import Content from '@/components/Content/Content';

// Lazy load non-critical components
const Faqs = dynamic(() => import('@/components/Faqs/Faqs'), {
  loading: () => <div className="h-64 flex items-center justify-center">Loading FAQs...</div>,
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  loading: () => <div className="h-32 bg-gray-50"></div>,
  ssr: false,
});

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
    <div className="w-full max-w-[1200px] mx-auto px-5 py-1 lg:px-20 bg-white">{children}</div>
  </div>
);

const getCheckoutUrl = (baseUrl: string) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const queryString = params.toString();
  return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Content />
        <Suspense
          fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}
        >
          <BackgroundWrapper>
            <Faqs />
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnshgreybogo1/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-bold leading-normal md:leading-tight text-[#ff0000]">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
          </BackgroundWrapper>
          <BackgroundWrapper>
            <Footer />
          </BackgroundWrapper>
        </Suspense>
      </main>
    </>
  );
}
