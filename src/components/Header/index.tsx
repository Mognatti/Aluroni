import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import stylesTema from 'styles/Tema.module.scss';
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}> Autêntica Massa Italiana </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}
