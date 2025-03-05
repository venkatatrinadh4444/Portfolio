import styles from './home.module.css'
import home from '../../assets/home.png'

const Home=()=> {
    return (
        <div className={`d-flex align-items-center flex-sm-row flex-column-reverse p-sm-4 ${styles.container}` }>
            <div className="p-3">
            <h2>Hi,I'm Venkata Trinadh</h2>
            <p>I'm a front end developer and I entusiast to full-stack development and I have good in front end part and looking forward to learn backend development.</p>
            </div>
            <div className={styles.imageAnimation}>
                <img src={home} alt="profileImg" width="100%"/>
            </div>
        </div>
    )
}
export default Home