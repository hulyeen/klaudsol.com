import '../styles/globals.css';
import "@/public/assets/css/style.css"
import Script from 'next/script';
import $ from "jquery";
import runLegacyScripts from '@/components/legacy';
import { useEffect }  from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    runLegacyScripts($);
  }, []);
  return (
      <>
        <Component {...pageProps} />
          {/* Plugin js */}
          {/*<Script src="/assets/js/plugin.js"></Script>*/}
      </>
    )
}

export default MyApp
