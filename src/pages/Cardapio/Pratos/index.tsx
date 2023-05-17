import Item from './Item';
import cardapio from 'data/cardapio.json';
import styles from './Pratos.module.scss';
import { useState, useEffect } from 'react';
import { Cardapio } from 'types/pratos';

interface Props {
  search: string;
  filtro: number | null;
  ordenador: string;
}

export default function Pratos({ search, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(cardapio);

  const testeBusca = (nomeItem: string) => {
    const reg = new RegExp(search, 'i');
    return reg.test(nomeItem);
  };

  const testeFiltro = (id: number) => {
    if (filtro !== null) {
      return filtro === id;
    }
    return true;
  };

  function ordenaCrescente(
    lista: Cardapio,
    criterio: 'size' | 'serving' | 'price'
  ) {
    return lista.sort((a, b) => (a[criterio] > b[criterio] ? 1 : -1));
  }

  const ordenar = (lista: Cardapio) => {
    switch (ordenador) {
      case 'qtd_pessoas':
        return ordenaCrescente(lista, 'serving');
      case 'preco':
        return ordenaCrescente(lista, 'price');
      case 'porcao':
        return ordenaCrescente(lista, 'size');
      default:
        return lista;
    }
  };

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testeBusca(item.title) && testeFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [search, filtro, ordenador]);

  return (
    <div className={styles.pratos}>
      {lista.map((prato) => {
        return <Item key={prato.id} {...prato}></Item>;
      })}
    </div>
  );
}
