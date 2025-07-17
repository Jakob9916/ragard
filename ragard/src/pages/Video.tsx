import { useParams } from 'react-router-dom';
import { troubleshootingVideos } from '../data/troubleshootingVideos';
import '../styles/Video.scss';

export default function Video() {
  const { id } = useParams();
  const video = troubleshootingVideos.find((v) => v.id === id);

  if (!video) {
    return (
      <div className='video-page'>
        <h1>Video ej hittad</h1>
      </div>
    );
  }

  return (
    <div className='video-page'>
      <div className='video-player-wrapper'>
        <iframe
          className='video-player'
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='video-info'>
        <h1>{video.title}</h1>
        <p>{video.description}</p>
      </div>
    </div>
  );
}
