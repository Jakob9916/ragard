import '../styles/Menu.scss';
import '../styles/Home.scss';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import img1 from '../assets/d1.png';
import img2 from '../assets/d2.png';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  useScrollAnimation('scroll-fade');
  return (
    <div>
      <div className='home-hero'>
        <div className='home-hero-left'>
          <h1>RÅGÅRD</h1>
          <h2>RÖR ENERGI KLIMAT & IT</h2>
          <div className='home-hero-buttons'>
            <Button variant='primary' to='/about'>
              Läs mer
            </Button>
            <Button variant='secondary' to='/contact'>
              Kontakta oss
            </Button>
          </div>
        </div>
        <div className='home-hero-right'>
          <div className='hero-img-wrapper'>
            <img src={img1} alt='Dummy 1' className='hero-img img1' />
            <img src={img2} alt='Dummy 2' className='hero-img img2' />
          </div>
        </div>
      </div>
      {[...Array(8)].map((_, i) => (
        <Card title={`Rubrik ${i + 1}`} className='scroll-fade' key={i}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu
            tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
          </p>
        </Card>
      ))}
    </div>
  );
}
