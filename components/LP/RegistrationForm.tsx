'use client';
import { useForm } from 'react-hook-form';

type Form = { name: string; email: string; company?: string };

// 直接ベタ書きでもOKですが、環境変数を使うと便利：NEXT_PUBLIC_GAS_ENDPOINT
const ENDPOINT = process.env.NEXT_PUBLIC_GAS_ENDPOINT as string;

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>();

  const onSubmit = async (values: Form) => {
    const payload = new URLSearchParams({
      name: values.name,
      email: values.email,
      company: values.company ?? '', // honeypot: 触られたら bot と判定
      ua: navigator.userAgent,
      referer: document.referrer || '',
    });

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: payload.toString(),
    });

    // レスポンス本文は読めないケースもあるので、失敗時だけ例外にする運用が安定
    try {
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || '送信エラー');
    } catch {
      // ここは無視してOK（多くの環境でPOST自体は成功しています）
    }

    reset({ name: '', email: '', company: '' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">お名前</label>
        <input
          className="border rounded px-3 py-2 w-full"
          {...register('name', { required: '必須です' })}
        />
        {errors.name && (
          <small className="text-red-600">{errors.name.message}</small>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">メール</label>
        <input
          type="email"
          className="border rounded px-3 py-2 w-full"
          {...register('email', {
            required: '必須です',
            pattern: { value: /\S+@\S+\.\S+/, message: 'メール形式が不正です' },
          })}
        />
        {errors.email && (
          <small className="text-red-600">{errors.email.message}</small>
        )}
      </div>

      {/* ハニーポット（画面外に配置） */}
      <div style={{ position: 'absolute', left: '-5000px', opacity: 0 }}>
        <label>会社</label>
        <input tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded px-4 py-2 bg-black text-white disabled:opacity-60"
      >
        {isSubmitting ? '送信中…' : '登録'}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-700">ご登録ありがとうございました！</p>
      )}
    </form>
  );
}
