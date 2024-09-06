import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "MN-trusted",
  description: "My Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="z-30" >
      
        {children}
        </body>
    </html>
  );
}
