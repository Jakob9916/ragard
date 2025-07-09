import '../styles/Menu.scss';
import '../styles/Home.scss';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import img1 from '../assets/d1.png';
import img2 from '../assets/d2.png';
import Button from '../components/Button';

export default function Home() {
  useScrollAnimation('scroll-fade');
  return (
    <div>
      <div className='home-hero'>
        <div className='home-hero-left scroll-fade'>
          <h1>RÅGÅRD</h1>
          <h2>RÖR ENERGI KLIMAT & IT</h2>
          <div className='home-hero-buttons'>
            <Button variant='primary'>Läs mer</Button>
            <Button variant='secondary'>Kontakta oss</Button>
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
