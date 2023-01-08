import styles from "./Category.module.scss";

const Category = ({id, name, setActiveCategory, activeCategory}: any) => {
  return (
    <li onClick={() => setActiveCategory(id)} 
    className={`${styles.categoryItem} ${activeCategory === id ? styles.itemActive : null}`}>
        {name}
    </li>
  )
}

export default Category