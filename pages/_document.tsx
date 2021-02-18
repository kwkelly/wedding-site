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
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
