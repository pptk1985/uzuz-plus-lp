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
    title: '新卒未経験からITエンジニアへ',
    title_sub: '新卒未経験からITエンジニアに！日々の成長を実感しています。',
    image: Img2,
    name: 'K.Cさん 28歳',
    designation: (
      <>
        0<span className="text-sm mx-px">⇒</span>350
      </>
    ),
    occupation: 'なし',
    feedbackText:
      'キャリエモンは登録したエージェントの中で、サポートが一番手厚かったです。選考前には会社ごとの志望動機や自己PR、空白期間の伝え方など細かくアドバイスしてくれました。結果、就活に失敗し未経験だった私も１か月で内定獲得。現在は業務システムの開発に携わる毎日です。',
    // comment: '残業：20時間/月',
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
    title: '公務員からWebマーケターへ',
    title_sub: '自分の経験を活かした、希望の転職が実現できました！',
    image: Img3,
    name: 'U.Sさん 29歳',
    designation: (
      <>
        420<span className="text-sm mx-px">⇒</span>520
      </>
    ),
    occupation: '公務員',
    feedbackText:
      '市役所を退職後オーストラリアに留学。次の会社には"語学力が活かせる""長期的に活躍できるスキルが身に付く"ことを求めていたのですが、キャリエモンが紹介してくれたのはまさにその希望が叶う求人でした。今では更に年収が上がり（720万円）その点もうれしい限りです。',
    // comment: '残業：30時間/月',
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
    title: '保育士から人材会社ソリューション営業へ',
    title_sub:
      '３社退職した私でも残業時間が減り、年収も200万円以上アップしました！',
    image: Img4,
    name: 'S.Aさん 28歳',
    designation: (
      <>
        220<span className="text-sm mx-px">⇒</span>500
      </>
    ),
    occupation: '保育士',
    feedbackText:
      '職歴が３社あったせいか、利用前は書類選考で落ちることが多くて。でもキャリエモンで教えてもらった退職理由の伝え方を実践した結果、無事転職することができました。在宅勤務が可能な環境で年収も200万以上アップ、残業時間も減ったので毎日が充実しています。',
    // comment: '残業：25時間/月',
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
    title: 'コールセンターから事務兼CADオペレーターへ',
    title_sub:
      '女性でも働きやすい現場環境が整っていて、キャリアアップできそうです！',
    image: Img1,
    name: 'N.Mさん 27歳',
    designation: (
      <>
        230<span className="text-sm mx-px">⇒</span>360
      </>
    ),
    occupation: 'コールセンターオペレーター',
    feedbackText:
      '手に職がついていない自分に焦りを感じ、コールセンターの派遣スタッフから転職を決意。キャリエモンでは面接対策をはじめ就活の進め方など親身に相談に乗ってもらえたので、３週間で内定を獲得できました。希望だった「専門性の高い業務」に携わることができ大満足です。',
    // comment: '残業：15時間/月',
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
    // h-dvhでビューポート高さを100%にする
    <>
      <div
        id="feedback"
        className="h-dvh bg-cover bg-center bg-cyan-400 bg-blend-overlay"
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
                  <div className="grid grid-cols-[1fr_2.5fr] gap-x-2 gap-y-0.5 sm:gap-x-3 sm:gap-y-2 justify-center items-center">
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
                      {/* <div className="col-span-2">{value.comment}</div> */}
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
                          <div className="flex gap-5 justify-center items-center">
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
                              {/* <div className="col-span-2">{value.comment}</div> */}
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
