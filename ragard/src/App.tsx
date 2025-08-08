import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Partners from './pages/Partners';
import Troubleshooting from './pages/Troubleshooting';
import Video from './pages/Video';
import Integrity from './pages/Integrity';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/troubleshooting' element={<Troubleshooting />} />
          <Route path='/video/:id' element={<Video />} />
          <Route path='/integrity' element={<Integrity />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
