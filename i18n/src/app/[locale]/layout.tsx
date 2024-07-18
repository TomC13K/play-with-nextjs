import { notFound } from "next/navigation";
import { ReactNode } from "react";

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
      <body>
        <div className="flex flex-col min-h-screen mac-w-4xl mx-auto">
          <h1>Header</h1>
          <div className="flex-grow mt-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
