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
  title:
    'UZUZ Plus｜IT学習や一般就職に強い就労移行支援サービス - 病気・障害がある方向けの就労移行支援サービス｜ウズウズプラス',
  description: '病気・障害がある方向けの就労移行支援サービス｜ウズウズプラス',
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
