import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/src/styles.scss';

const Song = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/songs')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSongs(data);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  return (
    <div>
      {songs.map((song) => (
        <AudioPlayer
          autoPlay
          key={song.id}
          src={song.file_path}
          onPlay={(e) => console.log('onPlay')}
          // other props here
        />
      ))}
    </div>
  );
};

export default Song;
