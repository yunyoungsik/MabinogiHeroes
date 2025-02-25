import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  generator: 'Next.js',
  title: '마비노기 영웅전 검색 사이트 MHON.KR - 캐릭터 검색, 랭킹, 거래소',
  description: '마비노기 영웅전 검색 사이트 MHON.KR, MHON.KR에서 캐릭터를 검색하고 다양한 정보와 랭킹을 한눈에 확인하세요.',
  keywords: ['마비노기영웅전, 마영전, 마비노기영웅전 검색, 마비노기영웅전 검색 사이트, 마영전 검색, 마영전 검색 사이트, 마비노기영웅전 랭킹, 마영전 랭킹'],
  authors: [{ name: 'Yun' }],
  creator: [{ name: 'Yun' }],
  publisher: [{ name: 'Yun' }],
  formatDetection: {
    email: 'fcon@outlook.kr',
  },
  icons: {
    icon: 'favicon.svg',
  },
  metadataBase: new URL('https://mhon.kr'),
  images:'https://mhon.kr/image/meta/meta.jpg',
  openGraph: {
    title: '마비노기 영웅전 검색 사이트 MHON.KR - 캐릭터 검색, 랭킹, 거래소',
    description:
      '마비노기 영웅전 검색 사이트 MHON.KR, MHON.KR에서 캐릭터를 검색하고 다양한 정보와 랭킹을 한눈에 확인하세요.',
    url: 'https://mangjeun.kro.kr',
    siteName: 'MHON.KR',
    images:'https://mhon.kr/image/meta/meta.jpg',
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
    title: '마비노기 영웅전 검색 사이트 MHON.KR - 캐릭터 검색, 랭킹, 거래소',
    description: '마비노기 영웅전 검색 사이트 MHON.KR, MHON.KR에서 캐릭터를 검색하고 다양한 정보와 랭킹을 한눈에 확인하세요.',
    images: [
      'https://mhon.kr/image/meta/meta.jpg',
    ],
  },
  other: {
    'naver-site-verification': 'cb44eb47615eebe73f6002654b8a4f67de026df1',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <GoogleAnalytics gaId='G-D98PS2PM8B' />
        <GoogleTagManager gtmId='GTM-N86SVFLC' />
          <div className="wrap">
            <Header />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}
