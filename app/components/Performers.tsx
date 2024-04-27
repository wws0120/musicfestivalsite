'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PERFORMERS } from '../../constants';
import Image from 'next/image';

function Performers() {
  return (
    <section className="padding-container w-full">
      <div className="max-container">
        <motion.div
          className="grid grid-cols-1"
          initial={{
            opacity: 0,
            x: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.2,
              type: 'tween',
            },
          }}
          viewport={{ once: true }}
        >
          <div className="relative text-center mb-16">
            <h2 className="font-bold text-[32px] md:text-[40px] capitalize mb-2 relative z-10">
              <span className="bg-[#3a135a] opacity-80 h-[70px] w-[70px] inline-block absolute rounded-full -z-20 -top-[10px]  mb-1.5"></span>
              Featured Performers
            </h2>
            <p className="text-base font-medium mx-auto text-neutral-400 max-w-xl">
              Discover an extraordinary lineup of talented performers at our
              music festival. Experience a diverse range of genres and styles
              that will captivate music enthusiasts of all tastes.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px]"
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          {PERFORMERS.map((performer) => (
            <div className="text-center" key={performer.name}>
              <div className="w-full h-[200px] mx-auto rounded-[30px] relative">
                <Image
                  src={performer.img}
                  alt={performer.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="bg-[#e7e7e7] h-px w-4/5 mx-auto my-5"></div>
              <div className="mt-4">
                <h4 className="font-bold text-2xl">{performer.name}</h4>
                <p className="text-slate-300 mt-2">{performer.intro}</p>
              </div>

              <div>
                <ul className="flex items-center space-x-3 justify-center">
                  <li className="shrink-0">
                    <a
                      href="#"
                      className="text-dark hover:text-custom duration-300 px-2 leading-10 rounded-full block text-[26px] text-center"
                    >
                      <i className="mdi mdi-twitter"></i>
                    </a>
                  </li>
                  <li className="shrink-0">
                    <a
                      href="#"
                      className="text-dark hover:text-custom duration-300 px-2 leading-10 rounded-full block text-[26px] text-center"
                    >
                      <i className="mdi mdi-google-plus"></i>
                    </a>
                  </li>
                  <li className="shrink-0">
                    <a
                      href="#"
                      className="text-dark hover:text-custom duration-300 px-2 leading-10 rounded-full block text-[26px] text-center"
                    >
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Performers;
