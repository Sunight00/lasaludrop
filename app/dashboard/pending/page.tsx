import { Geist } from 'next/font/google'
import { Playfair_Display } from "next/font/google";
import Dispatch from '@/app/ui/dashboard/dispatch';
import {PendingRides} from '@/app/ui/dashboard/dispatchrides';
import queries from "@/app/lib/data";

const geist = Geist({
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});
export default async function Home() {
  return (
    <div className="p-4">
      <h1 className={`${playfair.className} text-2xl font-bold`}>Welcome to the Dashboard</h1>
      <Dispatch />
      <PendingRides />

    </div>
  );
}