import { useEffect, useState } from "react";
import { fetchVideoApi } from "../utils/fetchVideoApi";
import { useNavigate } from "react-router-dom";

function ChannelThumb({ channelId, marginTop = 0 }) {
  const [channel, setChannel] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchVideoApi(`channels?part=snippet%2Cstatistics&id=${channelId}`).then(
      (data) => setChannel(data.items[0])
    );
  }, [channelId]);

  if (!channelId) return;

  return (
    <div
      className="video-card channel"
      style={{ marginTop }}
      onClick={() => navigate(`/channel/${channel.id}`)}
    >
      <img
        src={channel?.snippet.thumbnails.medium.url}
        alt={`${channel?.snippet.title} avatar`}
      />
      <p>
        {channel?.snippet.title}
        <i className="fa-solid fa-circle-check"></i>
      </p>
      <span>{channel?.statistics.subscriberCount + " subscribers"}</span>
    </div>
  );
}

export default ChannelThumb;
