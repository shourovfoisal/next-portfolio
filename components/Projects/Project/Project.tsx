import Image from "next/image";
import styles from "./Project.module.scss";

const Project = () => {
  return (
    <div className={styles.outerBox}>
        <div className={styles.innerBox}>
            <Image fill style={{objectFit: 'cover'}} src="https://via.placeholder.com/500x500.png" alt="" />
        </div>
    </div>
  )
}

export default Project