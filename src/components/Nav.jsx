'use-client'

import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <motion.header 
        className="max-lg:fixed padding-x py-8 z-10 w-full bg-zinc-900"
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
            src={headerLogo} 
            alt="Logo" 
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="p-1 font-montserrat leading-normal text-lg text-coral-red font-normal transition ease-in-out delay-80 hover:text-orange-300 hover:border-b hover:border-orange-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt='Menu mobile'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </motion.header>
  )
}

export default Nav