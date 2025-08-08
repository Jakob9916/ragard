import { Link } from 'react-router-dom';
import '../styles/Troubleshooting.scss';
import img3 from '../assets/d2.png';
import img4 from '../assets/d1.png';
import img5 from '../assets/d4.png';

const troubleshootingData = [
  {
    id: '1',
    title: 'Ingen värme i elementen',
    desc: 'Snabb felsökning om dina element är kalla eller inte fungerar.',
    width: 300,
    column: '1',
    row: '1',
  },
  {
    id: '2',
    title: 'Lågt vattentryck',
    desc: 'Vad du kan göra om du har dåligt tryck i kranen.',
    width: 300,
    column: '2',
    row: '1',
  },
  {
    id: '3',
    title: 'Värmepumpen larmar',
    desc: 'Så här felsöker du vanliga larm på värmepumpen.',
    width: 300,
    column: '1',
    row: '2',
  },
  {
    id: '4',
    title: 'Ingen varmvatten',
    desc: 'Tips om du saknar varmvatten i huset.',
    width: 300,
    column: '2',
    row: '2',
  },
  {
    id: '5',
    title: 'Wifi-problem',
    desc: 'Felsökning av nätverk och smarta hem-produkter.',
    width: 300,
    column: '1 / span 2',
    row: '3',
  },
];

export default function Troubleshooting() {
  return (
    <div className='troubleshooting-layout'>
      <div className='troubleshooting-left'>
        <h1>Felsökning</h1>
        <div className='troubleshooting-cards'>
          {troubleshootingData.map((item) => (
            <Link
              to={`/video/${item.id}`}
              className='troubleshooting-card'
              key={item.id}
              style={{
                gridColumn: item.column,
                gridRow: item.row,
                maxWidth: item.width,
                width: '100%',
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <span className='troubleshooting-card-link'>Läs mer &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
      <aside className='troubleshooting-right'>
        <div className='troubleshooting-images'>
          <img src={img3} alt='Dummy 1' className='img img3' />
          <img src={img4} alt='Dummy 2' className='img img4' />
          <img src={img5} alt='Dummy 3' className='img img5' />
        </div>
      </aside>
    </div>
  );
}
