import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Concealed Carry Holster - VNSH Gray BOGO',
  description: 'Buy 1 Get 1 FREE Blowout On Limited-Run Gray Holsters!',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Top Concealed Carry Holster - VNSH Gray BOGO',
    description: 'Buy 1 Get 1 FREE Blowout On Limited-Run Gray Holsters!',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'VNSH Holster Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Concealed Carry Holster - VNSH Gray BOGO',
    description: 'Buy 1 Get 1 FREE Blowout On Limited-Run Gray Holsters!',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
