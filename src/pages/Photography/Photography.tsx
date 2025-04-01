import expand from '../../assets/photography/expand.svg';
import refresh from '../../assets/photography/reload.svg';
import './Photography.css';
const Photography = () => {
  return (
    <div className='photography-container'>
      <span className='photography-title'>Photography + Mood board</span>
      <span className='photography-description'>
        [WIP] A place where I share my inspirations for this personal space.
        Feel free to visit this page in a week or two, further controls may be
        available... Non-compatible with touchscreens.
      </span>
      <div className='photography-content'>
        <div className='photography-controls'>
          <span className='photography-move-label'>Move</span>
          <span className='photography-move-label'>Click + Mouse</span>
          <div className='photography-expand-icon'>
            <img src={expand} alt='Expand' />
          </div>
          <div className='photography-refresh-icon'>
            <img src={refresh} alt='Refresh' />
          </div>
        </div>
      </div>
      <div className='photos-container'></div>
    </div>
  );
};

export default Photography;
