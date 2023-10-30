import { AppProps } from 'next/app'
import '../styles/index.css'
import CookieConsentBanner from '../components/cookie-consent-banner'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsentBanner />
    </>
  )
}
