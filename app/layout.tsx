import type { Metadata } from 'next';
import './globals.css';
import {
  zenMaruGothicFont,
  zenKakuGothicNewFont,
  mplus1pFont,
  mplus1CodeFont,
  mplusRounded1cFont,
  notoSansJPFont,
  notoSerifJPFont,
  mochiyPopOneFont,
  dancingScriptFont,
  yuseiMagicFont,
} from './fonts';
// import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'キャリエモン - プロのキャリアサポートが受けられる！',
  description:
    '「キャリエモン」はプロが無料で相談に乗ってくれる、日本最大級のキャリア相談サイトです。また、キャリアサポートなどのサービスも行っています。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* 最後に指定している font-zen-kaku が優先されてデフォルトのフォントになる。(クラスも機能するが全体に適応される) */}
      <body
        className={`${zenMaruGothicFont.variable} ${zenKakuGothicNewFont.variable} ${mplus1pFont.variable} ${mplus1CodeFont.variable} ${mplusRounded1cFont.variable} ${notoSansJPFont.variable} ${notoSerifJPFont.variable} ${mochiyPopOneFont.variable} ${dancingScriptFont.variable} ${yuseiMagicFont.variable} font-zen-kaku antialiased`}
      >
        {children}
      </body>
      {/* <GoogleAnalytics gaId="G-1ZZQ32CNXD" /> */}
    </html>
  );
}
