'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LASTESTEVENTS } from '@/constants';
import EventCard from './event/EventCard';

function LatestEvent() {
  return (
    <section className="padding-container w-full sm:py-16 lg:py-24 antialiased">
      <div className="max-container ">
        <motion.div
          className="max-w-2xl mx-auto text-center  mb-16"
          initial={{
            opacity: 1,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 0.8, // Animation duration
              delay: 0.2,
              type: 'tween',
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Latest events
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Latest Rhythmic Highlights from Our Music Extravaganza!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {LASTESTEVENTS.map((data, index) => {
            return (
              <EventCard
                img={data.image}
                key={index}
                index={index}
                title={data.name}
                date={data.date}
                intro={data.intro}
                location={data.location}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LatestEvent;
