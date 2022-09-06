import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home/HomePage';
import Header from './components/layout/Header/Header';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Footer from './components/layout/Footer/Footer';
import AdPage from './components/pages/AdPage/AdPage';
import AddAdPage from './components/pages/AddAdPage/AddAdPage';
import EditAdPage from './components/pages/EditAdPage/EditAdPage';
import AdRemove from './components/features/AdRemove/AdRemove';
import SearchForm from './components/features/SearchForm/SearchForm';
import Register from './components/features/Register/Register';
import Login from './components/features/Login/Login';
import Logout from './components/features/Logout/Logout';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad/:id" element={<AdPage />} />
        <Route path="/ad/addAd/" element={<AddAdPage />} />
        <Route path="/ad/edit/:id" element={<EditAdPage />} />
        <Route path="/ad/remove/:id" element={<AdRemove />} />
        <Route path="/search/:searchPhrase" element={<SearchForm />} />
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
