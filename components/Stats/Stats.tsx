import styles from "./Stats.module.scss"
import Stat from './Stat/Stat';
import { BsFillHandThumbsUpFill as ThumbsUpIcon } from 'react-icons/bs';
import { FaCoffee as CoffeeIcon } from 'react-icons/fa';
import { BiHappy as HappyIcon } from 'react-icons/bi';
import { BsAwardFill as AwardIcon } from 'react-icons/bs';

const Stats = () => {
    
    const stats = [
        {
            number: 29,
            text: 'Projects Completed',
            icon: <ThumbsUpIcon />,
            iconColor: '#fbc531'
        },
        {
            number: 127,
            text: 'Cups of coffee',
            icon: <CoffeeIcon />,
            iconColor: '#fbc531'
        },
        {
            number: 18,
            text: 'Happy clients',
            icon: <HappyIcon />,
            iconColor: '#fbc531'
        },
        {
            number: 12,
            text: 'Awards won',
            icon: <AwardIcon />,
            iconColor: '#fbc531'
        },
    ]
    
  return (
    <section className={styles.stats}>
        <div className={styles.statsContainer}>
            {
                stats.map((stat, index) => <Stat key={index} stat={stat} />)
            }
        </div>
    </section>
  )
}

export default Stats