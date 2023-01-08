import styles from "./Category.module.scss";

const Category = ({id, name, handleCategoryChange, activeCategory}: any) => {
  return (
    <li onClick={() => handleCategoryChange(id)} 
    className={`${styles.categoryItem} ${activeCategory === id ? styles.itemActive : null}`}>
        {name}
    </li>
  )
}

export default Category