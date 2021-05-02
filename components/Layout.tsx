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
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
