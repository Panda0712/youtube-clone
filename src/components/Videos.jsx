import { useNavigate } from "react-router-dom";
import ChannelThumb from "./ChannelThumb";
import Spinner from "./Spinner";

function Videos({ videos, isLoading, selectedCategory = null }) {
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (!videos) return <Spinner />;

  return (
    <div className="videos">
      {selectedCategory && <h2>{selectedCategory} videos</h2>}

      <div className="videos-container">
        {videos.map((video, index) => (
          <>
            {video.snippet.channelId && index === 0 && selectedCategory && (
              <ChannelThumb channelId={video.snippet.channelId}></ChannelThumb>
            )}
            <div
              key={video.id.videoId}
              className="video-card"
              onClick={() => navigate(`/video/${video.id.videoId}`)}
            >
              <img
                src={video.snippet.thumbnails.medium?.url}
                alt={`${video.snippet.title} video`}
              />
              <p>{video.snippet.title.slice(0, 30) + "..."}</p>
              <span>
                {video.snippet.channelTitle}
                <i className="fa-solid fa-circle-check"></i>
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Videos;
