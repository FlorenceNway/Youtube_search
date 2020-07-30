import React from "react";

const VideoDetail = (props) => {
  const { video } = props;

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="iframe-wrapper">
        <iframe
          title="video-detail"
          src={url}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
