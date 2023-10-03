"use client";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <div className="w-screen mt-20 bottom-0 duration-200 bg-[#859f7e]/30 backdrop-blur border-lime-900 border-t">

                <div className="w-full flex flex-col items-center justify-between p-12 text-lime-950">
                    <div className="mb-4 font-vibes text-4xl">
                        Vinicius & Beatriz - 11 . 11. 2023
                    </div>
                    <div className="flex flex-row items-center justify-center font-ysra text-sm -mb-10" >Desenvolvido por Diego Cruz <Link className="text-xl px-2" href="https://github.com/DFCruzz"><IoLogoGithub /></Link></div>
                </div>

            </div>
        </footer>
    );
}