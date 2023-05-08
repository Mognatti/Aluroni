import filtros from './filtros.json';
import styles from './filtros.module.scss';
import classNames from 'classnames';

type Iopcao = (typeof filtros)[0];

interface FiltroProps {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: FiltroProps) {
  const selecionarFiltro = (opcao: Iopcao) => {
    filtro === opcao.id ? setFiltro(null) : setFiltro(opcao.id);
  };

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id,
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
