import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className='bg-black m-20 rounded-full shadow-2xl hover:shadow-red-500'>
    <main className={styles.main}>


      <div>
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Data analysis and visualization of
      <span className="text-blue-600 dark:text-blue-500 hover:bg-gradient-to-b from-sky-600 to-pink-500 bg-clip-text text-transparent"> Wake County</span> data.</h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">The government provides data of restaurants, police, fire department, parks and much more. This website analyzes and displayed that data.</p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://data-wake.opendata.arcgis.com/search?tags=restaurants"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Wake County Data<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Link the the data available on wake county government website
          </p>
        </a>
      </div>    

      <div className={styles.description}>
        <p>
          by&nbsp;
          <code className={styles.code}>Rishi Patel</code>
        </p>
      </div>
    </main>
    </div>   
  )
}