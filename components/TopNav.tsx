import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../public/logo-original.png";
import styles from "./TopNav.module.scss";
import { IoSearch } from "react-icons/io5";

const TopNav = () => {
	const [link, setLink] = useState(0);

	const router = useRouter();

	useEffect(() => {
		if (router.pathname === "/") setLink(1);
		if (router.pathname === "/about") setLink(2);
		if (router.pathname === "/contact") setLink(3);
	}, [router.pathname]);

	const activeLinkStyles = {
		color: "#22b14c",
		borderBottom: "2px solid #22b14c",
	};

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
				<Link
					href="/"
					style={link === 1 ? activeLinkStyles : {}}
				>
					Home
				</Link>
				<Link
					href="/about"
					style={link === 2 ? activeLinkStyles : {}}
				>
					About
				</Link>
				<Link
					href="/contact"
					style={link === 3 ? activeLinkStyles : {}}
				>
					Contact
				</Link>
			</div>

			<div className={styles.searchBox}>
				<input
					type="text"
					placeholder="Search"
				/>
				<IoSearch
					style={{ cursor: "pointer", color: "#22b14c", fontSize: "22px" }}
				/>
			</div>
		</div>
	);
};

export default TopNav;
