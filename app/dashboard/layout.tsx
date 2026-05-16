import type { Metadata } from "next";
import "@/app/globals.css";
import Nav from "@/app/ui/dashboard/nav";




export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard layout for the application",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <Nav />
      <main className="col-span-11 p-4">{children}</main>
    </div>
  );
}
