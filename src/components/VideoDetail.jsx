import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchVideoApi } from "../utils/fetchVideoApi";
import Videos from "./Videos";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);

  const { videoId } = useParams();

  useEffect(() => {
    fetchVideoApi(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    ).then((data) => setVideoDetail(data?.items?.[0]));

    fetchVideoApi(
      `search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`
    ).then((data) => setVideos(data.items));
  }, [videoId]);

  console.log(videos);

  if (!videoDetail) return <span>Loading...</span>;

  return (
    <div className="video-detail">
      <div className="video-detail_first">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
        ></ReactPlayer>
        <p className="video-detailTitle">{videoDetail?.snippet?.title}</p>
        <div className="video-detail_wrapper">
          <span>
            {videoDetail?.snippet?.channelTitle}
            <i className="fa-solid fa-circle-check"></i>
          </span>
          <div className="video-detail_statistics">
            <h6>
              <span>{videoDetail?.statistics?.viewCount}</span>
              <i className="fa-solid fa-eye"></i>
            </h6>
            <h6>
              <span>{videoDetail?.statistics?.likeCount}</span>
              <i className="fa-solid fa-thumbs-up"></i>
            </h6>
            <h6>
              <span>{videoDetail?.statistics?.commentCount}</span>
              <i className="fa-solid fa-comment"></i>
            </h6>
          </div>
        </div>
      </div>
      <div className="video-detail_second">
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default VideoDetail;
