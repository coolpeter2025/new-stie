import { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getDictionary } from "@/lib/i18n";
import { LANGUAGES, Language, isLanguage } from "@/lib/languages";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const dictionary = getDictionary(lang);

  return (
    <div data-lang={lang} className="min-h-screen bg-cream text-coffee">
      <Header lang={lang} dictionary={dictionary} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-12 sm:px-6">
        {children}
      </main>
      <Footer lang={lang} dictionary={dictionary} />
    </div>
  );
}
