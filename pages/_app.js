import '../styles/globals.css';
import "@/public/assets/css/style.css"
import Script from 'next/script';
import $ from "jquery";
import { useEffect }  from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);
  return (
      <>
        <Component {...pageProps} />
          {/* Latest jQuery */}
          {/*<Script src="/assets/js/jquery.min.js" strategy="beforeInteractive"></Script>*/}
          {/* Plugin js */}
          {/*<Script src="/assets/js/plugin.js"></Script>*/}
          {/*<Script src="/assets/js/jquery.mixitup.js"></Script>*/}
          {/* GOOGLE MAP JS */}
          {/*<Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIvoZGVhG5uh6ZkXGFPrYLrJ939mfbX2Q"></Script>*/}
          {/* Main js*/}
          {/*<Script src="/assets/js/main_script.js" strategy="lazyOnload"></Script>*/}
      </>
    )
}

export default MyApp
