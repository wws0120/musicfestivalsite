'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="py-32 relative w-full overflow-hidden bg-fixed bg-no-repeat bg-center bg-cover bg-[url('/hero.webp')]">
      <div className="absolute bg-black/10 inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/70" />
      {/* end backdrop */}
      <div className="padding-container max-container">
        <div className=" relative text-center">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1, // Animation duration
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <span className="text-white font-medium bg-white/20 py-[5px] px-4 rounded-md">
              1 <sup>th</sup> Show, 01 January 2024
            </span>
            <h1 className="lg:text-6xl text-5xl font-extrabold tracking-wider font-mono text-white my-8">
              Festival Beats
            </h1>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.1, // Animation duration
                delay: 0.45,
              },
            }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl text-center">
              <p className="font-semibold text-white">
                Savor our precisely curated festival under the stars. Enjoy
                diverse performances and bask in the musical harmony of this
                memorable night.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2, // Animation duration
                delay: 0.65,
              },
            }}
            viewport={{ once: true }}
          >
            <div className="relative mt-14">
              <div className="">
                <div className="flex flex-wrap items-center justify-center gap-8 sm-gap-4">
                  <div className="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                    <span className="text-3xl">3</span>
                    <span className="text-base">Days</span>
                  </div>

                  <div className="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                    <span className="text-3xl">10+</span>
                    <span className="text-base">Genres</span>
                  </div>

                  <div className="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                    <span className="text-3xl">20+</span>
                    <span className="text-base">Artists</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Flex End */}
        </div>
        <div className="flex justify-center">
          <motion.div
            className="relative mt-20"
            initial={{
              opacity: 0,
              y: 5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1, // Animation duration
                delay: 0.9,
              },
            }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="text-xl font-medium py-3 px-9 buttonGradient text-primary rounded-lg hover:opacity-90  hover:text-slate-300 "
            >
              Buy Ticket
            </a>
          </motion.div>
        </div>
        {/* Flex End */}
      </div>
      {/* Container End */}
    </section>
  );
}

export default Hero;
