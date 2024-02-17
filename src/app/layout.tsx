import React from 'react';
import './globals.css';
import { Manrope } from 'next/font/google';
import AppBar from './components/AppBar/AppBar';

const FONT = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FONT.className}>
        <div style={{ padding: '10px 20px 0px', backgroundColor: '#F9F9F9' }}>
          <AppBar />
        </div>
        {children}
      </body>
    </html>
  );
}
