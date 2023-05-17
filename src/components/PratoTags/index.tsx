import { Prato } from 'types/pratos';
import styles from './styles.module.scss';
import classNames from 'classnames';

export default function PratoTags(prato: Prato) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true,
        })}
      >
        {prato.category.label}
      </div>
      <div className={styles.tags__porcao}>{prato.size}g</div>
      <div className={styles.tags__qtdpessoas}>
        Serve {prato.serving} pessoa{prato.serving == 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>R$ {prato.price.toFixed(2)}</div>
    </div>
  );
}
