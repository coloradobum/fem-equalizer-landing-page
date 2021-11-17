import Image from 'next/image'
import LogoImage from '../public/logo.svg'
import styles from '../styles/Logo.module.css'

function Logo() {
  return (
    <div
      className={styles.logo}
    >
      <Image src={LogoImage} />
    </div>
  )
}

export default Logo