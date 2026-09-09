import type { ReactNode } from "react";
import PortfolioDocument from "@/components/PortfolioDocument";
import { portfolioMetadata } from "@/lib/portfolio-metadata";
import "../globals.css";

export const metadata = portfolioMetadata("fr");

export default function Layout({ children }: { children: ReactNode }) {
  return <PortfolioDocument locale="fr">{children}</PortfolioDocument>;
}
