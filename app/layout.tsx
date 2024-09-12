import "@/styles/globals.css";

import type { Metadata } from "next";
import { cn } from "@/lib/cn";
import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Journal for Wellbeing",
  description: "Journal for Wellbeing | By Imaobong Essien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "antialiased focus:scroll-auto scroll-smooth",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
