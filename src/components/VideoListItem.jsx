import React from "react";
import "../style/VideoDetail.scss";

const VideoListItem = (props) => {
  const { video, onVideoSelect, selectedVideo } = props;
  const imageUrl = video.snippet.thumbnails.default.url;

  const isSelected = selectedVideo === video;

  return (
    <li
      className={`list-item ${isSelected ? "selected" : ""}`}
      key={video.etag}
      onClick={() => onVideoSelect(video)}
    >
      <div className="video-list media">
        <div className="media-left">
          <img alt="preview" src={imageUrl} className="video-item-img" />
        </div>
        <div className="media-body">
          <div className="media-heading ml-5">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;