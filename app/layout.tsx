import type { Metadata } from 'next';
import './globals.css';
import { zenMaruGothicFont, zenKakuGothicNewFont } from './fonts';

export const metadata: Metadata = {
  title: 'UZUZ LP Swipe',
  description: 'UZUZ LP スワイプアプリケーション',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaruGothicFont.variable} ${zenKakuGothicNewFont.variable} font-zen-kaku antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
