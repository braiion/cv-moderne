import { ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Footer({ locale }: { locale: Locale }) {
  const { footer, personal } = cvContent[locale];

  return (
    <footer id="contact" className="px-5 pb-8 sm:px-8">
      <div className="contact-panel mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16">
        <p className="eyebrow footer-eyebrow">{footer.eyebrow}</p>
        <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">{footer.title}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{footer.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a className="button-light" href={`mailto:${personal.email}`}><Mail size={17} />{footer.email}<ArrowUpRight size={15} /></a>
            <a className="button-dark" href={personal.github} target="_blank" rel="noreferrer"><Code2 size={17} />{footer.github}<ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {personal.firstName} {personal.lastName}</span>
          <span className="flex items-center gap-2"><MapPin size={13} />{personal.address}</span>
        </div>
      </div>
    </footer>
  );
}
