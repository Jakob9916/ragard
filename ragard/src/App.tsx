import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Partners from './pages/Partners';
import Troubleshooting from './pages/Troubleshooting';
import Video from './pages/Video';

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
          <Route path='/video' element={<Video />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
