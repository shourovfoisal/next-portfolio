// import Image from "next/image";
// import myImage from "../public/images/myImage.jpg";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { FaLocationArrow as LocationIcon } from "react-icons/fa";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { FaLinkedinIn as LinkedinIcon } from "react-icons/fa";
import { ImSkype as SkypeIcon } from "react-icons/im";
// import { FaSkype as SkypeIcon } from "react-icons/fa";
import { SiGmail as GmailIcon } from "react-icons/si";

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
						<button>Check My Works <span><LocationIcon /></span></button>
					</Link>
				</div>
				
				{/* <div className={styles.heroStats}>
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
				</div> */}
				
				<div className={styles.socialIcons}>
					
					<div className={styles.horizontalLine}></div>
					
					<a href="https://www.facebook.com/shourovfoisal123">
						<FacebookIcon />
					</a>
					
					<a href="https://www.twitter.com/shourovfoisal">
						<TwitterIcon />
					</a>
					
					<a href="https://join.skype.com/invite/mgAvEbbmh4j9">
						<SkypeIcon />
					</a>
					
					<a href="https://www.linkedin.com/in/shourovfoisal/">
						<LinkedinIcon />
					</a>
					
					<a href="mailto:shourovfoisal@gmail.com">
						<GmailIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
