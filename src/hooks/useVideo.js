import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const UseVideo = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default UseVideo;
