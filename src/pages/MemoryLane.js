import React from 'react';
import './MemoryLane.css';

const photos = [
  { id: 1, src: '/20180807_103440.jpg' },
  { id: 2, src: '/20180901_205835.jpg' },
  { id: 3, src: '/20180907_090920.jpg' },
  { id: 4, src: '/20181006_133448.jpg' },
  { id: 5, src: '/20181018_205503.jpg' },
  { id: 6, src: '/20181229_155601.jpg' },
  { id: 7, src: '/20190203_154742.jpg' },
  { id: 8, src: '/20190203_154745.jpg' },
  { id: 9, src: '/Image005 (1).jpg' },
  { id: 10, src: '/Image006 (1).jpg' },
  { id: 11, src: '/Image006.jpg' },
  { id: 12, src: '/Image010 (1).jpg' },
];

function MemoryLane() {
  return (
    <div className="memory-lane">
      <h2>Memory Lane</h2>
      <div className="photo-grid">
        {photos.map(({ id, src }) => (
          <div key={id} className="photo-card">
            <img src={src} alt={`Memory ${id}`} className="photo-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryLane;
