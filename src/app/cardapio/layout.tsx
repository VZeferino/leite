import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardápio Completo | Dragon Kiss",
  description: "Confira nossos pacotes de menus para eventos, acompanhamentos e serviços. Opções Prata, Ouro e Platina disponíveis para diferentes necessidades.",
  openGraph: {
    title: "Cardápio Completo | Dragon Kiss",
    description: "Confira nossos pacotes de menus para eventos, acompanhamentos e serviços",
  },
};

export default function CardapioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 