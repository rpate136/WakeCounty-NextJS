// import "../src/app/globals.css";
// import type { AppProps } from "next/app";
// import { Navbar } from "../components/navbar";


// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Navbar />
//     // <h1>I am return</h1>
//   );
// }
// export default MyApp;

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