"use client";  // This makes it a client component

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NavbarFooterWrapper({ children }) {
  const pathname = usePathname();

  const NoNavbarRoutes = ['/'];
  const NoFooterRoutes = ['/'];

  return (
    <>
      {!NoNavbarRoutes.includes(pathname) && <Navbar />}
      {children}
      {!NoFooterRoutes.includes(pathname) && <Footer />}
    </>
  );
}
