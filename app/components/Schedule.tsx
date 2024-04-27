'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SCHEDULES } from '../../constants/index';

function Schedule() {
  return (
    <section
      id="schedule"
      className="padding-container w-full bg-gradient-to-b from-[#1c0a1f] via-[#0d0e36] to-transparent"
    >
      <div className="max-container ">
        <motion.div
          className="flex items-center justify-center mb-16"
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
          <div className="max-w-2xl text-center">
            <h5 className="capitalize text-lg font-semibold font-sans  text-gray-100  mb-2">
              Our Festival Program{' '}
            </h5>
            <h2 className="text-[32px] md:text-[40px] font-bold capitalize text-text-white mb-1.5">
              Festival Beats Schedule
            </h2>
            <p className="text-base font-medium text-neutral-400 max-w-xl">
              Embrace the vibrant mix of electrifying performances that resonate
              with the pulse of rock and pop.
            </p>
          </div>
        </motion.div>
        {/* end flex */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {SCHEDULES.map((schedule, index) => (
            <motion.div
              className="relative border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url("${schedule.bgImage}")` }}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.75 + index * 0.3,
                },
              }}
              viewport={{ once: true }}
              key={schedule.date}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="text-center relative shadow p-10">
                <div className="mb-12">
                  <p className="text-gray-100 font-semibold mb-2">
                    {schedule.date}
                  </p>
                  <h4 className="text-2xl font-bold text-white">
                    {schedule.title}
                  </h4>
                </div>
                {schedule.sessions.map((session) => (
                  <div className="mb-8" key={session.time}>
                    <h6 className="text-white font-bold italic mb-1">
                      {session.time}
                    </h6>
                    <p className="text-slate-200 font-medium mb-8">
                      {session.description}
                    </p>
                  </div>
                ))}
                <a
                  href="#price"
                  className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border rounded-md py-2 px-6 text-slate-50   duration-500 hover:bg-slate-800 hover:border-slate-400 hover:opacity-80 "
                >
                  Buy ticket
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Grid End */}
      </div>
    </section>
  );
}

export default Schedule;
