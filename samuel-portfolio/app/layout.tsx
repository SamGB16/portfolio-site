import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Samuel Blanco — Product Designer",
  description: "Aspiring product designer at NJIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "var(--bg)" }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
