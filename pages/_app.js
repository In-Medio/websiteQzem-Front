import '../public/css/bootstrap.min.css';
import '../public/css/fontawesome.min.css';
import '../public/css/animate.min.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import '../public/css/rtl.css';

import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props;

        return (
            <>
              <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Qzem - Payroll Processing</title>
                <meta name="description" content="Payroll processing met oog voor kwaliteit. Loonadministratie op maat voor uw bedrijf." />
              </Head>

              <Component {...pageProps} />
            </>
        );
    }
}