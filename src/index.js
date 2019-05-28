import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDdL0IqE7wiMWmLffNIBo84ReJbyd9c1p4';


// Create a new component. this component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                 videos : videos,
                 selectedVideo : videos[0]
            });
            // this.setState({ videos : videos });
        });
    }

    render(){
        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300);

        return (
        <div>
            <div>
                <SearchBar onSearchTermChange = {videoSearch} />
                {/* <SearchBar onSearchTermChange = {term => this.videoSearch(term)} /> */}
            </div>
            <div className='row'>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                 videos={this.state.videos} />
            </div>
        </div>
        );
    }
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));




// ------------  functional component of App ---------------
// const App = () => {
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     );
// }
