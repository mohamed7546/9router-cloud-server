import "./globals.css";

export const metadata = {
  title: "9router Cloud Server",
  description: "9router Cloud Server & AI Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
