import styles from "./Form.module.scss"

const Form = (props) => {
  return (
    <div className={styles.form}>
        <form>
            <input type="text"/>
            <input type="text"/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form