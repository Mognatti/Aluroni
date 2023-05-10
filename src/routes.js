import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio/Cardapio';
import Inicio from 'pages/Inicio';
import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from 'pages/Sobre';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
