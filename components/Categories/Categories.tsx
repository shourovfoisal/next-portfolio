import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.categories}>
        <ul className={styles.categoryList}>
        <li className={`${styles.categoryItem} ${styles.itemActive}`}>Fun Projects</li>
        <li className={`${styles.categoryItem}`}>Ecommerce</li>
        <li className={`${styles.categoryItem}`}>ERP</li>
        <li className={`${styles.categoryItem}`}>POS</li>
        <li className={`${styles.categoryItem}`}>Business</li>
        <li className={`${styles.categoryItem}`}>Game</li>
        </ul>
    </div>
  )
}

export default Categories