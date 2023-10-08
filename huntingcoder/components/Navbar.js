import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/Blog"><li>Blog</li></Link>
          <Link href="/Contact"><li>Contact</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar