import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9router Cloud Server",
  description: "9router Cloud Server & AI Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
