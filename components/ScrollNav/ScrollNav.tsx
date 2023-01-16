
import styles from "./ScrollNav.module.scss";

const ScrollNav = () => {
  return (
    <div className={styles.scrollReminder}>
        <div className={styles.scrollDashOne}></div>
        <div className={styles.scrollDashTwo}></div>
        
        <div className={styles.scrollText}>
            Scroll Down
        </div>
    </div>
  )
}

export default ScrollNav