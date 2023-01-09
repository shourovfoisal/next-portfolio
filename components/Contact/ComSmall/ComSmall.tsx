
import styles from './ComSmall.module.scss'

const ComSmall = ({contact}: any) => {
    
    const { name, value, icon, iconColor } = contact;
    
    return (
    <div className={styles.comSmall}>
        <div className={styles.comSmallIcon}>
            { icon }
        </div>
        <div className={styles.comSmallTexts}>
            <h3>{ name }</h3>
            <p>{ value }</p>
        </div>
    </div>
    )
}

export default ComSmall