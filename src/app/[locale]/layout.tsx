import { locales } from "@/middleware";
import "./globals.css";
import { notFound } from "next/navigation";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import LocalFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/ThemeProvider";
import { headers } from "next/dist/client/components/headers";
import MobileLayout from "@/components/MobileLayout";
import ChildrensLayout from "@/components/ChildrensLayout";
import Providers from "@/utils/provider";

const jost = LocalFont({
  src: [
    { path: "../../../public/assets/fonts/Jost-Regular.ttf", weight: "400" },
    { path: "../../../public/assets/fonts/Jost-Medium.ttf", weight: "500" },
    { path: "../../../public/assets/fonts/Jost-SemiBold.ttf", weight: "600" },
    { path: "../../../public/assets/fonts/Jost-Bold.ttf", weight: "700" },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: (typeof locales)[0] };
}) {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";

  const t = useTranslations("Index");
  const messages = useMessages();
  if (!locales.includes(locale)) {
    return notFound();
  }
  console.log("pathname");
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={jost.className}>
          <Providers>
            <ThemeProvider>
              <Header />
              <MobileLayout />
              <ChildrensLayout>{children}</ChildrensLayout>
              <Footer />
            </ThemeProvider>
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
