import styles from "./Item.module.scss";
import cardapio from "../pratos.json";
import classNames from "classnames";

type Props = (typeof cardapio)[0];

export default function Item(prato: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={prato.photo} alt={`Imagem do ${prato.title}`} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{prato.title}</h2>
          <p>{prato.description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames(
              [styles.item__tipo],
              [styles[`item__tipo__${prato.category.label.toLowerCase()}`]]
            )}
          >
            {prato.category.label}
          </div>
          <div className={styles.item__porcao}>{`${prato.size}g`}</div>
          <div className={styles.item__qtdpessoas}>{`Serve ${
            prato.serving
          } pessoa${prato.serving === 1 ? "" : "s"}`}</div>
          <div className={styles.item__valor}>{`R$${prato.price.toFixed(
            2
          )}`}</div>
        </div>
      </div>
    </div>
  );
}
