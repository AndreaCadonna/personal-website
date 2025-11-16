import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Engineer & Chess Enthusiast",
  description: "Personal portfolio with an interactive chess puzzle challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
