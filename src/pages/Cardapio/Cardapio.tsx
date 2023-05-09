import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Pratos from './Pratos';

export default function Cardapio() {
  const [search, setSearch] = useState<string>('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}> Cardápio </h3>
      <Buscador search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Pratos search={search} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
