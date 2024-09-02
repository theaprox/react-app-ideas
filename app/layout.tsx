import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./sytels/globals.css";
import NavBar from "./layouts/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "React Ideas",
  title: {
    template: "%s | React Ideas",
    default: "React Ideas",
  },
  description: "React and Next.js apps from app-ideas github page.",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "App Ideas", "Programming"],
  authors: [
    { name: "aprox" },
    { name: "aprox", url: "https://github.com/theaprox" },
  ],
  creator: "aprox",
  publisher: "aprox",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="main-container" aria-label="main-container" className="p-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
