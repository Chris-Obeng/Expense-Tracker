import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description:
    "A simple expense tracker built with Next.js 16 and Tailwind CSS, Neon Database, Prisma and Clerk for authentication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative min-h-screen bg-background text-foreground">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20" />
                <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_55%),radial-gradient(circle_at_85%_10%,_rgba(249,115,22,0.12),_transparent_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_60%),radial-gradient(circle_at_85%_10%,_rgba(249,115,22,0.14),_transparent_55%)]" />
              </div>
              <Header />
              <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-8">
                {children}
              </main>
              <footer className="mx-auto w-full max-w-5xl px-4 pb-10">
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/50 bg-white/60 px-4 py-6 text-center text-sm text-muted-foreground shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
                  <span className="text-xs uppercase tracking-[0.35em]">
                    Crafted with care
                  </span>
                  <span className="text-sm font-medium text-foreground/80">
                    © {new Date().getFullYear()} Created by Chris
                  </span>
                </div>
              </footer>
            </div>
            <ToastContainer />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
