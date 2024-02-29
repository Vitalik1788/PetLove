'use client';

import React from 'react';
import './globals.css';
import { Manrope } from 'next/font/google';
import AppBar from './components/AppBar/AppBar';
import { Box } from './layout.styled';

const FONT = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FONT.className}>
        <Box >
          <AppBar />
        </Box>
        {children}
      </body>
    </html>
  );
}
