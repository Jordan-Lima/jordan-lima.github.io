import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jordan Lima",
  description: "Site portfólio de Jordan Lima",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
