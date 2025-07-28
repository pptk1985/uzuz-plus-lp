import type { Metadata } from 'next';
import './globals.css';
import { zenMaruGothicFont, zenKakuGothicNewFont } from './fonts';

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
      <body
        className={`${zenMaruGothicFont.variable} ${zenKakuGothicNewFont.variable} font-zen-kaku antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
