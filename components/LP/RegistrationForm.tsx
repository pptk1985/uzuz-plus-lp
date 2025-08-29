'use client';
import { useForm } from 'react-hook-form';

type Form = {
  name: string;
  furigana: string;
  email: string;
  phone: string;
  ageGroup: string;
  meetingMethod: string;
  curriculum: string[];
  message: string;
};

// 環境変数
const ENDPOINT = process.env.NEXT_PUBLIC_GAS_ENDPOINT!;

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>();

  const onSubmit = async (values: Form) => {
    const referer = document.referrer || window.location.href || '';

    const payload = new URLSearchParams({
      name: values.name,
      furigana: values.furigana,
      email: values.email,
      phone: values.phone,
      ageGroup: values.ageGroup,
      meetingMethod: values.meetingMethod,
      curriculum: values.curriculum.join(', '),
      message: values.message,
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
    reset({
      name: '',
      furigana: '',
      email: '',
      phone: '',
      ageGroup: '',
      meetingMethod: '',
      curriculum: [],
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
      <div>
        <label className="block text-sm font-medium mb-1">
          お名前（漢字）<span className="text-red-500">※</span>
        </label>
        <input
          autoComplete="name"
          aria-invalid={!!errors.name || undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name', { required: '必須です' })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="例：田中太郎"
        />
        {errors.name && (
          <small id="name-error" className="text-red-600 text-sm">
            {errors.name.message}
          </small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          お名前（ふりがな）<span className="text-red-500">※</span>
        </label>
        <input
          autoComplete="off"
          aria-invalid={!!errors.furigana || undefined}
          aria-describedby={errors.furigana ? 'furigana-error' : undefined}
          {...register('furigana', {
            required: '必須です',
            pattern: {
              value: /^[あ-んー\s]+$/,
              message: 'ひらがなで入力してください',
            },
          })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="例：たなかたろう"
        />
        {errors.furigana && (
          <small id="furigana-error" className="text-red-600 text-sm">
            {errors.furigana.message}
          </small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          メールアドレス<span className="text-red-500">※</span>
        </label>
        <input
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={!!errors.email || undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('email', {
            required: '必須です',
            pattern: { value: /\S+@\S+\.\S+/, message: 'メール形式が不正です' },
          })}
          placeholder="例：example@email.com"
        />
        {errors.email && (
          <small id="email-error" className="text-red-600 text-sm">
            {errors.email.message}
          </small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          電話番号<span className="text-red-500">※</span>
        </label>
        <input
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          aria-invalid={!!errors.phone || undefined}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          {...register('phone', {
            required: '必須です',
            pattern: {
              value: /^[0-9]{10,11}$/,
              message: 'ハイフンなしで10桁または11桁の数字を入力してください',
            },
          })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="例：09012345678"
        />
        <small className="text-gray-600 text-sm">ハイフンなし</small>
        {errors.phone && (
          <small id="phone-error" className="text-red-600 text-sm block mt-1">
            {errors.phone.message}
          </small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          年代<span className="text-red-500">※</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {[
            { value: '10-20代', label: '10~20代' },
            { value: '30代', label: '30代' },
            { value: '40代', label: '40代' },
            { value: '50代', label: '50代' },
            { value: '60代', label: '60代（64歳まで）' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center whitespace-nowrap"
            >
              <input
                type="radio"
                value={option.value}
                {...register('ageGroup', { required: '必須です' })}
                className="mr-2"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.ageGroup && (
          <small className="text-red-600 text-sm block mt-1">
            {errors.ageGroup.message}
          </small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          面談方法<span className="text-red-500">※</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'online', label: 'オンライン' },
            { value: 'face-to-face', label: '対面' },
            { value: 'phone', label: '電話' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center whitespace-nowrap"
            >
              <input
                type="radio"
                value={option.value}
                {...register('meetingMethod', { required: '必須です' })}
                className="mr-2"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.meetingMethod && (
          <small className="text-red-600 text-sm block mt-1">
            {errors.meetingMethod.message}
          </small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          興味のあるカリキュラム<span className="text-red-500">※</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'job-support', label: '就職サポート' },
            { value: 'it-skills', label: 'ITスキル' },
            { value: 'office-skills', label: '事務スキル' },
            {
              value: 'communication-skills',
              label: 'コミュニケーションスキル',
            },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center whitespace-nowrap"
            >
              <input
                type="checkbox"
                value={option.value}
                {...register('curriculum', {
                  required: '1つ以上選択してください',
                  validate: (value) =>
                    value.length > 0 || '1つ以上選択してください',
                })}
                className="mr-2"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.curriculum && (
          <small className="text-red-600 text-sm block mt-1">
            {errors.curriculum.message}
          </small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          事前に伝えたいこと
        </label>
        <textarea
          {...register('message', {
            maxLength: {
              value: 1000,
              message: '1000文字以内で入力してください',
            },
          })}
          rows={4}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="ご質問やご要望など、お気軽にお書きください（任意）"
        />
        <small className="text-gray-600 text-sm">1000文字まで（任意）</small>
        {errors.message && (
          <small className="text-red-600 text-sm block mt-1">
            {errors.message.message}
          </small>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded px-4 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? '送信中…' : '登録する'}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-700 text-center py-4 bg-green-50 rounded">
          ご登録ありがとうございました！
          <br />
          後日、担当者よりご連絡いたします。
        </p>
      )}
    </form>
  );
}
