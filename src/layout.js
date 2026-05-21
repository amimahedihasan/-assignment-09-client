import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sheared/NavBar";
import Footer from "@/components/sheared/Footer";
import { Toaster } from "react-hot-toast";



export const metadata = {
  title: "DocAppoint Home",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>
        {children}
        <Footer/>
        <Toaster/>
        </body>
    </html>
  );
}
