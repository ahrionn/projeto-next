import styles from './page.module.css'

export default function Dashboard() {
    return (
        <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>Sobre Nós</h2>
            <p className={styles.sectionText}>Somos uma empresa comprometida com a inovação e a qualidade, oferecendo soluções tecnológicas de ponta para transformar o seu negócio.</p>
        </section>
    )
}