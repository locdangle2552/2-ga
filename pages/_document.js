import { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEZBFHSH38"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
