import styles from './index.module.scss';

const Alert = () => {
    return(
        <div className={styles.Text}>Title must be shorter than or equal to 100 characters.</div>
    )
}

export default Alert