import styles from './Prato.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import PratoTags from 'components/PratoTags';
import NotFound from 'pages/NotFound';
import Header from 'components/Header';

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route
          index
          element={
            <>
              <button onClick={() => navigate(-1)} className={styles.voltar}>
                {' '}
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {prato.description}
                  </p>
                  <PratoTags {...prato} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
