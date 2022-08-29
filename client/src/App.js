import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home/HomePage';
import Header from './components/layout/Header/Header';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Footer from './components/layout/Footer/Footer';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
