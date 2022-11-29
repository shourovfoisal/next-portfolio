import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import styles from "./TopNav.module.scss";

const TopNav = () => {
	return (
		<div className={styles.navContainer}>
			<div className="logo">
				<Link href="/">
					<Image
						src={logo}
						height={80}
						alt=""
					/>
				</Link>
			</div>
			<div className={styles.navMenu}>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className={styles.searchBox}>
				<input
					type="text"
					placeholder="Search something."
				/>
			</div>
		</div>
	);
};

export default TopNav;
