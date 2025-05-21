
/*
 * Smart Walker
 *
 * Copyright (c) 2025, Alessio Saltarin
 * This software is licensed under BSD license - see LICENSE file.
 *
 */

import type { Metadata } from 'next';
import { pressStart2P } from '@/config/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smart Walker',
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
      </body>
    </html>
  );
}
