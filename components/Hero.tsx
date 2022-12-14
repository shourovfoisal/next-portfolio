// import Image from "next/image";
// import myImage from "../public/images/myImage.jpg";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			{/* <div className={styles.heroImageAndText}> */}
				<div className={styles.heroTextBox}>
					<h1>
						Shourov <span>Foisal</span>
					</h1>
					<p>Full-Stack Web Developer</p>
					<div className={styles.heroButtons}>
						<button>View Resume</button>
						<button>Check My Works</button>
					</div>
				</div>
				{/* <div className={styles.heroImageBoxContainer}>
					<div className={styles.heroImageContainer}>
						<Image src={myImage} alt="" priority />
					</div>
				</div> */}
			{/* </div> */}
			<div></div>
		</div>
	);
};

export default Hero;
