import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero"
import styles from "../styles/Home.module.scss"


export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home</title>
			</Head>
			<div className={styles.background}></div>
			<Hero />
		</div>
	);
}
