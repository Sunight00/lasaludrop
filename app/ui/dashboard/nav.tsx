"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
        <div className="hidden md:block">
            <nav className="fixed top-0 left-0 h-screen w-[220px] bg-purple-800 text-white p-4">
            <Image src="/logo.png" width={100} height={100} alt="Logo" />

            <ul className="flex flex-col space-y-4 mt-5">
                <li>
                <Link href="/dashboard" className={roboto.className}>
                    Dashboard
                </Link>
                </li>
            </ul>
            </nav>
        </div>

      {/* Mobile Navbar */}
        <div className="md:hidden">
            <nav className="bg-purple-800 text-white p-4 flex items-center justify-between relative">
                <Image src="/logo.png" width={50} height={50} alt="Logo" />

                <button onClick={() => setOpen(!open)}>
                <Bars3Icon className="h-6 w-6" />
                </button>

            {/* Slide Menu */}
                <div className={`fixed top-0 right-0 h-screen w-[250px] bg-purple-900 p-5 transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <button className="mb-5" onClick={() => setOpen(false)}> <XMarkIcon className="h-6 w-6" /></button>

                    <ul className="flex flex-col space-y-4">
                        <li>
                        <Link href="/dashboard" className={roboto.className}>
                            Dashboard
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  );
}