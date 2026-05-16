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
<div className="min-h-screen">
  <Nav />
  <main className="md:ml-[220px] md:p-5 p-1">
    {children}
  </main>
</div>
  );
}
