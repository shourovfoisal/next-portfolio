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
		if (router.pathname === "/hire-me") setLink(4);
	}, [router.pathname]);

	const activeLinkStyles = {
		color: "#2d3436",
		fontWeight: "600",
		// borderBottom: "4px solid #22b14c",
	};

	return (
		<div className={styles.navContainer}>
			<div className="logo">
				<Link href="/" className={styles.logo}>
					My Portfolio.
				</Link>
			</div>

			<div className={styles.navMenu}>
				<Link href="/" style={link === 1 ? activeLinkStyles : {}}>
					Home
				</Link>
				<Link href="/about" style={link === 2 ? activeLinkStyles : {}}>
					About
				</Link>
				<Link href="/contact" style={link === 3 ? activeLinkStyles : {}}>
					Contact
				</Link>
				{/* <Link
					href="/hire-me"
					style={{ color: "white" }}
					className={styles.heroLink}
				>
					Hire Me
				</Link> */}
			</div>

			<div className={styles.searchBoxContainer}>
				<div className={styles.searchBox}>
					<div className={styles.searchInputContainer}>
						<input type="text" placeholder="Search" />
					</div>
					{/* <div className={styles.searchIconContainer}>
						<IoSearch
							style={{
								cursor: "pointer",
								color: "#22b14c",
								fontSize: "22px",
								fontWeight: "bold",
							}}
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default TopNav;
