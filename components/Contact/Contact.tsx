import ComSmall from "./ComSmall/ComSmall"
import styles from "./Contact.module.scss"
import { MdEmail as EmailIcon} from "react-icons/md";
import { BsTelephonePlusFill as PhoneIcon} from "react-icons/bs";
import { FaAddressBook as AddressIcon} from "react-icons/fa";

const Contact = () => {
    
    const contactDetails = [
        {
            name: 'Phone',
            value: '+8801760646412',
            icon: <PhoneIcon />,
            iconColor: '#fbc531'
        },
        {
            name: 'Email',
            value: 'shourovfoisal@gmail.com',
            icon: <EmailIcon />,
            iconColor: '#fbc531'
        },
        {
            name: 'Address',
            value: 'Mirpur, Dhaka, Bangladesh.',
            icon: <AddressIcon />,
            iconColor: '#fbc531'
        },
    ]
    
    return (
        <section className={styles.contactBox}>
            <div className={styles.contactInfo}>
                {
                    contactDetails.map((contact, index) => <ComSmall key={index} contact={contact} />)
                }
            </div>
            
            <div className={styles.contactForm}>
                <div>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Email Address" />
                </div>
                <div>
                    <input type="text" placeholder="Subject" />
                </div>
                <div>
                    <textarea name="contactText" id="contactText" cols={30} rows={10} placeholder="Message"></textarea>
                </div>
            </div>
        </section>
    )
}

export default Contact