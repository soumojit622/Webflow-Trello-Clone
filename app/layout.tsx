import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#171717",
};

export const metadata: Metadata = {
  title: "Webflow | Kanban Project & Workflow Management",
  description:
    "Webflow is a professional kanban-based platform for organizing projects, tracking progress, and improving team collaboration.",
  keywords: [
    "kanban project management",
    "task management software",
    "project tracking tool",
    "workflow automation",
    "team productivity",
    "collaboration platform"
  ],
  authors: [
    { name: "Soumojit Banerjee", url: "https://github.com/soumojit622" }
  ],
  icons: {
    icon: "/logo.svg",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
