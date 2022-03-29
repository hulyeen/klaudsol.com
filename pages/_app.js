import '../styles/globals.css';
import "@/public/assets/css/style.css"
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
          {/* Plugin js */}
          {/*<Script src="/assets/js/plugin.js"></Script>*/}
      </>
    )
}

export default MyApp
