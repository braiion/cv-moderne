import { Mail, Phone, MapPin, Heart, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/cv-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 px-6 py-16 dark:border-slate-800">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        {/* CTA */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            Intéressé par mon profil ?
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            N&apos;hésitez pas à me contacter pour échanger sur vos projets.
          </p>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-card flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:text-slate-300"
            aria-label="Email"
          >
            <Mail size={14} className="text-blue-500" />
            {personalInfo.email}
            <ExternalLink size={12} className="text-slate-400" />
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="glass-card flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:text-slate-300"
            aria-label="Téléphone"
          >
            <Phone size={14} className="text-blue-500" />
            {personalInfo.phone}
          </a>
          <span className="glass-card flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-slate-600 dark:text-slate-300">
            <MapPin size={14} className="text-blue-500" />
            {personalInfo.address}
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
          <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
        </div>

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
          © {currentYear} {personalInfo.firstName} {personalInfo.lastName} — Fait avec{" "}
          <Heart size={12} className="animate-pulse text-red-500" /> et Next.js 16
        </p>
      </div>
    </footer>
  );
}
