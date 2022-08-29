import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/HomePage';
// import NotFound from './components/pages/NotFound/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
