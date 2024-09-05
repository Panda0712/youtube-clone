import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchVideoApi } from "../utils/fetchVideoApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("JS Mastery");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchVideoApi(
      `search?part=snippet&q=${selectedCategory}&maxResults=50&order=date`
    ).then((data) => setTimeout(() => setVideos(data.items)), 2000);
    setIsLoading(false);
  }, [selectedCategory]);

  return (
    <div className="feed">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Videos
        videos={videos}
        isLoading={isLoading}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Feed;
