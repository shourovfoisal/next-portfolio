import Image from "next/image";
import myImage from "../../public/images/myImage_old.jpg";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.box}>
        <div className={styles.grid}>
            <div className={styles.image}>
                <Image fill style={{objectFit: 'cover'}} src={myImage} alt="Shourov Foisal" />
            </div>
            <div className={styles.about}>
                <span className="badge">About</span>
                <h2 className={styles.title}>Full-Stack web developer from Dhaka, Bangladesh.</h2>
                <p className={styles.content}>
                    I started my journey as a Computer Science and Engineering student back in 2014. Since 2017, I got deeply involved in Web Development. During my 5 years of learning journey, I learned about numerous web languages and frameworks. Of them, I love the Javascript based frameworks the most.
                </p>
                <p className={styles.content}>
                    I can build complex JS applications with React and Angular. I can also develop backends with Node.js. For databases, I use both SQL and NoSQL.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About