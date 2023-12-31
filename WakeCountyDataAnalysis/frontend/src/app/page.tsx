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

      <div className={styles}>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Data analysis and visualization of
      <span class="text-blue-600 dark:text-blue-500"> Wake County</span> data.</h1>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">The government provides data of restaurants, police, fire department, parks and much more. This website analyzes and displayed that data.</p>
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
{/* <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
  <div className="max-w-prose p-6 rounded-lg bg-gray-900">
    <h1 className="text-8xl font-bold mb-4">Welcome to the Wake County Website</h1>
  
    <p className="text-lg mb-4">
      I'm building a web app to showcase data analysis based on information provided by Wake County.
    </p>

    <p className="text-lg mb-4">
      The analytics is done using Pandas, and the graphs are created with Plotly. The front end is developed using NextJS and React, while the backend APIs are powered by Flask.
    </p>

    <p className="text-lg mb-4">
      Currently, I'm focusing on implementing DevOps principles, including continuous integration/deployment using Docker, GitHub Actions, and AWS.
    </p>

    <p className="text-lg mb-4">
      Check out the Wake County data: [Wake County Open Data](https://data-wake.opendata.arcgis.com/search?tags=restaurants)
    </p>
  </div>
</div> */}