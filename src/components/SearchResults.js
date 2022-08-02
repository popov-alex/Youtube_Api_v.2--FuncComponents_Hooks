import React from "react";
import SearchItem from "./SearchItem";

const SearchResults = (props) => {
  const videos = props.videos.map((video) => {
    return (
      <SearchItem
        onVideoSelect={props.onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{videos}</div>;
};

export default SearchResults;
