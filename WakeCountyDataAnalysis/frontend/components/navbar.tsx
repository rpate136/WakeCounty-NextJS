import Link from "next/link"
import Image from "next/image"
import Script from 'next/script'


export const Navbar = () => {

    const text_style = "flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    
    return (
        
        <div className = 'NavBar'>        

            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image src="/WClogo.png" className="h-12 mr-3" alt="Wakecounty Logo" width={50} height={100}/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wake County</span>
                </Link>

                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <li>
                        <button data-collapse-toggle="navbar-dropdown" type="button" className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'>
                            Restaurants
                        <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                        </button>
                        
                        <div id="dropdownNavbar" className="hidden z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <Link href="/restaurants/OneRestaurantAnalysis" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Look Up Resturants </Link>
                            </li>
                            <li>
                                <Link href="/restaurants/AllRestaurantAnalysis" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Resturant Analysis </Link>
                            </li>
                            <li>
                                <Link href="/restaurants/OverallAnalysis" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inspection Analysis </Link>
                            </li>
                            </ul>
                        </div>
                
                    </li>
                    <li>
                    <Link href="/police" className={text_style}>Police</Link>
                    </li>
                    <li>
                    <Link href="/demographics" className={text_style}>Demographics</Link>
                    </li>
                </ul>
                </div>
                <Script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></Script>
            </div>
            </nav>
        </div>

    )
  }