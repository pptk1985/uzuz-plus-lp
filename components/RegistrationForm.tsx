'use client';

import React, { useState } from 'react';
import { ChevronsRight, Pen } from 'lucide-react';

import { Button } from './ui/button';

interface StatusButton {
  label: string;
  memo: string;
  value: string;
  statusParam: string;
}

const buttons: StatusButton[] = [
  {
    label: '在学中',
    memo: '',
    value: 'studying',
    statusParam: '1',
  },
  {
    label: '在職中',
    memo: '',
    value: 'employed',
    statusParam: '0',
  },
  {
    label: 'その他',
    memo: '離職中、卒業済など',
    value: 'other',
    statusParam: '0',
  },
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

    const redirectUrl = `https://career-emon.com/ref/c/ce_media_lp-form/direct-form/entry/?source=quick&c=${statusParam}`;

    // 外部URLへのリダイレクトにはwindow.location.hrefを使用
    window.location.href = redirectUrl;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="sm:max-w-sm mx-auto bg-white text-zinc-900 border-4 border-teal-300 rounded-md shadow"
      >
        <div className="bg-5 p-2 border-b-4 border-teal-300">
          <div className="flex justify-center items-center gap-2 mb-1">
            <Pen
              strokeWidth={3}
              className="text-white w-6 h-6 sm:w-7 sm:h-7 drop-shadow"
            />
            <span className="text-xl sm:text-2xl text-center text-white font-extrabold font-zen-maru drop-shadow">
              無料相談へのお申し込み
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="text-sm font-bold font-zen-maru text-white bg-rose-400 px-1.5 py-1 shadow">
              簡単！30秒で登録完了
            </div>
            <div className="text-sm font-bold font-zen-maru text-white bg-rose-400 px-1.5 py-1 shadow">
              ０円 完全無料相談！
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-7 flex flex-col gap-3 sm:gap-4">
          <span className="text-sm sm:text-base">
            まずは、現在のご状況を教えて下さい。
            <br />
            下記の中から１つ選び、次に進んでください。
          </span>

          {/* ボタンセクション */}
          <div className="grid grid-cols-2 gap-2">
            {buttons.map((item) => (
              <Button
                key={item.value}
                type="button"
                variant={status === item.value ? 'default' : 'outline'}
                className={`transition font-bold rounded-sm text-base sm:text-lg h-12 border-2 ${
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
                <span className="mx-auto my-1">
                  {item.label}
                  <span className="block font-normal text-[10px]">
                    {item.memo}
                  </span>
                </span>
              </Button>
            ))}
          </div>
          {error && (
            <div className="text-sm sm:text-base text-rose-400">{error}</div>
          )}
          <Button
            type="submit"
            className="font-bold flex justify-center items-center gap-1 bg-black rounded-sm"
          >
            <span className="drop-shadow-sm font-zen-maru">次へ進む</span>
            <ChevronsRight strokeWidth={3} />
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
