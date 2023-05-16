import styles from './styles.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { ReactComponent as NotFountImg } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTema.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button onClick={handleClick}> {'< Voltar '}</button>
      </div>
      <NotFountImg />
    </div>
  );
}
