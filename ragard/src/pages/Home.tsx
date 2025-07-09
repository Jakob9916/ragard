import '../styles/Menu.scss';
import '../styles/Home.scss';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import img1 from '../assets/dummy1.jpg'; // Byt till rätt filnamn
import img2 from '../assets/dummy2.webp'; // Byt till rätt filnamn

export default function Home() {
  useScrollAnimation('scroll-fade');
  return (
    <div>
      <div className='home-hero'>
        <div className='home-hero-left scroll-fade'>
          <h1>RÅGÅRD</h1>
          <h2>RÖR ENERGI KLIMAT & IT</h2>
          <div className='home-hero-buttons'>
            <button className='primary-btn'>Läs mer</button>
            <button className='secondary-btn'>Kontakta oss</button>
          </div>
        </div>
        <div className='home-hero-right scroll-fade'>
          <div className='hero-img-wrapper'>
            <img src={img1} alt='Dummy 1' className='hero-img img1' />
            <img src={img2} alt='Dummy 2' className='hero-img img2' />
          </div>
        </div>
      </div>
      {[...Array(8)].map((_, i) => (
        <div className='dummy-box scroll-fade' key={i}>
          <h2>Rubrik {i + 1}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu
            tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
          </p>
        </div>
      ))}
    </div>
  );
}
