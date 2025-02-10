import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './spotify.css';

function SpotifyEmbed() {
  const embedRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  //List of Spotify URIs
  const trackURIs = [
    // Ek Din Aap 
    'spotify:track:5fq7CGNYZKJm38HbLwMg9h',

    //Ishq Hai 
    'spotify:track:3vCzLB6kS2lGcIpm1OOUsy',

    //Tum Mile
    'spotify:track:1EjxJHY9A6LMOlvyZdwDly',

    //Channa Ve
    'spotify:track:2Z6HgNji9cNlFLNORw6wDQ',

    //Love you for a thousand years
    'spotify:track:6lanRgr6wXibZr8KgzXxBl',
    
    //Mitwaa
    'spotify:track:5N7G544kaBi3rWWTPjsdu7',

    //Kehena Hai
    'spotify:track:1KxcQHJf7HC57jomPJ19Qj',

    // Moh Moh Ke Dhaage
    'spotify:track:189DQylImZ1hGZaIpAQUzx',
    ];

  useEffect(() => {
    //Get current reference
    const embedElement = embedRef.current;
    
    //Function to update the embed source, and parse the URI
    function updateEmbed() {
      const currentTrackURI = trackURIs[currentTrackIndex];
      const embedSource = `https://open.spotify.com/embed/track/${currentTrackURI.split(':')[2]}`;
      embedElement.src = embedSource;

      embedElement.contentWindow.postMessage(
        {
          event: 'command',
          func: 'playVideo',
        },
        '*'
      );
    }

    // Initial update
    updateEmbed();


  }, [currentTrackIndex, trackURIs]);

    //Go forward and backward in the track list and wrap around
    const goForward = () => {
      setCurrentTrackIndex((currentTrackIndex + 1) % trackURIs.length);
    
    };

    const goBackward = () => {
      setCurrentTrackIndex((currentTrackIndex - 1 + trackURIs.length) % trackURIs.length);
    };

  return (
    <>
        {/* Spotify Embed with Passed Reference */}
      <div id="spotify-embed-container">
        <h1> Sanjana's Playlist! </h1>
        <iframe
          ref={embedRef}
          title="Spotify Embed"
          width="300"
          height="380"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

        {/* Spotify Controls */}
      <div id="spotify-controls">
          <Icon icon="majesticons:arrow-right" className="spotify-controls-right" width="50" height="50" onClick={goForward} />
          <Icon icon="majesticons:arrow-left" className="spotify-controls-left" width="50" height="50" onClick={goBackward} />
      </div>
    </>
  );
}

export default SpotifyEmbed;
