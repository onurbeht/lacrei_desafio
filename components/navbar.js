import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar () {
    return(
        <nav className={styles.container}>
            <h1><Link href={'/'}>Lacrei</Link></h1>
            <ul className={styles.options}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/usuario'}>Pessoa Usuária</Link></li>
                <li><Link href={'/profissional'}>Profissional</Link></li>
            </ul>
        </nav>
    )
}