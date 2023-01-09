
import styles from './Technologies.module.scss';
import { FaReact as ReactIcon } from 'react-icons/fa';
import { FaAngular as AngularIcon } from 'react-icons/fa';
import { FaNodeJs as NodeJSIcon } from 'react-icons/fa';
import { SiSpringboot as SpringBootIcon } from 'react-icons/si';
import { SiMongodb as MongoDBIcon } from 'react-icons/si';
import { SiStrapi as StrapiIcon } from 'react-icons/si';
import { SiStripe as StripeIcon } from 'react-icons/si';
import { GrMysql as MySQLIcon } from 'react-icons/gr';
import Technology from './Technology/Technology';

const Technologies = () => {
    
    const technologies = [
        { icon: <ReactIcon />, name: 'React' },
        { icon: <AngularIcon />, name: 'Angular' },
        { icon: <NodeJSIcon />, name: 'Node.js' },
        { icon: <SpringBootIcon />, name: 'Spring Boot' },
        { icon: <MongoDBIcon />, name: 'MongoDB' },
        { icon: <MySQLIcon />, name: 'MySQL' },
        // { icon: <StrapiIcon />, name: 'Strapi CMS' },
        // { icon: <StripeIcon />, name: 'Stripe Payment' },
    ]
    
    return (
        <section className={styles.technologies}>
            <div className={styles.technologiesContainer}>
                {
                    technologies.map((technology, index) => <Technology key={index} technology={technology} />)
                }
            </div>
        </section>
    )
}

export default Technologies