'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import Image from 'next/image';
import Map from '@/public/images/uzuzplus/2261336337-pin.png';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

// フォームのスキーマ定義
const formSchema = z.object({
  name: z.string().min(1, '必須です'),
  furigana: z
    .string()
    .min(1, '必須です')
    .refine(
      (value) => /^[あ-んー\s]+$/.test(value),
      'ひらがなで入力してください'
    ),
  email: z
    .string()
    .min(1, '必須です')
    .refine(
      (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      'メール形式が不正です'
    ),
  phone: z
    .string()
    .min(1, '必須です')
    .refine(
      (value) => /^[0-9]{10,11}$/.test(value),
      'ハイフン無しの10桁または11桁の数字を入力してください'
    ),
  ageGroup: z.string().min(1, '必須です'),
  meetingMethod: z.string().min(1, '必須です'),
  curriculum: z.array(z.string()).min(1, '1つ以上選択してください'),
  message: z.string().max(1000, '1000文字以内で入力してください').optional(),
});

type FormValues = z.infer<typeof formSchema>;

// 環境変数（GASのエンドポイント）
const ENDPOINT = process.env.NEXT_PUBLIC_GAS_ENDPOINT!;

export default function RegistrationForm2() {
  const [currentPage, setCurrentPage] = useState(1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      furigana: '',
      email: '',
      phone: '',
      ageGroup: '',
      meetingMethod: '',
      curriculum: [],
      message: '',
    },
  });

  const nextPage = async () => {
    try {
      if (currentPage === 1) {
        // ページ1のバリデーション
        const result = await form.trigger([
          'name',
          'furigana',
          'email',
          'phone',
        ]);
        if (result) {
          setCurrentPage(currentPage + 1);
        }
      } else if (currentPage === 2) {
        // ページ2のバリデーション
        const result = await form.trigger([
          'ageGroup',
          'meetingMethod',
          'curriculum',
        ]);
        if (result) {
          setCurrentPage(currentPage + 1);
        }
      }
    } catch (error) {
      console.error('バリデーションエラー:', error);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onSubmit = async (values: FormValues) => {
    const referer = document.referrer || window.location.href || '';

    const payload = new URLSearchParams({
      name: values.name,
      furigana: values.furigana,
      email: values.email,
      phone: values.phone,
      ageGroup: values.ageGroup,
      meetingMethod: values.meetingMethod,
      curriculum: values.curriculum.join(', '),
      message: values.message || '',
      ua: navigator.userAgent,
      referer,
    });

    // ① ネットワーク例外（CORS/オフライン等）を捕捉
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: payload.toString(),
    }).catch((err) => {
      console.error('fetch failed (network/CORS/etc)', err);
      return null as Response | null;
    });
    if (!res) return; // ネットワーク例外時は早期リターン

    // ② HTTP エラー（4xx/5xx）
    if (!res.ok) {
      console.error('HTTP error', res.status);
      return;
    }

    // ③ アプリケーションエラー（JSON の { ok:false }）
    try {
      const data = await res.json(); // CORS で本文が読めない場合はここで失敗することも
      if (data?.ok === false) {
        console.error('App-level error', data.error);
        return;
      }
    } catch {
      // 本文が読めない/JSONでない → 送信自体は通っているケースが多いので黙認
    }

    // 成功とみなす
    form.reset();
    setCurrentPage(4);
  };

  // ページ1
  const renderPage1 = () => {
    const page1Errors = {
      name: form.formState.errors.name,
      furigana: form.formState.errors.furigana,
      email: form.formState.errors.email,
      phone: form.formState.errors.phone,
    };

    return (
      <div className="space-y-3">
        <div className="text-center mb-3 sm:mb-4 bg-slate-100 p-2 sm:p-3 rounded">
          <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-zen-maru">
            お申し込みフォーム
          </h3>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                お名前 (氏名)
                <Badge variant="destructive" className="px-1 py-px">
                  必須
                </Badge>
              </FormLabel>
              <FormControl>
                <Input {...field} autoComplete="name" placeholder="山田太郎" />
              </FormControl>
              {page1Errors.name && (
                <FormMessage>{page1Errors.name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="furigana"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                お名前 (ふりがな)
                <Badge variant="destructive" className="px-1 py-px">
                  必須
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="off"
                  placeholder="やまだたろう"
                />
              </FormControl>
              {page1Errors.furigana && (
                <FormMessage>{page1Errors.furigana.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                メールアドレス
                <Badge variant="destructive" className="px-1 py-px">
                  必須
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="example@email.com"
                />
              </FormControl>
              {page1Errors.email && (
                <FormMessage>{page1Errors.email.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                電話番号
                <Badge variant="destructive" className="px-1 py-px">
                  必須
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="ハイフン無しの10桁または11桁の数字"
                />
              </FormControl>
              {page1Errors.phone && (
                <FormMessage>{page1Errors.phone.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <div className="w-full grid grid-cols-[1fr_2fr] gap-4">
          <div></div>
          <Button
            type="button"
            onClick={nextPage}
            disabled={form.formState.isSubmitting}
          >
            次へ進む
          </Button>
        </div>
      </div>
    );
  };

  // ページ2
  const renderPage2 = () => {
    const page2Errors = {
      ageGroup: form.formState.errors.ageGroup,
      meetingMethod: form.formState.errors.meetingMethod,
      curriculum: form.formState.errors.curriculum,
    };

    return (
      <div className="space-y-3">
        <FormField
          control={form.control}
          name="ageGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                年代
                <Badge variant="destructive" className="px-1 py-px">
                  必須
                </Badge>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {[
                    { value: '10-20代', label: '10-20代' },
                    { value: '30代', label: '30代' },
                    { value: '40代', label: '40代' },
                    { value: '50代', label: '50代' },
                    { value: '60代', label: '60代 (64歳まで)' },
                  ].map((option) => (
                    <FormItem
                      key={option.value}
                      className="flex items-center gap-1 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              {page2Errors.ageGroup && (
                <FormMessage>{page2Errors.ageGroup.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Separator className="my-1" />

        <FormField
          control={form.control}
          name="meetingMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                面談方法
                <Badge variant="destructive" className="px-1 py-px">
                  必須
                </Badge>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className=""
                >
                  {[
                    { value: 'オンライン', label: 'オンライン' },
                    { value: '対面', label: '対面' },
                    { value: '電話', label: '電話' },
                  ].map((option) => (
                    <FormItem
                      key={option.value}
                      className="flex items-center gap-1 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              {page2Errors.meetingMethod && (
                <FormMessage>{page2Errors.meetingMethod.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Separator className="my-1" />

        <FormField
          control={form.control}
          name="curriculum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                興味のあるカリキュラム
                <Badge variant="destructive" className="px-1 py-px">
                  必須
                </Badge>
                <FormDescription>複数選択可</FormDescription>
              </FormLabel>
              {[
                { value: '就職サポート', label: '就職サポート' },
                { value: 'ITスキル', label: 'ITスキル' },
                { value: '事務スキル', label: '事務スキル' },
                {
                  value: 'コミュニケーションスキル',
                  label: 'コミュニケーションスキル',
                },
              ].map((option) => (
                <FormItem
                  key={option.value}
                  className="flex items-center gap-1 space-y-0 mb-3"
                >
                  <FormControl>
                    <Checkbox
                      className="border-slate-200 shadow-none"
                      checked={field.value?.includes(option.value)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...field.value, option.value]);
                        } else {
                          field.onChange(
                            field.value?.filter(
                              (value) => value !== option.value
                            )
                          );
                        }
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
              {page2Errors.curriculum && (
                <FormMessage>{page2Errors.curriculum.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <div className="w-full grid grid-cols-[1fr_2fr] gap-4">
          <Button type="button" variant="outline" onClick={prevPage}>
            戻る
          </Button>
          <Button
            type="button"
            onClick={nextPage}
            disabled={form.formState.isSubmitting}
          >
            次へ進む
          </Button>
        </div>
      </div>
    );
  };

  // ページ3
  const renderPage3 = () => {
    const page3Errors = {
      message: form.formState.errors.message,
    };

    return (
      <div className="space-y-3">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                事前に伝えたいこと
                <Badge variant="secondary" className="px-1.5 py-px">
                  任意
                </Badge>
                <FormDescription>1000文字まで</FormDescription>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  placeholder="ご質問やご要望など、お気軽にお書きください。
                  例：ITスキルを身に着けて再就職することについて相談したい"
                  className="resize-none text-sm placeholder:text-slate-400 placeholder:font-normal"
                />
              </FormControl>
              {page3Errors.message && (
                <FormMessage>{page3Errors.message.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* 入力内容の確認表示 */}
        <div className="bg-slate-50 px-4 py-3 rounded space-y-2">
          <h3 className="font-bold text-center font-zen-maru">
            入力内容の確認
          </h3>
          <div className="text-sm space-y-0.5">
            <div>
              <span className="font-medium">お名前：</span>
              {form.getValues('name')}
            </div>
            <div>
              <span className="font-medium">ふりがな：</span>
              {form.getValues('furigana')}
            </div>
            <div>
              <span className="font-medium">メールアドレス：</span>
              {form.getValues('email')}
            </div>
            <div>
              <span className="font-medium">電話番号：</span>
              {form.getValues('phone')}
            </div>
            <div>
              <span className="font-medium">年代：</span>
              {form.getValues('ageGroup')}
            </div>
            <div>
              <span className="font-medium">面談方法：</span>
              {form.getValues('meetingMethod')}
            </div>
            <div>
              <span className="font-medium">カリキュラム：</span>
              {form.getValues('curriculum').join(', ')}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-[1fr_2fr] gap-4 mb-2">
          <Button type="button" variant="outline" onClick={prevPage}>
            戻る
          </Button>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {form.formState.isSubmitting ? '送信中…' : '申し込む'}
          </Button>
        </div>

        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-sm text-slate-500">
                個人情報の取り扱いについて ↗
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>個人情報の取り扱いについて</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 text-xs sm:text-sm">
                <ol className="list-decimal list-inside">
                  <li>
                    お送りいただく個人情報は、お問い合わせいただいた内容に回答するために利用します。
                  </li>
                  <li>当個人情報を第三者に提供することはありません。</li>
                  <li>
                    当個人情報の取扱いを委託することがあります。委託にあたっては、委託先における個人情報の安全管理が図られるよう、委託先に対する必要かつ適切な監督を行います。
                  </li>
                  <li>
                    個人情報のご提供は任意です。ただし、回答に必要な情報をご提供いただかない場合、回答に支障が生じる可能性があります。
                  </li>
                  <li>
                    当個人情報の利用目的の通知、開示、内容の訂正・追加または削除、利用の停止・消去および第三者への提供の停止（「開示等」といいます。）を受け付けております。開示等の求めは、以下の「個人情報苦情及び相談窓口」で受け付けます。
                  </li>
                  <li>
                    当ホームページではクッキー等を用いておりますが、これによる個人情報の取得、利用は行っておりません。
                  </li>
                </ol>
                <div>
                  個人情報保護管理者 株式会社UZUZ Plus 代表取締役 岡本 啓毅
                </div>
                <div>
                  個人情報苦情及び相談窓口 株式会社UZUZ 管理部 TEL: 03-5333-0802
                  （受付時間 9時～18時
                  土日祝日除く／営業のお電話はお断りいたします。）
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  };

  // ページ4（サンクス）
  const renderPage4 = () => {
    return (
      <div className="space-y-3">
        <div className="text-center mb-4 bg-slate-100 p-3 rounded">
          <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-zen-maru">
            お申込ありがとうございます。送信が完了しました。
          </h3>
        </div>
        <div className="text-center mb-4 border p-3 sm:p-4 rounded">
          ３営業日以内に担当者より折り返しご連絡させていただきます。
        </div>
        <div className="text-center mb-4 bg-amber-50 p-3 sm:p-4 rounded">
          <div className="text-base sm:text-xl font-bold text-slate-900">
            折り返しの電話
            <br />
            06-7167-2222
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="button" onClick={() => setCurrentPage(1)}>
            お申し込みフォームのトップへ戻る
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-w-80 mx-auto space-y-3 bg-white p-4 sm:p-6 rounded-lg shadow-lg"
      >
        {/* ページインジケーター */}
        {currentPage !== 4 && (
          <div className="flex justify-center mb-3">
            <div className="flex space-x-2">
              <div className="block sm:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="text-xs h-8 mb-2">
                      お申し込みいただくと？
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="my-4">
                        お申し込みいただくと
                      </SheetTitle>
                      <SheetDescription className="text-slate-900 font-zen-maru text-left space-y-3 flex flex-col">
                        <span className="block">
                          １．事業所見学で雰囲気をご確認いただけます。質問や疑問なども、お気軽にご相談ください。
                        </span>
                        <span className="block">
                          ２．実際のプログラムに参加し、支援内容が自分に合っているか体験できます。短時間の参加も可能です。
                        </span>
                        <span className="block">
                          場所：大阪府大阪市北区南扇町 1番5号 UAKビル2F
                        </span>
                        <span className="block">
                          <Image
                            src={Map}
                            alt="20代の就職を徹底サポート！ウズウズ｜株式会社UZUZ"
                            width={150}
                            height={150}
                            className="mx-auto opacity-90"
                          />
                        </span>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              {[1, 2, 3].map((page) => (
                <div
                  key={page}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    page === currentPage
                      ? 'bg-blue-400 text-white'
                      : page < currentPage
                      ? 'bg-orange-300 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {page < currentPage ? '✓' : page}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ページコンテンツ */}
        {currentPage === 1 && renderPage1()}
        {currentPage === 2 && renderPage2()}
        {currentPage === 3 && renderPage3()}
        {currentPage === 4 && renderPage4()}
      </form>
    </Form>
  );
}
