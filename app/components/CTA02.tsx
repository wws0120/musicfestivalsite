'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function CTA02() {
  return (
    <>
      <section
        id="home"
        className="relative w-full padding-container overflow-hidden"
      >
        <div className=" max-container   relative overflow-hidden">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <motion.div
              className="md:col-span-7 order-2 md:order-1"
              initial={{
                x: -80,
                opacity: 0,
              }}
              whileInView={{
                x: -0,
                opacity: 1,
                height: 'max-content', // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
                type: 'tween',
              }}
              viewport={{ once: true }}
            >
              <div className="md:me-6">
                <h4 className="font-semibold text-4xl/tight lg:text-6xl/tight capitalize text-white mb-4 sm:text-[36px] lg:text-[42px] xl:text-[60px]">
                  <span className="bg-gradient-to-l from-purple-100 to-violet-600 text-transparent bg-clip-text">
                    Discover &amp; Revel
                  </span>{' '}
                  in the Ultimate Music Festival
                </h4>
                <p className="text-lg max-w-xl text-neutral-400 mb-6  lg:text-xl">
                  We are a vast platform committed to connecting exceptional
                  musical groups with their fans and unique music enthusiasts!
                </p>
                <div className="text-center sm:text-left">
                  <Link
                    href="#"
                    target="_blank"
                    className="inline-flex mt-2 font-medium py-2 px-8  buttonGradient text-white text-center hover:opacity-90 hover:text-slate-300 rounded-lg "
                  >
                    Buy Ticket
                  </Link>
                </div>
              </div>
            </motion.div>
            {/*end col*/}
            <div className="md:col-span-5 order-1 md:order-2">
              <motion.div
                className="relative flex gap-4 md:gap-6"
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                    type: 'tween',
                  },
                }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-4 md:gap-6 pt-10 md:pt-16 w-full">
                  <img
                    src="/cta002.webp"
                    className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                    alt=""
                  />
                  <img
                    src="/cta003.webp"
                    className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                  <div className="absolute bottom-0 end-0 -z-10">
                    <i
                      data-lucide="triangle"
                      className="animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"
                    />
                  </div>
                  <img
                    src="/cta004.webp"
                    className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                    alt=""
                  />
                  <img
                    src="/cta005.webp"
                    className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute top-32 h-[400px] w-[500px] rounded-full bg-gradient-conic   blur-3xl    from-violet-800 via-[#a830d0] to-purple-200 opacity-40 -z-10 md:block hidden"></div>
              </motion.div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}

        {/*end */}
      </section>
      {/*end section*/}
      {/* End */}
    </>
  );
}

export default CTA02;
