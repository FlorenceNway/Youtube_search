import React from "react";
import YTSearch from "youtube-api-search";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import _ from "lodash";


const API_KEY = "AIzaSyDQkgxZUa4gM8sMpM6vkMkAPx3-wDIhHEw";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.onSearchVideo("Avril Lavigne");
  }

  onSearchVideo = (value) => {
    YTSearch({ key: API_KEY, term: value }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  };

  render() {
    const videoSearch = _.debounce((value) => {
      this.onSearchVideo(value);
    }, 3000);

    return (
      <div>
        <Header onSearch={videoSearch} />
        {/* <SearchBar onSearch={videoSearch} /> */}
        {/* <SearchBar onSearch={(value) => this.onSearchVideo(value)} /> */}
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={(video) => this.setState({ selectedVideo: video })}
            videos={this.state.videos}
            selectedVideo={this.state.selectedVideo}
          />
        </div>
      </div>
    );
  }
}

export default App;
