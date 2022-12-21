import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout/Layout'
import HomePage from './pages/HomePage/HomePage';
import Blogs from './pages/Blogs/Blogs';
import ContactUs from './pages/ContactUs/ContactUs';
import NoPage from './pages/NoPage/NoPage';
import About from './pages/About/About';
import Portfolios from './pages/Portfolios/Portfolios';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
