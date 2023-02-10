import styles from "./Sidebar.module.scss";
import {GiHamburgerMenu as HamburgerIcon} from 'react-icons/gi';
import {BsFillSunFill as SunIcon} from 'react-icons/bs';
import {BsMoonStarsFill as MoonIcon} from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarIcon}>
            <div>
                <HamburgerIcon />
            </div>
        </div>
        
        <div className={styles.sidebarIcon}>
            <div>
                <SunIcon />
            </div>
        </div>
    </div>
  )
}

export default Sidebar