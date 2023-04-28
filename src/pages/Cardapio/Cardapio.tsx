import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Pratos from "./Pratos";

export default function Cardapio() {
  const [search, setSearch] = useState<string>("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}> Mama Minha Massa </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}> Cardápio </h3>
        <Buscador search={search} setSearch={setSearch} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Pratos search={search} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
