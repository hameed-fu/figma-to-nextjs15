import './globals.css';
import "@ant-design/v5-patch-for-react-19";
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import MainLayout from './components/layout/main-layout';

const inter = Inter({ subsets: ['latin'] });

 

import Head from 'next/head';

export const metadata = {
  title: 'Modern Dashboard',
  description: 'Professional dashboard layout with modern features',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
    <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </body>
  </html>
  
  );
}
