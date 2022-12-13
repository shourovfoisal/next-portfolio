import Head from "next/head";
import React from "react";
import TopNav from "./TopNav";
import styles from "./Layout.module.css";

const Layout = ({ children }: any) => {
	return (
		<>
			<Head>
				<meta name="description" content="Shourov Foisal Portfolio Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopNav />
			{children}
		</>
	);
};

export default Layout;
