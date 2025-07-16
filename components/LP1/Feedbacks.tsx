'use client';

import React from 'react';

import { Star } from 'lucide-react';
import BgImg from '@/public/images/careeremonimg/1291385785_1200x800.png';
import Img2 from '@/public/images/careeremonimg/testimonial2.png';
import Img4 from '@/public/images/careeremonimg/testimonial4.png';
import Img3 from '@/public/images/careeremonimg/testimonial3.png';
import Img1 from '@/public/images/careeremonimg/testimonial1.png';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '../ui/separator';
import Image from 'next/image';

const feedbacskData = [
  {
    title: '未経験からホワイト施工管理職へ転職成功',
    title_sub:
      'しっかり手に職がつく仕事につけて、ワークライフバランスも保てていて満足です！',
    image: Img2,
    name: 'H.Tさん 25歳',
    designation: (
      <>
        200<span className="text-sm mx-px">⇒</span>380
      </>
    ),
    occupation: 'フリーター',
    feedbackText:
      '施工管理にはブラックな会社が多いとネットに出ていて不安でしたが、手に職がつく点には非常に魅力を感じていました。UZUZさんはホワイトな企業を厳選して紹介してくれますし、危ない会社の情報も教えてもらえたことで納得のいく就職活動ができました。',
    comment: '残業：20時間/月',
    rating: (
      <div className="flex flex-wrap">
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
      </div>
    ),
  },
  {
    title: '理想の土日休みの仕事へ転職成功',
    title_sub: '土日休みも増えて、プライベートが充実しました！',
    image: Img4,
    name: 'A.Kさん 29歳',
    designation: (
      <>
        220<span className="text-sm mx-px">⇒</span>400
      </>
    ),
    occupation: '居酒屋アルバイト',
    feedbackText:
      '20代最後の年だからこそ正社員になりたいという気持ちがありましたが、ブラックには行きたいと考えていました。もともと建設業界はハードワークだと思いこんでいましたが、UZUZさんが紹介してくれた企業は休日もしっかりしていて、研修制度も充実。面接対策や履歴書の書き方など細かくサポートいただいたおかげで、安心して転職活動を進められました。実際に入社してみて、仕事だけでなくプライベートの時間も大事にできる環境に大満足です。',
    comment: '残業：30時間/月',
    rating: (
      <div className="flex flex-wrap">
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
      </div>
    ),
  },
  {
    title: '他業種からの転職で収入UP＆ホワイト環境',
    title_sub:
      '体力には自信がありましたが、ブラック企業は避けたいと思っていました',
    image: Img3,
    name: 'Y.Mさん 27歳',
    designation: (
      <>
        230<span className="text-sm mx-px">⇒</span>380
      </>
    ),
    occupation: 'スポーツインストラクター',
    feedbackText:
      '前職ではやりがいはあったものの、収入面や将来性に不安がありました。建設業は厳しいイメージがありましたが、UZUZさんが紹介してくれた企業は残業が少なく、福利厚生も手厚いホワイト企業。面接前の打ち合わせでは「どんな環境なら続けられるか」を一緒に考えてくれたので、安心して転職に踏み切れました。年収アップもできて、本当に感謝しています。',
    comment: '残業：25時間/月',
    rating: (
      <div className="flex flex-wrap">
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
      </div>
    ),
  },
  {
    title: '女性・文系出身でもホワイト施工管理職へ',
    title_sub:
      '女性でも働きやすい現場環境が整っていて、キャリアアップできそうです！',
    image: Img1,
    name: 'R.Nさん 26歳',
    designation: (
      <>
        250<span className="text-sm mx-px">⇒</span>350
      </>
    ),
    occupation: '事務派遣社員',
    feedbackText:
      '建設業界は男性社会のイメージが強く、事務経験しかない私には難しいと思っていました。ところがUZUZさんに相談すると、女性の施工管理職が活躍している企業をいくつも紹介してもらい驚きました。残業削減に力を入れている会社なので、体力面でも不安が少なく、将来のキャリアアップも見据えられるのが嬉しいポイントです。',
    comment: '残業：15時間/月',
    rating: (
      <div className="flex flex-wrap">
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5 sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
        <Star
          fill="#fcd34d"
          strokeWidth={0}
          className="w-5 h-5  sm:w-7 sm:h-7"
        />
      </div>
    ),
  },
];

