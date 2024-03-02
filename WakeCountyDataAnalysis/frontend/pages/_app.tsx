import { Navbar } from '../components/navbar'
import type { AppProps } from "next/app";
import '../src/app/globals.css'
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=''>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
 
export default MyApp