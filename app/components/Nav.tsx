'use client';

import { useRef, useState } from 'react';
import { addScrollingClass } from '../utils/add-scrolling-class';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';

import Menu from './transparentNav/Menu';
import MobileNav from './transparentNav/MobileNav';

export default function TransparentHeader() {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  addScrollingClass(headerRef);

  return (
    <header
      ref={headerRef}
      className="fixed max-container w-screen transparent-header top-0 left-auto right-auto z-[100] flex justify-between   px-4 py-3.5 sm:bg-transparent sm:px-6 lg:py-6 2xl:px-7 3xl:px-8 4xl:py-9 4xl:px-16"
    >
      <Link
        href="/"
        className="flex w-full max-w-[240px] items-center text-white focus:outline-none "
      >
        <img src="/logo.png" className="w-8 h-8" />
        <span className="ml-2 text-2xl font-bold uppercase">
          Festival Beats
        </span>
      </Link>
      <button
        className="flex items-center p-2 text-slate-300 rounded-md outline-none focus:border-gray-400 focus:border "
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <BiMenu className="h-8 w-8 md:hidden" />
      </button>
      <Menu />
      {isMenuOpen && (
        <>
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </>
      )}
    </header>
  );
}
