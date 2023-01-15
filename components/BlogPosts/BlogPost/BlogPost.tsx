import Image from "next/image";
import styles from "./BlogPost.module.scss";

const BlogPost = ({post}: any) => {
  
  const {name, url, imgUrl} = post;
  
  return (
    <div className={styles.outerBox}>
        <div className={styles.innerBox}>
            <Image fill style={{objectFit: 'cover'}} src={imgUrl} alt={name} />
        </div>
    </div>
  )
}

export default BlogPost