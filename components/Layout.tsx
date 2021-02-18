import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="google-site-verification"
        content="sgp30ifTdqrNqKJKuVQgiFBrRZ7XhhrwAJV4kDkaHu8"
      />
      <meta
        name="Description"
        content="Information about the wedding of Elizabeth Cassidy and Keith Kelly."
      />
      <link
        rel="shortcut icon"
        sizes="192x192"
        type="image/png"
        href="/favicon-192x192.png"
      />
      <link
        rel="shortcut icon"
        sizes="512x512"
        type="image/png"
        href="/favicon-512x512.png"
      />
      <link
        rel="preload"
        href="/fonts/lightheartedly/Lightheartedly.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href="/fonts/whitney/whitneybook.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href="/fonts/whitney/whitneylight.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      ></link>
    </Head>
    <header></header>
    {children}
    <footer>
      <Link href="https://github.com/kwkelly/wedding-site">
        <a>Made with ❤ in DC</a>
      </Link>
    </footer>
  </>
);

export default Layout;
