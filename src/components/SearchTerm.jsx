import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchVideoApi } from "../utils/fetchVideoApi";

function SearchTerm() {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchVideoApi(
      `search?part=snippet&q=${searchTerm}&maxResults=50&order=date`
    ).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <div className="videos">
      <h2>{searchTerm} videos</h2>

      <div className="videos-container">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="video-card"
            onClick={() => navigate(`/video/${video.id.videoId}`)}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={`${video.snippet.title} video`}
            />
            <p>{video.snippet.title.slice(0, 30) + "..."}</p>
            <span>
              {video.snippet.channelTitle}
              <i className="fa-solid fa-circle-check"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchTerm;
