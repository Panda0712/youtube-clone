import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideoApi } from "../utils/fetchVideoApi";
import ChannelThumb from "./ChannelThumb";
import Videos from "./Videos";

function ChannelDetail() {
  const [videos, setVideos] = useState([]);

  const { channelId } = useParams();

  useEffect(() => {
    fetchVideoApi(
      `search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => setVideos(data.items));
  }, [channelId]);

  return (
    <div className="channel-detail">
      <div className="channel-background"></div>
      <ChannelThumb channelId={channelId} marginTop="-85px" />
      <Videos videos={videos} />
    </div>
  );
}

export default ChannelDetail;
