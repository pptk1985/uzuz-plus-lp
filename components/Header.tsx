import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/public/images/uzuzplus/logo_uzuzplus-w.svg';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
  index: number;
}

interface HeaderProps {
  setIndex: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ setIndex }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'おすすめの理由', href: '#reason', index: 3 },
    { name: 'プログラム内容', href: '#program', index: 4 },
    { name: 'ご利用の流れ', href: '#supportflow', index: 5 },
    { name: '料金', href: '#pricing', index: 6 },
  ];

  const handleMenuToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();
    setIndex(item.index);
    window.location.hash = item.href.replace('#', '');
  };

  const handleRegistrationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex(1); // registrationセクションのインデックス
    window.location.hash = 'registration';
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900/75'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          <div className="shrink-0 flex items-center">
            <Link
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                setIndex(0);
                window.location.hash = 'hero';
              }}
            >
              <Image
                src={Logo.src}
                alt="キャリエモンのキャリアサポート"
                width={200}
                height={200}
                className="w-24 sm:w-32 mx-auto"
              />
            </Link>
          </div>

          <nav className="hidden sm:flex space-x-2">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className="text-white hover:text-orange-300 px-3 py-2 rounded-md font-bold transition-colors duration-200 drop-shadow"
                aria-label={item.name}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center">
            <Button
              variant="outline"
              className="animate-bounce font-bold font-zen-maru relative top-1 shadow-md"
              onClick={handleRegistrationClick}
            >
              ご利用の登録はコチラ
            </Button>
          </div>

          <div className="flex sm:hidden items-center">
            <Button
              variant="outline"
              className="font-bold font-zen-maru shadow-md"
              onClick={handleRegistrationClick}
            >
              ご利用の登録はコチラ
            </Button>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-white hover:text-amber-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item: NavItem) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className="text-white hover:text-zinc-900 block px-3 py-2 rounded-md text-base font-bold drop-shadow"
                aria-label={item.name}
              >
                {item.name}
              </a>
            ))}
            {/* <Button
              variant="outline"
              className="w-full font-bold font-zen-maru"
              onClick={handleRegistrationClick}
            >
              キャリア相談はこちら
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
