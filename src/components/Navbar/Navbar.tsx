import Link from 'next/link'
import styles from './Navbar.module.scss'
import Logo from '@components/icons/Logo'
export default function Navbar() {
  const navigationLinks = [
    {
      label: 'Gifs',
      route: '/gifs',
    },
    {
      label: 'About',
      route: '/about',
    },
  ]
  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__container}>
        <Link href='/'>
          <Logo className={styles.logo} />
        </Link>
        {navigationLinks.map(({ label, route }) => (
          <Link key={route} href={route}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
