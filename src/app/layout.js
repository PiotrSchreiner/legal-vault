import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Legal Vault",
  description: "Secure digital vault for legal documents",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">
        <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 sticky top-0 z-50">
          <Link
            href="/dashboard"
            className="text-2xl font-bold tracking-tighter text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            LEGAL<span className="text-blue-600">VAULT</span>
          </Link>

          <div className="hidden space-x-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
            <Link href="/" className="hover:text-black dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-black dark:hover:text-white font-semibold text-blue-600 dark:text-blue-500"
            >
              My Vault
            </Link>
            <Link
              href="/profile"
              className="hover:text-black dark:hover:text-white"
            >
              Requirements
            </Link>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
