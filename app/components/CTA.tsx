'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function CTA() {
  return (
    <section id="cta01" className="padding-container  w-full ">
      <div className="max-container ">
        <div className="relative flex place-items-center  after:absolute  after:h-[240px] after:w-[300px]  after:bg-gradient-conic   after:blur-2xl after:content-['']  before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-[#5b0bc4] after:dark:opacity-40  after:z-[-1] after:top-3/4 after:-left-4 after:transform after:-translate-x-1/2 after:-translate-1/2"></div>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]">
          <motion.div
            className="overflow-hidden rounded-[10px]"
            initial={{
              x: -40,
              opacity: 0,
            }}
            whileInView={{
              x: -0,
              opacity: 1,
              height: 'max-content', // Slide in to its original position
              transition: {
                duration: 0.6, // Animation duration
                type: 'tween',
              },
            }}
            viewport={{ once: true }}
          >
            <img
              src="/cta01.webp"
              alt="content-img-2"
              width={550}
              height={550}
              className="h-auto w-full"
            />
          </motion.div>

          <div>
            {/* Section Content Block */}
            <motion.div
              className="mb-6"
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.9, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-semibold text-4xl/tight lg:text-6xl/tight capitalize text-white mb-4  sm:text-[36px] lg:text-[42px] xl:text-[60px]">
                <span className="bg-gradient-to-l from-purple-500 to-violet-100 text-transparent bg-clip-text">
                  Experience the Premier
                </span>{' '}
                Music Festival
              </h2>
            </motion.div>
            {/* Section Content Block */}
            <motion.div
              className="mb-6"
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1.1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-lg text-neutral-400 leading-[1.42] lg:text-xl">
                Music enthusiasts from all around the world gather at our
                extraordinary music festival to immerse themselves in the
                electrifying atmosphere and captivating performances.
              </p>
              <p className="mb-4 text-lg text-neutral-400 leading-[1.42] lg:text-xl">
                Our platform offers a seamless ticket buying experience. With
                just a few clicks, you can secure your tickets and gain access
                to a world of unforgettable performances and musical brilliance.
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
