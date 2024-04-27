import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { UPCOMINGEVENTS } from '@/constants';
import FooterNav from './footer/FooterNav';

function Footer() {
  return (
    <footer>
      <div className="bg-slate-900 text-gray-300 py-4 mx-auto ">
        <div className="px-4 mx-auto">
          <div className="max-container -mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-3/12">
              <a href="/" className="flex items-center w-156 mb-5">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="ml-2 uppercase text-slate-100  text-3xl ">
                  Festival Beats
                </div>
              </a>
              <p className="text-justify">
                Festival Beats is a sonic kaleidoscope, crafting a distinctive
                blend of energetic rock and upbeat pop music. Dive into a
                distinctive, harmonious universe where audacious rhythms defy
                the norm. Surrender to the powerful symphony of innovation,
                letting your soul dance to the vibrant celebration of music.
              </p>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-slate-100  text-2xl pb-4 mb-4 border-b-4 border-purple-800">
                  Links
                </h2>
                <FooterNav />
              </div>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-slate-100 text-2xl pb-4 mb-4 border-b-4 border-purple-800">
                  Events
                </h2>
              </div>
              <ul className="leading-8">
                {UPCOMINGEVENTS.slice(0, 4).map((item) => {
                  return (
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        <span className="font-bold">{item.name}</span>
                        {' - '}
                        <span>{item.location}</span>
                      </a>
                    </li>
                  );
                })}
                <li>
                  <a href="#" className="hover:text-blue-400">
                    See More
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-slate-100  text-2xl pb-4 mb-4 border-b-4 border-purple-800">
                  Connect With Us
                </h2>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
              >
                <FaFacebookF className="w-4 h-4 fill-current" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
              >
                <FiTwitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
              >
                <FaInstagram className="w-4 h-4 fill-current" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
              >
                <FaYoutube className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-violet-800 py-3 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2024 Lorem. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made by Lorem.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
