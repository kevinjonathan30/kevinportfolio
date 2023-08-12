import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';
import AppContext from '../context/AppContext';
import Head from "next/head";
import NProgress from "nprogress";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const modeMe = (e) => {
    setDarkMode(!!e.matches);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(matchMedia.matches);
    matchMedia.addEventListener("change", modeMe);
    return () => matchMedia.removeEventListener("change", modeMe);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
    NProgress.configure({showSpinner:false})
  }, []);

  return (
    <>
      <Head>
        <title>Kevin Jonathan | Software Engineer</title>
        <meta name="description" content="My name is Kevin Jonathan, a highly motivated mobile development engineer specializing in iOS app development and Flutter. I hold a degree from Petra Christian University and have completed the prestigious Apple Developer Academy program." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, archive" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      </Head>
      <AnimatePresence mode="wait">
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
          <Component {...pageProps} />
          <Analytics />
        </AppContext.Provider>
      </AnimatePresence>
    </>
  );
}
