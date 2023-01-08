import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Hero from "../components/Hero"
import Projects from "../components/Projects/Projects";
import styles from "../styles/Home.module.scss"


export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home</title>
			</Head>
			<div className={styles.background}></div>
			<Hero />
			<About />
			<Projects />
		</div>
	);
}
