import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  generator: 'Next.js',
  title: '마비노기 영웅전 검색 사이트 - MANGJEUN',
  description: '마비노기 영웅전 검색 사이트',
  keywords: ['마비노기영웅전, 마영전'],
  authors: [{ name: 'Yun' }],
  creator: [{ name: 'Yun' }],
  publisher: [{ name: 'Yun' }],
  formatDetection: {
    email: 'mangjeun@outlook.kr',
  },
  icons: {
    icon: 'favicon.svg',
  },
  metadataBase: new URL('https://mangjeun.kro.kr'),
  images:'https://www.mangjeun.kro.kr/image/meta/mangjeun.jpg',
  openGraph: {
    title: '마비노기 영웅전 검색 사이트 - MANGJEUN',
    description:
      '마비노기 영웅전 검색 사이트',
    url: 'https://mangjeun.kro.kr',
    siteName: 'MangJeun',
    images:'https://www.mangjeun.kro.kr/image/meta/mangjeun.jpg',
    locale: 'ko_KR',
    type: 'website',
    type: 'article',
    publishedTime: '2024-03-31T00:00:00.000Z',
    authors: ['Yun'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    Yeti: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: '마비노기 영웅전 검색 사이트 - MANGJEUN',
    description: '마비노기 영웅전 검색 사이트 - MANGJEUN',
    images: [
      'https://www.mangjeun.kro.kr/image/meta/mangjeun.jpg',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
          <div className="wrap">
            <Header />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}
