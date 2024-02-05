import styles from './styles/Loader.module.css'

export default function Loader() {
    return (
        <div className={styles.backdrop}>
            <span className={styles.loader}></span>
        </div>
    )
}