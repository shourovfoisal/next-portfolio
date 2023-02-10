import Head from "next/head";
import About from "../components/About/About";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero"
import Projects from "../components/Projects/Projects";
import Stats from "../components/Stats/Stats";
import Technologies from "../components/Technologies/Technologies";
import styles from "../styles/Home.module.scss"
import ScrollNav from "../components/ScrollNav/ScrollNav";


export default function Home() {
	return (
		<div className="wrapper">
			{/* <ScrollNav /> */}
			<div>
				<Head>
					<title>Home</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
			</div>
			<Hero />
			<div className="container">
				<About />
				<Stats />
				<Projects />
			</div>
			<Technologies />
			<div className="container">
				<BlogPosts />
				<Contact />
			</div>
		</div>
	);
}
