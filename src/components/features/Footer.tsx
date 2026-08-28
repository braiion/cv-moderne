import { ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Footer({ locale }: { locale: Locale }) {
  const { footer, personal } = cvContent[locale];

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-panel">
        <div className="contact-panel__copy">
          <h2>{footer.title}</h2>
          <span>{footer.text}</span>
        </div>
        <div className="contact-panel__actions">
          <a className="button-light" href={`mailto:${personal.email}`}><Mail size={17} />{footer.email}<ArrowUpRight size={15} /></a>
          <a className="button-dark" href={personal.github} target="_blank" rel="noreferrer"><Code2 size={17} />{footer.github}<ArrowUpRight size={15} /></a>
        </div>
        <div className="contact-panel__foot">
          <span>© 2026 {personal.firstName} {personal.lastName}</span>
          <span><MapPin size={13} />{personal.address}</span>
        </div>
      </div>
    </footer>
  );
}
