import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} className="debug-screens bg-gray-200" />
    <Analytics/>
  </>
}

export default MyApp
