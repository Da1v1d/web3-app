import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/store/provider";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "my project",
  description: "create my project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
}
