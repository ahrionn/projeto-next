import styles from './page.module.css'

export default function Servicos() {
  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
      <div className={styles.services}>
        <div className={styles.serviceItem}>
          <h3 className={styles.serviceTitle}>Consultoria</h3>
          <p className={styles.serviceText}>Ajudamos a sua empresa a encontrar a melhor estratégia para crescimento sustentável.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3 className={styles.serviceTitle}>Desenvolvimento Web</h3>
          <p className={styles.serviceText}>Criamos websites modernos, rápidos e responsivos que encantam os usuários.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3 className={styles.serviceTitle}>Marketing Digital</h3>
          <p className={styles.serviceText}>Aumente a visibilidade da sua marca com estratégias eficazes de marketing online.</p>
        </div>
      </div>
    </section>
  )
}