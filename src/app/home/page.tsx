import styles from './page.module.css'

export default function Home() {
    return(
        <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Transforme Seu Mundo com Inovação</h1>
          <p className={styles.heroText}>Explore soluções criativas para o seu futuro agora!</p>
          <a href="/servicos" className={styles.ctaBtn}>Saiba Mais</a>
        </div>
      </section>
    )
}