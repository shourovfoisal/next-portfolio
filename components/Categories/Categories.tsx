import { useState } from "react";
import styles from "./Categories.module.scss";
import Category from "./Category/Category";

const Categories = () => {
    
    const [activeCategory, setActiveCategory] = useState(1);
    let itemStyle = `${styles.categoryItem}`;
    
    const categories = [
        {
            id: 1,
            name: 'Fun Projects'
        },
        {
            id: 2,
            name: 'Ecommerce'
        },
        {
            id: 3,
            name: 'ERP'
        },
        {
            id: 4,
            name: 'POS'
        },
        {
            id: 5,
            name: 'Business'
        },
        {
            id: 6,
            name: 'Game'
        },
    ]
    
    return (
        <div className={styles.categories}>
            <ul className={styles.categoryList}>
                {
                    categories.map(({id, name}, index) => {
                        return <Category key={index} id={id} name={name} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
                    })
                }
            </ul>
        </div>
    )
}

export default Categories