import { ArrowUp, ArrowUpRight, Download, Mail } from "lucide-react";
import { cvContent, type Locale } from "@/lib/cv-data";
import { Location, MailButton, RevealEmail } from "@/components/ui/Contact";
import LocalTime from "@/components/ui/LocalTime";

export default function Footer({ locale }: { locale: Locale }) {
  const { footer, personal, hero } = cvContent[locale];

  return (
    <footer id="contact" className="contact spot">
      <div className="contact__inner">
        <h2>{footer.title}</h2>
        <div className="contact__body">
          <p>{footer.text}</p>
          <div className="contact__actions">
            <MailButton className="button button--paper magnetic"><Mail size={18} aria-hidden="true" />{footer.email}</MailButton>
            <a className="button button--line magnetic" href={`/api/cv?lang=${locale}`} download><Download size={18} aria-hidden="true" />{hero.secondaryCta}</a>
            <a className="button button--line magnetic" href={personal.github} target="_blank" rel="noreferrer">{footer.github}<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="contact__foot">
          <span>© {new Date().getFullYear()} {personal.firstName} {personal.lastName}</span>
          <RevealEmail label={locale === "fr" ? "Afficher l’e-mail" : "Show e-mail"} />
          <span><Location /> <LocalTime locale={locale} /></span>
          <a href="#hero" className="contact__top"><ArrowUp size={14} aria-hidden="true" />{locale === "fr" ? "Haut de page" : "Back to top"}</a>
        </div>
      </div>
    </footer>
  );
}
