import Image from "next/image";
import myImage from "../public/images/myImage.jpg";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroImageBoxContainer}>
				<div className={styles.heroImageContainer}>
					<Image
						src={myImage}
						alt=""
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
