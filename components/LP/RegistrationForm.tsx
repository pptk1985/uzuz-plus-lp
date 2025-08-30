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

// フォームのスキーマ定義
const formSchema = z.object({
  name: z.string().min(1, '必須です'),
  furigana: z
    .string()
    .min(1, '必須です')
    .regex(/^[あ-んー\s]+$/, 'ひらがなで入力してください'),
  email: z.string().min(1, '必須です').email('メール形式が不正です'),
  phone: z
    .string()
    .min(1, '必須です')
    .regex(
      /^[0-9]{10,11}$/,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                お名前（漢字）<span className="text-red-500">※</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="name"
                  placeholder="例：田中太郎"
                />
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
              <FormLabel>
                お名前（ふりがな）<span className="text-red-500">※</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="off"
                  placeholder="例：たなかたろう"
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
              <FormLabel>
                メールアドレス<span className="text-red-500">※</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="例：example@email.com"
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
              <FormLabel>
                電話番号<span className="text-red-500">※</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="例：09012345678"
                />
              </FormControl>
              <FormDescription>ハイフンなし</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ageGroup"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                年代<span className="text-red-500">※</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { value: '10-20代', label: '10~20代' },
                    { value: '30代', label: '30代' },
                    { value: '40代', label: '40代' },
                    { value: '50代', label: '50代' },
                    { value: '60代', label: '60代（64歳まで）' },
                  ].map((option) => (
                    <FormItem
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="text-sm font-normal whitespace-nowrap">
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
            <FormItem className="space-y-3">
              <FormLabel>
                面談方法<span className="text-red-500">※</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { value: 'online', label: 'オンライン' },
                    { value: 'face-to-face', label: '対面' },
                    { value: 'phone', label: '電話' },
                  ].map((option) => (
                    <FormItem
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="text-sm font-normal whitespace-nowrap">
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
              <div className="mb-4">
                <FormLabel className="text-base">
                  興味のあるカリキュラム<span className="text-red-500">※</span>
                </FormLabel>
                <FormDescription>1つ以上選択してください</FormDescription>
              </div>
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
                  className="flex flex-row items-start space-x-3 space-y-0"
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
                  <FormLabel className="text-sm font-normal">
                    {option.label}
                  </FormLabel>
                </FormItem>
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>事前に伝えたいこと</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  placeholder="ご質問やご要望など、お気軽にお書きください（任意）"
                  className="resize-none"
                />
              </FormControl>
              <FormDescription>1000文字まで（任意）</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting ? '送信中…' : '登録する'}
        </Button>

        {form.formState.isSubmitSuccessful && (
          <p className="text-green-700 text-center py-4 bg-green-50 rounded">
            ご登録ありがとうございました！
            <br />
            後日、担当者よりご連絡いたします。
          </p>
        )}
      </form>
    </Form>
  );
}
