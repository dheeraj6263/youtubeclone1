import React from 'react'
import './Videos.Styles.css'
import Moment from 'react-moment';
import 'moment-timezone';

function VideoItem({ video, onSelectedVideo }) {
    console.log(video.snippet)
    return (
        <div className="videoList" onClick={() => onSelectedVideo(video)} >
            <div className="videoBlocks_img">
                <img src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                />
            </div>
            <div className="videoBlock_description">
                <h1>{video.snippet.title}</h1>
                <p className="channel_title">{video.snippet.channelTitle}
                    <span><Moment fromNow ago>{video.snippet.publishTime}</Moment>
                        <span style={{ margin: "0px 5px" }}>ago</span>
                    </span>

                </p>


            </div>



        </div>
    )

}

export default VideoItem
