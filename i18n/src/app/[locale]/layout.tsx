import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { LayoutProps } from '../../../.next/types/app/[locale]/page';

// Can be imported from a shared config
const locales = ["en", "sk"];

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params: { locale } }:Readonly<LayoutProps>) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
