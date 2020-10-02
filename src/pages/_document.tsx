import { ColorModeScript } from '@chakra-ui/core';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { GA_TRACKING_ID } from 'src/lib/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
            rel="stylesheet"
          />{' '}
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
              `,
            }}
          />
        </Head>

        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
