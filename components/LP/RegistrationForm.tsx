'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

// フォームのスキーマ定義
const formSchema = z.object({
  name: z.string().min(1, '必須です'),
  furigana: z
    .string()
    .min(1, '必須です')
    .refine(/^[あ-んー\s]+$/.test, 'ひらがなで入力してください'),
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
      /^[0-9]{10,11}$/.test,
      'ハイフンなしで10桁または11桁の数字を入力してください'
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
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
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
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 min-w-80 mx-auto space-y-6 bg-white p-6 rounded-lg shadow"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                お名前 (漢字)<span className="text-rose-400 font-bold">※</span>
              </FormLabel>
              <FormControl>
                <Input {...field} autoComplete="name" placeholder="山田太郎" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="furigana"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                お名前 (ふりがな)
                <span className="text-rose-400 font-bold">※</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="off"
                  placeholder="やまだたろう"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                メールアドレス<span className="text-rose-400 font-bold">※</span>
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
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                電話番号<span className="text-rose-400 font-bold">※</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="ハイフンなしの10桁または11桁の数字"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ageGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                年代<span className="text-rose-400 font-bold">※</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap"
                >
                  {[
                    { value: '10-20代', label: '10~20代' },
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
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="meetingMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                面談方法<span className="text-rose-400 font-bold">※</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap"
                >
                  {[
                    { value: 'online', label: 'オンライン' },
                    { value: 'face-to-face', label: '対面' },
                    { value: 'phone', label: '電話' },
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
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="curriculum"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                興味のあるカリキュラム
                <span className="text-rose-400 font-bold">※</span>
              </FormLabel>
              <FormDescription>1つ以上選択してください</FormDescription>
              <div className="flex flex-wrap gap-x-4 gap-y-2.5">
                {[
                  { value: 'job-support', label: '就職サポート' },
                  { value: 'it-skills', label: 'ITスキル' },
                  { value: 'office-skills', label: '事務スキル' },
                  {
                    value: 'communication-skills',
                    label: 'コミュニケーションスキル',
                  },
                ].map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center gap-1 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
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
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                事前に伝えたいこと (任意)
              </FormLabel>
              <FormDescription>1000文字まで</FormDescription>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  placeholder="ご質問やご要望など、お気軽にお書きください。
                  例：ITスキルを身に着けて再就職することについて相談したい"
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting ? '送信中…' : '申し込む'}
        </Button>

        {form.formState.isSubmitSuccessful && (
          <div className="p-4 bg-teal-50 rounded">
            <div>
              THANK YOU
              <br />
              送信が完了しました！
            </div>
            お申込ありがとうございます。
            <br />
            ３営業日以内に担当者より折り返しご連絡させていただきます。
            <div>電話番号電話番号電話番号電話番号</div>
          </div>
        )}
      </form>
      下記の「個人情報の取り扱いについて」にご同意の上、ご送信ください。
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="text-sm sm:text-base">
            個人情報の取り扱いについて
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>個人情報の取り扱いについて</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm">
            <ol>
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
            <div>個人情報保護管理者 株式会社UZUZ Plus 代表取締役 岡本 啓毅</div>
            <div>
              個人情報苦情及び相談窓口 株式会社UZUZ 管理部 TEL: 03-5333-0802
              （受付時間 9時～18時
              土日祝日除く／営業のお電話はお断りいたします）
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Form>
  );
}
