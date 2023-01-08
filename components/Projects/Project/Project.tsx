import Image from "next/image";
import styles from "./Project.module.scss";

const Project = ({project}: any) => {
  
  const {name, url, imgUrl} = project;
  
  return (
    <div className={styles.outerBox}>
        <div className={styles.innerBox}>
            <Image fill style={{objectFit: 'cover'}} src={imgUrl} alt={name} />
        </div>
    </div>
  )
}

export default Project