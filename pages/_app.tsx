import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import '../css/styles.scss';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}
