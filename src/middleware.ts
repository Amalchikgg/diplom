import createMiddleware from "next-intl/middleware";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ru"] as const;
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",
};

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",
  localeDetection: true,
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en)/:path*"],
};

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});
