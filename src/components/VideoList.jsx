import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = (props) => {
  const { videos, onVideoSelect, selectedVideo } = props;

  const videoItem = videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={onVideoSelect}
        selectedVideo={selectedVideo}
      />
    );
  });
  console.log(videos);

  return <ul className="videoList">{videoItem}</ul>;
};

export default VideoList;
