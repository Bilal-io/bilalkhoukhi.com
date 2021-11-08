import { useRouter } from 'next/router'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import DarkToggle from './dark-toggle'

export default function Header() {
  const [menuState, setMenuState] = useState(true)
  const [darkTheme, setDarkTheme] = useState(false)
  const router = useRouter()

  const links = [
    {
      url: '/',
      name: 'Blog'
    },
    {
      url: '/about',
      name: 'About'
    }
  ]

  const toggleDarkMode = () => {
    // Whenever the user explicitly chooses light mode
    if (darkTheme) {
      localStorage.theme = 'light';
      document.querySelector('html').classList.remove('dark');
      setDarkTheme(false);
    } else {
      localStorage.theme = 'dark';
      document.querySelector('html').classList.add('dark');
      setDarkTheme(true);
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.theme = 'dark';
      document.querySelector('html').classList.add('dark');
      setDarkTheme(true);
    }
  }, [])

  return (
    <nav className="flex w-full max-w-none mx-auto items-center justify-between flex-wrap p-6">
      <div className="bg-grey-900 dark:bg-white transition-colors duration-500 hover:bg-red-500 dark:hover:bg-red-500 hover:transition-colors hover:duration-500">
        <Link href="/">
          <a className="text-white dark:text-grey-900 transition-colors duration-500 font-bold no-underline text-xl w-10 h-10 leading-4 flex justify-center items-center tracking-tight">bk</a>
        </Link>
      </div>

      <div className="flex items-center w-auto mt-4 ml-auto text-sm">
        <Link href="/">
          <a className={`block md:inline-block pl-2 md:pl-0 mr-8  ${!router.pathname.includes('/about') ? 'text-red-500 font-bold' : null}`}>
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a className={`block md:inline-block pl-2 md:pl-0 mr-8  ${router.pathname.includes('/about') ? 'text-red-500 font-bold' : null}`}>
            About
          </a>
        </Link>
        
        <DarkToggle darkTheme={darkTheme} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  )
}
