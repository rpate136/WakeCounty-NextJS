import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          Welcome&nbsp;
          <code className={styles.code}>to NextJS</code>
        </p>
      </div>

      <div>
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Data analysis and visualization of
      <span className="text-blue-600 dark:text-blue-500"> Wake County</span> data.</h1>
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

    </main>
  )
}