import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dragon Kiss | Experiência Gastronômica",
  description: "Conheça nossas chamas e o verdadeiro 'Beijo do Dragão'",
  authors: [{ name: "Dragon Kiss Eventos" }],
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
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
