import { Navbar } from '../components/navbar'
import type { AppProps } from "next/app";
import '../src/app/globals.css'
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
 
export default MyApp