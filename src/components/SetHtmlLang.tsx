"use client";

import { useEffect } from "react";

// <html lang> lives in the root layout, shared by both locale trees, so it
// can't vary by locale on the server. Corrected client-side for a11y/SEO.
export function SetHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
