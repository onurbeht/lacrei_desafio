import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className={styles.actions}>
          <div className={styles.user}><Link href={'/usuario'}>Pessoa Usuária</Link></div>
          <div className={styles.pro}><Link href={'/profissional'}>Profissional</Link></div>
        </div>
      </div>

      <div className={styles.right}>
        <Image src='/home.svg' width={100} height={100} alt='Home' loading='lazy' />
      </div>
    </main>
  )
}
