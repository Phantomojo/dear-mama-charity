import React, { useState } from 'react';
import './MusicForMama.css';

const isYouTubeUrl = (url) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

const getYouTubeEmbedUrl = (url) => {
  if (url.includes('youtu.be')) {
    const videoId = url.split('youtu.be/')[1].split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes('youtube.com')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const videoId = urlParams.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return '';
};

const MusicForMama = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Song One', src: 'https://youtu.be/-fxh7jAJR8U' },
    { id: 2, title: 'Song Two', src: 'https://youtu.be/LQjMCKq87N0' },
    { id: 3, title: 'Song Three', src: 'https://youtu.be/vov3r5GdM8M' },
    { id: 4, title: 'Song Four', src: 'https://youtu.be/VsNbhwSXDB8' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newSrc, setNewSrc] = useState('');

  const addSong = () => {
    if (newTitle.trim() && newSrc.trim()) {
      setSongs([...songs, { id: Date.now(), title: newTitle.trim(), src: newSrc.trim() }]);
      setNewTitle('');
      setNewSrc('');
    }
  };

  const removeSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  const updateSong = (id, field, value) => {
    setSongs(songs.map(song => song.id === id ? { ...song, [field]: value } : song));
  };

  return (
    <div className="music-for-mama">
      <h2>Music for Mama</h2>
      <p className="music-label">Press play to hear what you mean to us</p>
      <div className="music-player-list">
        {songs.map(({ id, title, src }) => (
          <div key={id} className="music-player">
            <input
              type="text"
              value={title}
              onChange={(e) => updateSong(id, 'title', e.target.value)}
              className="song-title-input"
              placeholder="Song Title"
            />
            <input
              type="text"
              value={src}
              onChange={(e) => updateSong(id, 'src', e.target.value)}
              className="song-src-input"
              placeholder="Song URL"
            />
            {isYouTubeUrl(src) ? (
              <iframe
                width="300"
                height="170"
                src={getYouTubeEmbedUrl(src)}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <audio controls>
                <source src={src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
            <button className="remove-button" onClick={() => removeSong(id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="add-song-form">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Song Title"
          className="new-song-title"
        />
        <input
          type="text"
          value={newSrc}
          onChange={(e) => setNewSrc(e.target.value)}
          placeholder="New Song URL"
          className="new-song-src"
        />
        <button onClick={addSong} className="add-button">Add Song</button>
      </div>
    </div>
  );
};

export default MusicForMama;
