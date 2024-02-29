import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AuthProvider from '@/provider/AuthProvider';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: '캐릭터 검색 - 마비노기 영웅전',
  description: '마비노기 영웅전 캐릭터 검색 사이트',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <AuthProvider>
          <div className="wrap">
            <Header />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
