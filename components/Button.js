import styles from '../styles/Button.module.css'

function Button(props) {
  //  write two functions that hold all properties for ios and android
  //  and then do a switch based on x
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