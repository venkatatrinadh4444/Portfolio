import styles from './home.module.css'


const Home=()=> {
    return (
        <div className={`d-flex align-items-center flex-sm-row flex-column-reverse p-sm-4 ${styles.container}` }>
            <div className="p-3">
            <h2>Hi,I'm Venkata Trinadh</h2>
            <p>I'm a front end developer and I entusiast to full-stack development and I have good in front end part and looking forward to learn backend development.</p>
            </div>
            <div className={styles.imageAnimation}>
                <img src="https://s3-alpha-sig.figma.com/img/5da5/c27f/1f6af27cc37b1caa33eeff32059d8d96?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l5Sz4hcKPeSI9V~bbav2RWcZVzHparRJWr-8THVKtcBzdNT28f8Zb8TPNUKGBLKSgCu9y9gItGRH9fJRGt~3bzlzJm-ZUnTHe37R8xsl5EZt~hRm1uK4sBUAdhwo0CuXQJrX1ZuYsOSuvsF7WQMaICi4uN6yF59obEz-2yJKl6Ol3ielPgU2ePghhmZj8~~ijnG5hOfXo5HMcrAgqZUe~YNKwQqr9rRReSW52EA9bNWH1MJjRrLS~V2uh3N8EAuTfJSYTjgaDhQM0TlOrx4y4uofGr9zKYgKuoTFD~4CnRouqzQ6GCAYjtwdSvhbLN7mMqT2w1WfUXU2kimHMzPieA__" alt="profileImg" width="100%"/>
            </div>
        </div>
    )
}
export default Home