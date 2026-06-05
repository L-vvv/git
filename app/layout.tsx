import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛绒绒宠物洗护店",
  description: "温柔洗护、精致美容、安心托管的一站式宠物洗护店。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
