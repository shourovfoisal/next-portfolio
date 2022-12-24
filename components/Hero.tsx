// import Image from "next/image";
// import myImage from "../public/images/myImage.jpg";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.scrollReminder}>
				<div className={styles.scrollDashOne}></div>
				<div className={styles.scrollDashTwo}></div>
				
				<div className={styles.scrollText}>
					Scroll Down
				</div>
			</div>
			<div className={styles.heroTextBox}>
				<h1>
					Shourov <span>Foisal</span>
				</h1>
				<p>Full-Stack Web Developer</p>
				<div className={styles.heroButtons}>
					<Link href="resume">
						<button>View Resume</button>
					</Link>
					<Link href="works">
						<button>Check My Works <span><FaLocationArrow /></span></button>
					</Link>
				</div>
				
				<div className={styles.heroStats}>
					<h2>&#8212; My Recent Stats</h2>
					
					<div className={styles.singleStats}>
						<h3>Projects</h3>
						<p>15+</p>
					</div>
					
					<div className={styles.singleStats}>
						<h3>Large Scale Projects</h3>
						<p>4+</p>
					</div>
					
					<div className={styles.singleStats}>
						<h3>Satisfied Clients</h3>
						<p>9+</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
