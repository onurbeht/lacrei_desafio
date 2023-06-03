import Image from 'next/image'

import styles from './user.module.css'

export default function User () {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <h1>Pessoa Usuária</h1>
                <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
            </div>

            <div className={styles.right}>
                <Image src='/pessoaUsuariaImg.svg' width={100} height={100} alt='Pessoa Usuária' loading='lazy' />
            </div>
        </div>
    )
}