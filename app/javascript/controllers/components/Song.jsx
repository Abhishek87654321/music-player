import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <div className="row">
        {songs.map((song) => (
          <div className="col-md-6 mb-3" key={song.id}>
            <Card>
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <AudioPlayer
                  autoPlay
                  src={song.file_path}
                  onPlay={(e) => console.log('onPlay')}
                  // other props here
                />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Song;
