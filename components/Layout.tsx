import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
    </Head>
    <header></header>
    {children}
    <footer>Made with ❤ in DC️.</footer>
  </div>
);

export default Layout;
