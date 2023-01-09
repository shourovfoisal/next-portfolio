
import styles from './Technology.module.scss';
import { IconContext } from "react-icons";

const Technology = ({technology}: any) => {
    
    const { icon, name } = technology;
    
    return (
        <IconContext.Provider value={{ size: "4rem" }}>
            <div className={styles.technology}>
                <div className={styles.technologyIcon}>
                    { icon }
                    <span>{ name }</span>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Technology