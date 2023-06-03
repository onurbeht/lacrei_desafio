import Image from 'next/image'

import styles from './pro.module.css'

export default function Pro() {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <h1>Profissional</h1>
                <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
            </div>

            <div className={styles.right}>
                <Image src='/profissional.svg' width={100} height={100} alt='Profissional' loading='lazy' />
            </div>
        </div>
    )
}