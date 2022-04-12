import '../styles/globals.css';
import "@/public/assets/css/style.css"

//for google analytics imports
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
      <>
       
        <Component {...pageProps} />
          {/* Plugin js */}
          {/*<Script src="/assets/js/plugin.js"></Script>*/}
      </>
    )
}

export default MyApp
