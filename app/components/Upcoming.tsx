'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { UPCOMINGEVENTS } from '@/constants';

function Upcoming() {
  return (
    <section id="upcoming" className="padding-container w-full ">
      <div className="max-container">
        <motion.div
          className="max-w-2xl mx-auto text-center  mb-16"
          initial={{
            opacity: 0.3,
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
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Upcoming Events
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Unleash your inner rhythm at our electrifying music extravaganza!
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,

            transition: {
              duration: 0.8, // Animation duration
              delay: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          {UPCOMINGEVENTS &&
            UPCOMINGEVENTS.map((event, index) => {
              return (
                <UpcomingEventCard
                  image={event.image}
                  title={event.name}
                  key={`event-${index}`}
                  index={index}
                  date={event.date}
                  time={event.time}
                  intro={event.intro}
                  location={event.location}
                />
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}

const UpcomingEventCard = ({
  image,
  title,
  index,
  date,
  time,
  intro,
  location,
}) => {
  return (
    <div className="w-full flex flex-col items-center  mb-4 md:grid md:grid-cols-7 gap-4 md:gap-12 text-center md:text-start border border-white p-6">
      <div className="grid col-span-2 w-full    ">
        <div className="text-3xl font-bold">{date}</div>
        <div className="text-base text-slate-400">{time}</div>
      </div>
      <div className="grid  col-span-1 w-24 h-24 md:w-full md:h-full items-center ">
        <img
          className=" w-full aspect-square object-cover rounded-full"
          src={image}
        />
      </div>
      <div className="grid  col-span-3 w-full  ">
        <div className="text-3xl font-bold md:mb-2">{title}</div>
        <div className="text-base text-slate-400">{location}</div>
      </div>
      <div className="grid col-span-1 w-full h-full items-center">
        <button className="px-3 py-2 buttonPurple font-medium text-center rounded-md">
          Buy Ticket
        </button>
      </div>
    </div>
  );
};
export default Upcoming;
