import styles from "./Button.module.scss"

const Button = (props) => {
  return (
    <div className={styles.button}>
        <button>Click me</button>
    </div>
  )
}

export default Button