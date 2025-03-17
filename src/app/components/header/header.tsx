'use client';
import { usePathname } from "next/navigation";
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/404") return null;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/logo_crmone.png"
            alt="Logo CRM One"
            width={150}
            height={50}
          />
        </div>
        <ul className={styles.navList}>
          <li><a href="/home" className={styles.navItem}>Home</a></li>
          <li><a href="/sobre" className={styles.navItem}>Sobre</a></li>
          <li><a href="/servicos" className={styles.navItem}>Serviços</a></li>
          <li><a href="/contato" className={styles.navItem}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
