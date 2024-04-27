import React from 'react';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import { RiCloseFill } from 'react-icons/ri';

function MoblieNav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div>
      <nav className="w-screen bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-end py-3 md:py-5 md:block">
              {/* LOGO */}

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 ml:auto text-slate-300 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <RiCloseFill className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isMenuOpen ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {NAV_LINKS.map((link) => {
                  return (
                    <li className="text-xl text-white py-4 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-violet-600  border-purple-800  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link
                        href={link.path}
                        className="w-full h-full"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MoblieNav;
