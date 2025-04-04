import React, { useState, useRef } from 'react';
import './Photography.css';
import expand from '../../assets/photography/expand.svg';
import refresh from '../../assets/photography/reload.svg';
import view from '../../assets/photography/view.svg'
import img1 from '../../assets/photography/one.jpg';
import img2 from '../../assets/photography/one_2.jpg';
import img3 from '../../assets/photography/one_3.jpg';
import img4 from '../../assets/photography/one_4.jpg';
import img5 from '../../assets/photography/one_8.jpg';
import img6 from '../../assets/photography/five.jpg';
import img7 from '../../assets/photography/four.jpg';
import img8 from '../../assets/photography/give.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const initialPositions = images.map((src, index) => ({
  id: index,
  src,
  x: 50 + index * 100,
  y: 50 + index * 100,
  zIndex: index,
}));

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 600),
  y: Math.floor(Math.random() * 600),
});

const Photography = () => {
  const [photoStates, setPhotoStates] = useState(initialPositions);
  const [highestZIndex, setHighestZIndex] = useState(images.length);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  const draggingRef = useRef<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (id: number, e: React.MouseEvent) => {
    draggingRef.current = id;
    const target = photoStates.find((p) => p.id === id);
    if (!target) return;

    offsetRef.current = {
      x: e.clientX - target.x,
      y: e.clientY - target.y,
    };

    setPhotoStates((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, zIndex: highestZIndex + 1 } : img
      )
    );
    setHighestZIndex((z) => z + 1);
    setSelectedId(id); // highlight on click
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingRef.current === null) return;

    const id = draggingRef.current;
    const newX = e.clientX - offsetRef.current.x;
    const newY = e.clientY - offsetRef.current.y;

    setPhotoStates((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, x: newX, y: newY } : img
      )
    );
  };

  const handleMouseUp = () => {
    draggingRef.current = null;
  };

  const handleReset = () => {
    setPhotoStates(initialPositions);
    setHighestZIndex(images.length);
    setSelectedId(null);
  };

  const handleShuffle = () => {
    setPhotoStates((prev) =>
      prev.map((img) => ({
        ...img,
        ...getRandomPosition(),
        zIndex: Math.floor(Math.random() * 100),
      }))
    );
    setHighestZIndex(100);
    setSelectedId(null);
  };

  return (
    <div
      className='photography-container'
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <span className='photography-title'>Photography + Mood board</span>
      <span className='photography-description'>
        Move the images around, shuffle them, or reset to the original layout.
        Click an image to bring it to front and highlight it. Double-click to view fullscreen.
      </span>

      <div className='photography-content'>
        <div className='photography-controls'>
          <span className='photography-move-label'>Move</span>
          <span className='photography-move-label'>Click + Mouse</span>
          <div className='photography-expand-icon' onClick={handleReset}>
            <img src={expand} alt='Reset' style={{ cursor: 'pointer' }} />
          </div>
          <div className='photography-refresh-icon' onClick={handleShuffle}>
            <img src={refresh} alt='Shuffle' style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <div className='photos-container'>
        {photoStates.map(({ id, src, x, y, zIndex }) => (
          <div
            key={id}
            className={`mood-image img-${id}`}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              zIndex,
              border: selectedId === id ? '3px solid orange' : 'none',
              borderRadius: '8px',
            }}
          >
            <img
              src={src}
              alt={`mood-${id}`}
              style={{
                width: '360px',
                height: 'auto',
                cursor: 'grab',
                userSelect: 'none',
                display: 'block',
              }}
              onMouseDown={(e) => handleMouseDown(id, e)}
              onClick={() => {
                setSelectedId(id);
                console.log('Selected ID:', id);
              }}
              onDoubleClick={() => setFullscreenImg(src)}
              draggable={false}
            />

            {/* Fallback icon as emoji */}
            {selectedId === id && (
  <img
    src={view}
    alt='view'
    style={{
      position: 'absolute',
      top: '6px',
      right: '6px',
      width: '24px',
      height: '24px',
      zIndex: 10,
      pointerEvents: 'none'
    }}
  />
)}

          </div>
        ))}
      </div>

      {fullscreenImg && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          onClick={() => setFullscreenImg(null)}
        >
          <div onClick={(e) => e.stopPropagation()}>
          <img
  src={fullscreenImg}
  alt='fullscreen'
  style={{
    maxWidth: '100vw',
    maxHeight: '100vh',
    objectFit: 'contain',
    borderRadius: '12px',
    display: 'block',
    margin: 'auto',
  }}
/>

            <button
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                fontSize: '30px',
                color: '#fff',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => setFullscreenImg(null)}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
