'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import Image from 'next/image';

function EventCard({ img, title, index, date, intro, location }) {
  return (
    <motion.div
      className="bg-gray-950 p-4 rounded-md shadow-md space-y-4"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 1.1, // Animation duration
          delay: index * 0.25,
        },
      }}
      viewport={{ once: true }}
    >
      <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        {date}
      </span>
      <div className="w-full h-200">
        <Image
          src={img}
          alt={title}
          width={640}
          height={480}
          style={{ objectFit: 'cover' }}
          className="w-full aspect-[3/2]"
        />
      </div>
      <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        {location}
      </h3>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        {intro}
      </p>
      <a
        href="#"
        title=""
        className="inline-flex items-center justify-center gap-2 py-2 px-6 transition-all duration-300 border bg-transparent border-white/20 text-white rounded-lg mt-2 hover:bg-slate-800 hover:border-slate-500"
        role="button"
      >
        View More
        <MdOutlineKeyboardDoubleArrowRight />
      </a>
    </motion.div>
  );
}

export default EventCard;
