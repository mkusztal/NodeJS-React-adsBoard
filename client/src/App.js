import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home/HomePage';
import Header from './components/layout/Header/Header';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Footer from './components/layout/Footer/Footer';
import Ad from './components/features/Ad/Ad';
import AdEdit from './components/features/AdEdit/AdEdit';
import AdRemove from './components/features/AdRemove/AdRemove';
import Search from './components/features/Search/Search';
import Register from './components/features/Register/Register';
import Login from './components/features/Login/Login';
import Logout from './components/features/Logout/Logout';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad/:id" element={<Ad />} />
        <Route path="/ad/edit/:id" element={<AdEdit />} />
        <Route path="/ad/remove/:id" element={<AdRemove />} />
        <Route path="/search/:searchPhrase" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
