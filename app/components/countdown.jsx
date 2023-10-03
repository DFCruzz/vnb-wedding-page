"use client";
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const targetDate = new Date('2023-11-11T00:00:00');
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4">
      <div className="flex flex-col items-center justify-center bg-[#859f7e] text-white p-4 rounded-lg h-20 w-20 sm:w-32">
        <div className="text-2xl sm:text-3xl font-vibes font-semibold">{timeRemaining.days}</div>
        <div className="text-md sm:text-lg">Dias</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#859f7e] text-white p-4 rounded-lg h-20 w-20 sm:w-32">
        <div className="text-2xl sm:text-3xl font-vibes font-semibold">{timeRemaining.hours}</div>
        <div className="text-md sm:text-lg">Horas</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#859f7e] text-white p-4 rounded-lg h-20 w-20 sm:w-32">
        <div className="text-2xl sm:text-3xl font-vibes font-semibold">{timeRemaining.minutes}</div>
        <div className="text-md sm:text-lg">Minutos</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#859f7e] text-white p-4 rounded-lg h-20 w-20 sm:w-32">
        <div className="text-2xl sm:text-3xl font-vibes font-semibold">{timeRemaining.seconds}</div>
        <div className="text-md sm:text-lg">Segundos</div>
      </div>
    </div>
  );
};

export default Countdown;