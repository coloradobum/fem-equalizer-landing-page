import styles from '../styles/Button.module.css'

function Button(props) {
  return (
    <button className={styles[props.type]}>
      <div className={styles.buttonText}>
        <img
          className={styles.ios_image}
          src={props.icon}
        />
        <span>{props.text}</span>
      </div>
    </button>
  )
}

export default Button