import 'bootstrap-icons/font/bootstrap-icons.css'

import styles from './footer.module.css'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <ul className={styles.options}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/usuario'}>Pessoa Usuária</Link></li>
                <li><Link href={'/profissional'}>Profissional</Link></li>
            </ul>
            <div className={styles.icons}>
                <i class="bi-facebook" />
                <i class="bi-instagram" />
                <i class="bi-linkedin" />
            </div>
        </footer>
    )
}