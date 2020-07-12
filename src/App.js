import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/HeaderComponents.js/Header';
import YoutubeApi, { baseParams } from './Api/YoutubeApi'
import { param } from 'jquery';
import VideoList from './Components/VideosComponent/VideoList';
import VideoDetails from './Components/VideosComponent/VideoDetails';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            loading: false,
            selectedVideo: null
        }
    }
    componentDidMount() {
        this.FormSubmit("javascript")
    }
    FormSubmit = async (term) => {
        let response = await YoutubeApi.get('/search', {
            params: {
                q: term,
                ...baseParams,

            }

        })

        this.setState({ videos: response.data.items, loading: true, selectedVideo: response.data.items[0] })

    }
    onSelectedVideo = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <Fragment>
                <header>
                    <HeaderComponent FromAppFromSubmit={this.FormSubmit} />
                </header>
                <main className="container my-4 pl-4 pr-4">
                    <section id="data-list">
                        <article>
                            <div className="player_Block">
                                <VideoDetails
                                    video={this.state.selectedVideo}
                                />
                            </div>
                            <div className="list_block">
                                <VideoList
                                    videos={this.state.videos}
                                    onSelectedVideo={this.onSelectedVideo}
                                />
                            </div>




                        </article>
                    </section>



                </main>
            </Fragment>
        );
    }
}

export default App;