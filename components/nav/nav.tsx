"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  // Updated link logic: No purple, just high-contrast white and soft gray
  const linkClasses = (path: string) =>
    `text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
      pathname === path
        ? 'text-white'
        : 'text-white/40 hover:text-white'
    }`

  return (
    // Added fixed positioning and backdrop-blur to see the grid underneath
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-8 py-6">
        {/* Name/Logo - Thinned out for a more premium look */}
        <Link href="/" className="group">
          <span className="text-xl font-bold tracking-tighter text-white">
            Leonardo <span className="text-white/40 group-hover:text-white transition-colors">Lujan</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-12">
            <li>
              <Link href="/pages/home" className={linkClasses('/pages/home')}>Home</Link>
            </li>
            <li>
              <Link href="/pages/about" className={linkClasses('/pages/about')}>About</Link>
            </li>
            <li>
              <Link href="/pages/my_resumes" className={linkClasses('/pages/my_resumes')}>Resume</Link>
            </li>
            {/* CTA Button in Nav - Optional but looks great */}
            <li>
              <Link 
                href="#contact" 
                className="px-5 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all"
              >
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}