import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  Navbar,
  NotFound,
  SearchTerm,
  VideoDetail,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/search/:searchTerm" element={<SearchTerm />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
        <Route path="/channel/:channelId" element={<ChannelDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
