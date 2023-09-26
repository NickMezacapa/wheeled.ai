import Link from 'next/link'
import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav>
      <ul className="flex flex-col items-center gap-x-4 sm:flex-row">
        {[
          ['About', '/about'],
          ['Services', '/services'],
          ['Platforms', '/platforms'],
          ['FAQs', '/faqs'],
        ].map(([label, href], index) => (
          <li key={label} className="px-2">
            <Link
              href={`${href}`}
              className="NavLink relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-blue-300 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={label}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-gray-100 px-4"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                    aria-hidden="true"
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
