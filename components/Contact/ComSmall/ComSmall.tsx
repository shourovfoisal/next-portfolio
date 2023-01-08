
import styles from './ComSmall.module.scss'

const ComSmall = ({contact}: any) => {
    
    const { name, value } = contact;
    
    return (
    <div>
        <h3>{ name }</h3>
        <p>{ value }</p>
    </div>
    )
}

export default ComSmall