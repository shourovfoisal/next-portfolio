import ComSmall from "./ComSmall/ComSmall"
import styles from "./Contact.module.scss"
import { MdEmail as EmailIcon} from "react-icons/md";
import { BsTelephonePlusFill as PhoneIcon} from "react-icons/bs";
import { FaAddressBook as AddressIcon} from "react-icons/fa";
import { useRef, useState } from "react";

const Contact = () => {
    
    const [valid, setValid] = useState(
        {
            name: true,
            email: true,
            subject: true,
            message: true
        }
    );
    
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const subject = useRef<HTMLInputElement>(null);
    const message = useRef<HTMLTextAreaElement>(null);
    
    // const nameMsg = useRef
    
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
    
    const handleSubmit = () => {
        const payload = {
            name: name.current?.value,
            email: email.current?.value,
            subject: subject.current?.value,
            message: message.current?.value,
        }
        
        console.log(payload);
    }
    
    const handleValidation = (input: string) => {
        switch(input) {
            case 'name': {
                if(!name.current?.value) setValid({ ...valid, name: false });
                else setValid({ ...valid, name: true })
            }
            break;
            case 'email': {
                if(!email.current?.value) setValid({ ...valid, email: false });
                else setValid({ ...valid, email: true })
            }
            break;
            case 'subject': {
                if(!subject.current?.value) setValid({ ...valid, subject: false });
                else setValid({ ...valid, subject: true })
            }
            break;
            case 'message': {
                if(!message.current?.value) setValid({ ...valid, message: false });
                else setValid({ ...valid, message: true })
            }
            break;
        }
    }
    
    return (
        <section className={styles.contactBox}>
            <div className={styles.contactInfo}>
                {
                    contactDetails.map((contact, index) => <ComSmall key={index} contact={contact} />)
                }
            </div>
            
            <div className={styles.contactForm}>
                
                <div className={styles.inputGroup}>
                    <div className={styles.inputContainer}>
                        <input onBlur={() => handleValidation('name')} ref={name} type="text" placeholder="Your Name" />
                    </div>
                    <div className={styles.inputContainer}>
                        <input onBlur={() => handleValidation('email')} ref={email} type="text" placeholder="Email Address" />
                    </div>
                </div>
                {
                    !valid.name || !valid.email 
                    ?
                        <div className={styles.validationGroup}>
                            <p>{ !valid.name ? "Name is required!" : null}</p>
                            <p>{ !valid.email ? "Email is required!" : null}</p>
                        </div>
                    :
                    null
                }
                
                <div className={styles.inputContainer}>
                    <input onBlur={() => handleValidation('subject')} ref={subject} type="text" placeholder="Subject" />
                </div>
                {
                    !valid.subject
                    ?
                        <div className={styles.validationGroup}>
                            <p>Subject is required!</p>
                        </div>
                    :
                    null
                }
                
                <div className={`${styles.formMessage} ${styles.inputContainer}`}>
                    <textarea onBlur={() => handleValidation('message')} ref={message} name="contactText" id="contactText" placeholder="Message"></textarea>
                </div>
                {
                    !valid.message
                    ?
                        <div className={styles.validationGroup}>
                            <p>Message is required!</p>
                        </div>
                    :
                    null
                }
                
                {
                    valid.name && valid.email && valid.subject && valid.message && 
                    <button type="button" onClick={handleSubmit}>Submit</button>
                }
            </div>
        </section>
    )
}

export default Contact