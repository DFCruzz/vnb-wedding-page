"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export const Navbar = () => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} style={{ zIndex: 1000 }}>
      <div
        className={`fixed inset-x-0 top-0 z-999 duration-200 border-b ${
          isIntersecting
            ? "bg-lime-950/0 border-transparent"
            : "bg-[#859f7e]/30 backdrop-blur border-lime-900"
        }`}
      >
        <div className="container flex flex-col sm:flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-4 sm:gap-8">
            <Link
              href="/lista"
              className="duration-200 text-sm sm:text-lg text-lime-950 hover:text-lime-600 font-ysra tracking-widest font-semibold mb-2 sm:mb-0 sm:text-md"
            >
              Lista de Presentes
            </Link>
            <Link
              href="/#attendance"
              className="duration-200 text-sm sm:text-lg text-lime-950 hover:text-lime-600 font-ysra tracking-widest font-semibold"
            >
              Confirmar Presença
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 font-paris text-2xl sm:text-3xl text-lime-950 hover:text-lime-600 font-semibold mt-4 sm:mt-0"
          >
            V & B
          </Link>
        </div>
      </div>
    </header>
  );
};
