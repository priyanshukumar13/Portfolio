import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarFooterWrapper from "./components/Wrapper";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Priyanshu Kumar",
  description: "Welcome to Priyanshu Kumar's portfolio website",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster 
        richColors position="top-right"
        toastOptions={{
          style: {
            background: "#c084fc",
            color: "#0a101f",
            border:"2px solid #a855f7",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "16px",
          },
        }}
        />
        <NavbarFooterWrapper>{children}</NavbarFooterWrapper>
      </body>
    </html>
  );
}
