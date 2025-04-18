import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AOSInitializer } from "../components/AOSInitializer";
import { getPath } from "@/utils/path";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dragon Kiss | Experiência Gastronômica",
  description: "Conheça nossas chamas e o verdadeiro 'Beijo do Dragão'",
  authors: [{ name: "Dragon Kiss Eventos" }],
  icons: {
    icon: '/logo.ico',
    apple: '/logo.ico',
  },
  openGraph: {
    title: "Dragon Kiss | Experiência Gastronômica",
    description: "Conheça nossas chamas e o verdadeiro 'Beijo do Dragão'",
    url: "https://www.instagram.com/dragonkiss.eventos/",
    siteName: "Dragon Kiss",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dragon Kiss | Experiência Gastronômica",
    description: "Conheça nossas chamas e o verdadeiro 'Beijo do Dragão'",
  },
  keywords: ["Dragon Kiss", "Beijo do Dragão", "Gastronomia", "Eventos", "São Paulo", "Churrasco"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="/logo.ico" />
      </head>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
