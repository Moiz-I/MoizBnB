import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/navbar/modals/Modal";
import RegisterModal from "./components/navbar/modals/RegisterModal";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientOnly from "./components/ClinentOnly";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AirBnB",
  description: "AirBnB Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Modal actionLabel="Submit" title="hello" isOpen /> */}
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
