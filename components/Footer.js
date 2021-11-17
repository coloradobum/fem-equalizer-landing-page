import styles from '../styles/Footer.module.css'

function Footer(props) {
  return (
    <div className={styles.icons}>
      <img
        src="icon-facebook.svg"
      />
      <img
        className={styles.icon}
        src="icon-instagram.svg"
      />
      <img
        src="icon-twitter.svg"
      />
    </div>
  )
}

export default Footer