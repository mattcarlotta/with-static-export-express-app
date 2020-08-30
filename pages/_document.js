import Document, { Html, Head, Main, NextScript } from "next/document";
import { version } from "../package.json";

class CustomDocument extends Document {
  static getInitialProps = async (ctx) => ({
    ...(await Document.getInitialProps(ctx)),
  });

  render = () => (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="build version" content={version} />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo_192x192.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