const Feedbacks: React.FC = () => {
  return (
    // ヘッダー分の余白を確保 pt-8 sm:pt-12、h-dvhでビューポート高さを100%にする
    <>
      <div
        id="feedback"
        className="pt-12 h-dvh bg-cover bg-center bg-cyan-400 bg-blend-overlay"
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
      >
        <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 mx-6 sm:mx-10 xl:mx-50">
            <h2 className="col-span-1 sm:col-span-2 max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
              利用者の声
            </h2>
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <div
                  key={i}
                  className="rounded-lg px-3 py-1.5 sm:p-4 bg-white/75 shadow-md"
                >
                  <div className="grid grid-cols-[1fr_2.5fr] gap-x-2 gap-y-0.5 sm:gap-x-3 sm:gap-y-2 justify-center items-center sm:items-start">
                    <div className="col-span-2 mx-auto drop-shadow-xs">
                      {value.rating}
                    </div>
                    <div>
                      <Image
                        src={value.image.src}
                        alt="image"
                        width={150}
                        height={150}
                        className="drop-shadow-lg w-10 h-10 sm:w-14 sm:h-14 mx-auto"
                      />
                    </div>
                    <div className="text-[10px] sm:text-xs">
                      <div className="flex items-baseline">
                        <span className="">年収：</span>
                        <span className="font-mono text-sm sm:text-xl font-bold leading-1">
                          {value.designation}
                        </span>
                        &nbsp;万円
                      </div>
                      <div className="inline-flex">
                        前職：{value.occupation}
                      </div>
                      <div className="col-span-2">{value.comment}</div>
                    </div>
                    <div className="col-span-2 px-0 py-0 sm:px-3 sm:py-2.5 rounded-md bg-none sm:bg-white/50">
                      <h3 className="font-bold text-center font-zen-maru text-xs sm:text-sm">
                        {value.title}
                      </h3>
                      <div className="text-xs hidden sm:block">
                        <Separator className="my-2" />
                        <div className="text-xs mb-2">
                          『
                          {value.title_sub.length > 36
                            ? `${value.title_sub.slice(0, 34)}...`
                            : value.title_sub}
                          』
                        </div>
                        <div className="text-xs">
                          {value.feedbackText.length > 36
                            ? `${value.feedbackText.slice(0, 36)}...`
                            : value.feedbackText}
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="text-xs w-[90%] mx-[5%] h-6 sm:h-7 mt-1.5 sm:mt-2.5 rounded-full"
                          >
                            詳しく見る
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div className="flex justify-center items-center mb-3">
                                {value.rating}
                              </div>
                              <div className="font-bold text-center font-zen-maru leading-tight text-xl">
                                {value.title}
                              </div>
                            </DialogTitle>
                            <DialogDescription className="text-base text-foreground">
                              『{value.title_sub}』
                            </DialogDescription>
                          </DialogHeader>
                          <div className="text-sm">{value.feedbackText}</div>
                          <div className="flex gap-5 justify-center items-start">
                            <div>
                              <Image
                                src={value.image.src}
                                alt="image"
                                width={150}
                                height={150}
                                className="drop-shadow-lg w-14 h-14 mx-auto"
                              />
                              <div className="text-center text-xs mt-0.5">
                                {value.name}
                              </div>
                            </div>
                            <div className="text-sm">
                              <div className="flex items-baseline">
                                <span className="">年収：</span>
                                <span className="font-mono text-xl font-bold">
                                  {value.designation}
                                </span>
                                &nbsp;万円
                              </div>
                              <div className="inline-flex">
                                前職：{value.occupation}
                              </div>
                              <div className="col-span-2">{value.comment}</div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
