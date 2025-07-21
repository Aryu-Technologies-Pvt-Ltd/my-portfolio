import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Personal website built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>John Doe</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2023 John Doe</p>
        </footer>
      </body>
    </html>
  );
}
