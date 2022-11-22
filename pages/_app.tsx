import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { App } from 'konsta/react'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window?.Telegram.WebApp.ready()
    window?.Telegram.WebApp.expand()
  }, [])
  return (
    <App theme='material' safeAreas dark>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
