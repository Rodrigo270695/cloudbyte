import { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from 'react-hot-toast';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

/* export const metadata: Metadata = {
  title: "Cloud Byte | Inicio",
  description: "Descripción de tu empresa",
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
  },
}; */

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} min-h-screen flex flex-col bg-white text-gray-800`}>
        <Navbar />
        <main className="flex-grow mt-20">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
