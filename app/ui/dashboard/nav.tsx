import Link from "next/link";
import Image from "next/image";
import {Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Nav() {
    return (
        <div className="h-full col-span-1">
            <nav className="bg-purple-800 text-white p-4 h-full">
                <Image src="/logo.png" width="100" height="100" alt="Logo" />
                <ul className="flex flex-col space-y-4">
                    <li>
                        <Link href="/dashboard" className={`${roboto}`}> Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}