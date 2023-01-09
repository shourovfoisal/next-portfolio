import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero"
import Projects from "../components/Projects/Projects";
import Stats from "../components/Stats/Stats";
import Technologies from "../components/Technologies/Technologies";
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
			<Stats />
			<Projects />
			<Technologies />
			<Contact />
		</div>
	);
}
