import React, { useState, useEffect } from 'react';
import './PainFinder.css'; 


// Component to show dropdown with causes, remedies, and YouTube videos
const PainInfoDropdown = ({ bodyPart }) => {
  const [causes, setCauses] = useState([]);
  const [remedies, setRemedies] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  // Fetch causes, remedies, and YouTube videos when bodyPart changes
  useEffect(() => {
    if (bodyPart) {
      // Fetch causes and remedies from your API
      fetch(`/api/pain/${bodyPart}`)
        .then((response) => response.json())
        .then((data) => {
          setCauses(data.possible_causes);
          setRemedies(data.remedies);
        });

      // Fetch YouTube videos based on body part (Using YouTube API)
      fetchYouTubeVideos(bodyPart);
    }
  }, [bodyPart]);

  // Function to fetch YouTube videos for pain relief exercises
  const fetchYouTubeVideos = (bodyPart) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${bodyPart}+pain+relief+exercise&key=YOUR_YOUTUBE_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items.map((item) => ({
          title: item.snippet.title,
          videoId: item.id.videoId,
          thumbnail: item.snippet.thumbnails.default.url,
        }));
        setYoutubeVideos(videos);
      });
  };

  return (
    <div className="dropdown-menu">
      <h3>{bodyPart.toUpperCase()} Pain Info</h3>
      <div className="causes">
        <h4>Possible Causes</h4>
        <ul>
          {causes.map((cause, index) => (
            <li key={index}>{cause}</li>
          ))}
        </ul>
      </div>
      <div className="remedies">
        <h4>Suggested Remedies</h4>
        <ul>
          {remedies.map((remedy, index) => (
            <li key={index}>{remedy}</li>
          ))}
        </ul>
      </div>
      <div className="youtube-videos">
        <h4>Helpful Exercise Videos</h4>
        <ul>
          {youtubeVideos.map((video, index) => (
            <li key={index}>
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={video.thumbnail} alt={video.title} />
                <p>{video.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main component that handles gender selection and body part interaction
const PainFinder = () => {
  const [gender, setGender] = useState(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  const handleSelectGender = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart); // Trigger dropdown info for the clicked body part
  };

  return (
    <div>
      {/* Gender Selection */}
      {!gender ? (
        <div>
          <button onClick={() => handleSelectGender('male')}>Male</button>
          <button onClick={() => handleSelectGender('female')}>Female</button>
        </div>
      ) : (
        <div>
          {/* Render body outlines based on selected gender */}
          {gender === 'male' ? (
            <img
              src="/maleBodyOutline.svg"
              alt="Male Body"
              onClick={() => handleBodyPartClick('shoulder')} // Example for shoulder
            />
          ) : (
            <img
              src="/femaleBodyOutline.svg"
              alt="Female Body"
              onClick={() => handleBodyPartClick('knee')} // Example for knee
            />
          )}
        </div>
      )}

      {/* Show dropdown with pain causes/remedies if body part is selected */}
      {selectedBodyPart && <PainInfoDropdown bodyPart={selectedBodyPart} />}
    </div>
  );
};

export default PainFinder;
