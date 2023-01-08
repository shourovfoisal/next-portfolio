import styles from "./Stat.module.scss"
import { IconContext } from "react-icons";

const Stat = ({stat}) => {
    
    const {number, text, icon, iconColor} = stat;
    
    return (
        <IconContext.Provider value={{ color: iconColor }}>
            <div className={styles.statBox}>
                { icon }
                <h3>{ number }</h3>
                <p>{ text }</p>
            </div>
        </IconContext.Provider>
    )
}

export default Stat