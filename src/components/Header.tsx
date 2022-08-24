import styles from './Header.module.css';

import toDoListLogo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img 
        className={styles.logo} 
        src={toDoListLogo} 
        alt="Logotipo toDo List" 
      />
    </header>
  );
}