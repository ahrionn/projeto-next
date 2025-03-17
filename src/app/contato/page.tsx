import styles from './page.module.css'

export default function Contatos() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Entre em Contato</h2>
                <form className={styles.form}>
                    <div>
                        <label className={styles.label}>Nome</label>
                        <input type="text" className={styles.input} placeholder="Seu nome" />
                    </div>
                    <div>
                        <label className={styles.label}>E-mail</label>
                        <input type="email" className={styles.input} placeholder="seu@email.com" />
                    </div>
                    <div>
                        <label className={styles.label}>Mensagem</label>
                        <textarea className={styles.textarea} rows={4} placeholder="Sua mensagem"></textarea>
                    </div>
                    <button className={styles.button}>Enviar</button>
                </form>
            </div>
        </div>
    )
}