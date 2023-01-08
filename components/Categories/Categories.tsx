import { useState } from "react";
import styles from "./Categories.module.scss";
import Category from "./Category/Category";

const Categories = ({filterProjects}: any) => {
    
    const [activeCategory, setActiveCategory] = useState(0);
    
    const categories = [
        {
            id: 0,
            name: 'All'
        },
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
    
    const handleCategoryChange = (id: any) => {
        setActiveCategory(id);
        filterProjects(id);
    }
    
    return (
        <div className={styles.categories}>
            <ul className={styles.categoryList}>
                {
                    categories.map(({id, name}, index) => {
                        return <Category key={index} id={id} name={name} handleCategoryChange={handleCategoryChange} activeCategory={activeCategory}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Categories