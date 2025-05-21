
/*
 * PIXEL WALKER
 *
 * Copyright (c) 2025, Alessio Saltarin
 * This software is licensed under BSD license - see LICENSE file.
 *
 */

import type { Metadata } from 'next';
import { pressStart2P } from '@/config/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Pixel Walker',
  description: 'A 2D pixel art walking game.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${pressStart2P.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
