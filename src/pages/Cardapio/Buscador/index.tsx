import React from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface BuscaProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ search, setSearch }: BuscaProps) {
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar..."
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
