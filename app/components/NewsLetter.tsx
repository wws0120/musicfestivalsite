'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <>
      {/* <!-- Newsletter --> */}
      <section
        className="relative padding-container   w-full bg-cover bg-center bg-no-repeat py-4 after:absolute after:inset-0 after:bg-[#000000]/60"
        style={{
          backgroundImage: `url("/newsletterbg.webp")`,
        }}
      >
        <div className="max-container relative z-10">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.1, // Animation duration
                delay: 0.25,
              },
            }}
            viewport={{ once: true }}
          >
            <h2 className="mx-auto mb-6 max-w-lg font-bold text-center  text-3xl text-white">
              Ready to Groove to the Rhythm? Let the Music Move Your World!
            </h2>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.1, // Animation duration
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            <p className="mx-auto max-w-lg md:max-w-2xl  text-center text-lg text-neutral-300">
              Join our vibrant community for latest updates, giveaways, and
              events. Stay in tune with all the news from our music festival!
            </p>
          </motion.div>
          <div className="mx-auto mt-10 max-w-md text-center">
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-violet-300 bg-violet-950 py-3 px-4 text-white placeholder-white focus:ring-purple-700"
              />
              <button className="absolute top-2 right-2 rounded-full bg-indigo-600 px-6 py-2 font-display text-sm text-white hover:bg-indigo-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- end newsletter --> */}
    </>
  );
};

export default Newsletter;
