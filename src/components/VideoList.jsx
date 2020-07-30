import React from "react";
import VideoListItem from "./video_list_item";

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

  return <ul className="col-md-4 list-group">{videoItem}</ul>;
};

export default VideoList;
