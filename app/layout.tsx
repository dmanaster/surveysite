import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import brandData from '../lib/brandData';
import CheckForUndefined from '../lib/checkForUndefined';
import type { Viewport } from 'next';
import type { BrandData } from '../lib/types';

export const viewport: Viewport = {
  themeColor: '#000000',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="flex min-h-screen flex-col">
          <div className="flex flex-grow flex-col justify-center">
            <main className="selection:bg-main-primary/70 flex flex-grow flex-col selection:text-white">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

if (
  process.env.NEXT_PUBLIC_BRAND !== 'ere' &&
  process.env.NEXT_PUBLIC_BRAND !== 'sourcecon' &&
  process.env.NEXT_PUBLIC_BRAND !== 'talent42' &&
  process.env.NEXT_PUBLIC_BRAND !== 'ris'
) {
  throw new Error(`NEXT_PUBLIC_BRAND is not an event brand`);
}

const { name, favicon, useDefiniteArticle }: BrandData =
  brandData[process.env.NEXT_PUBLIC_BRAND];

const [NEXT_PUBLIC_BASE_URL] = CheckForUndefined([
  process.env.NEXT_PUBLIC_BASE_URL,
]);

export const metadata = {
  title: {
    default: `Survey | ${name}`,
    template: `%s | ${name}`,
  },
  description: `Help us improve ${
    useDefiniteArticle ? 'the ' : ''
  }${name} by giving us your feedback on the event.`,
  icons: {
    icon: favicon,
  },
  metadataBase: new URL(NEXT_PUBLIC_BASE_URL),
  alternates: {
    canonical: NEXT_PUBLIC_BASE_URL,
  },
  openGraph: {
    title: `Survey | ${name}`,
    url: NEXT_PUBLIC_BASE_URL,
    description: `Help us improve ${
      useDefiniteArticle ? 'the ' : ''
    }${name} by giving us your feedback on the event.`,
    siteName: name,
    locale: 'en-US',
    images: {
      url: '/images/survey.jpg',
      width: 900,
      height: 602,
    },
  },
  robots: {
    index: false,
    follow: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Home | ERE Media`,
    description: `Help us improve ${
      useDefiniteArticle ? 'the ' : ''
    }${name} by giving us your feedback on the event.`,
    images: {
      url: '/images/survey.jpg',
      width: 900,
      height: 602,
    },
  },
};
