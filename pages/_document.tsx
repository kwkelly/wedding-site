import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<{ styleTags: any }> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          <meta charSet="utf-8" />
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
          />
          <link
            rel="preload"
            href="/fonts/whitney/whitneybook.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/whitney/whitneylight.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
