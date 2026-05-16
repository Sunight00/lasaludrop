import { Geist } from 'next/font/google'
import { Playfair_Display } from "next/font/google";
import Dispatch from '../ui/dashboard/dispatch';
import DispatchRides from '../ui/dashboard/dispatchrides';

const geist = Geist({
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});
export default function Home() {
  return (
    <div className="p-4">
      <h1 className={`${playfair.className} text-2xl font-bold`}>Welcome to the Dashboard</h1>
      <Dispatch />
      <DispatchRides />

    </div>
  );
}