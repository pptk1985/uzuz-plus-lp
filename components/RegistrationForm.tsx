'use client';

import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { ChevronsRight, Pen } from 'lucide-react';
import { Button } from './ui/button';

// const SupportFlowData = [
//   'キャリア相談',
//   '求人紹介',
//   '応募書類添削',
//   '面接対策',
//   'スケジュール調整',
//   '入社後フォロー',
// ];

interface StatusButton {
  label: string;
  value: string;
  statusParam: string;
}

const buttons: StatusButton[] = [
  { label: '在学中', value: 'studying', statusParam: '1' },
  { label: '在職中', value: 'employed', statusParam: '0' },
  { label: 'その他', value: 'other', statusParam: '0' },
];

const RegistrationForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!status) {
      setError('在学中、在職中、その他 のどれかを選択してください。');
      return;
    }

    const selectedButton = buttons.find((item) => item.value === status);
    const statusParam = selectedButton ? selectedButton.statusParam : '0';

    const redirectUrl = `https://career-emon.com/ref/c/ce_media_lp-form/media/direct-form/entry/?source=quick&c=${statusParam}`;

    // 外部URLへのリダイレクトにはwindow.location.hrefを使用
    window.location.href = redirectUrl;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="sm:max-w-sm mx-auto grid grid-cols-1 gap-2 sm:gap-4 bg-white text-zinc-900 border rounded-md p-4 sm:p-7"
      >
        <div className="text-lg sm:text-xl font-bold text-center flex justify-center items-center gap-1">
          <Pen strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>お申し込みフォーム</span>
        </div>
        <Separator />
        <span className="text-sm sm:text-base text-center">
          まずは、現在のご状況を教えてください。
        </span>
        {/* ボタンセクション */}
        <div className="grid grid-cols-2 gap-1 sm:gap-2">
          {buttons.map((item) => (
            <Button
              key={item.value}
              type="button"
              variant={status === item.value ? 'default' : 'outline'}
              className={`transition font-bold rounded-sm ${
                status === item.value
                  ? 'bg-teal-400 hover:bg-teal-400'
                  : 'hover:bg-amber-100'
              }`}
              onClick={() => {
                setStatus(item.value);
                setError('');
              }}
            >
              <input
                type="radio"
                name="status"
                value={item.value}
                checked={status === item.value}
                onChange={() => {
                  setStatus(item.value);
                  setError('');
                }}
                className="hidden"
              />
              <span className="mx-auto my-1">{item.label}</span>
            </Button>
          ))}
          <Button
            type="submit"
            className="font-bold flex justify-center items-center gap-1 bg-black rounded-sm"
          >
            <span className="drop-shadow-sm font-zen-maru">次へ進む</span>
            <ChevronsRight strokeWidth={3} />
          </Button>
        </div>
        {error && <div className="text-center text-rose-400">{error}</div>}
        <Separator />
        <div className="">
          <div className="font-zen-maru text-xs sm:text-sm text-muted-foreground my-1">
            『本当にホワイトな会社』選びはUZUZで！
            UZUZではブラック企業を排除する仕組みが整っているので、安心してご利用いただけます。
          </div>
          <div className="text-center">
            <span className="font-bold text-2xl sm:text-3xl text-amber-300 font-zen-maru [text-shadow:_1px_2px_0_rgb(0_0_0_/_100%)]">
              ０円
            </span>
            <span className="text-muted-foreground text-xs sm:text-sm">
              （ご利用完全無料）
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
