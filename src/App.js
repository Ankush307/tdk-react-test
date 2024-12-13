import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import About from './view/About';
import Blogs from './view/Blogs';
import Features from './view/Features';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='features' element={<Features />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
