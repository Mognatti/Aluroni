import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasaBg from 'assets/nossa_casa.png';

export default function Inicio() {
  const index = Math.floor(Math.random() * cardapio.length);
  const indexPlus = index >= cardapio.length - 1 ? index - 2 : index + 1;
  const indexMinus = index <= 0 ? index + 2 : index - 1;

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha:</h3>
      <div className={styles.recomendados}>
        {cardapio.map((item) =>
          cardapio.indexOf(item) === index ||
          cardapio.indexOf(item) === indexPlus ||
          cardapio.indexOf(item) === indexMinus ? (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>

              <div>
                <button className={styles.recomendado__botao}>Ver mais</button>
              </div>
            </div>
          ) : (
            false
          )
        )}
      </div>
      <br />
      <h3 className={stylesTema.titulo}> Nossa Casa </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasaBg} alt="Casa do Aluroni"></img>
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185, <br></br> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
