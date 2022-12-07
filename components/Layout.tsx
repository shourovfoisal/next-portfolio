import Head from "next/head";
import React from "react";
import Hero from "./Hero";
import TopNav from "./TopNav";

const Layout = ({ children }: any) => {
	return (
		<>
			<Head>
				<meta name="description" content="Shourov Foisal Portfolio Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopNav />
			<div className="container">
				<Hero />
				{children}
			</div>
		</>
	);
};

export default Layout;
