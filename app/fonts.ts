import localFont from 'next/font/local';

export const zenMaruGothicFont = localFont({
  src: [
    {
      path: '../public/fonts/ZenMaruGothic-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenMaruGothic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenMaruGothic-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenMaruGothic-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenMaruGothic-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--zen-maru-gothic-font',
  display: 'swap',
});

export const zenKakuGothicNewFont = localFont({
  src: [
    {
      path: '../public/fonts/ZenKakuGothicNew-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenKakuGothicNew-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenKakuGothicNew-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenKakuGothicNew-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZenKakuGothicNew-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--zen-kaku-gothic-new-font',
  display: 'swap',
});
