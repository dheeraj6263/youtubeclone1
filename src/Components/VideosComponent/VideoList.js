import React from 'react'
import VideoItem from './VideoItem'

function VideoList({ videos, onSelectedVideo }) {
    console.log(onSelectedVideo)
    const renderedVideo = videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId}
            onSelectedVideo={onSelectedVideo} />

    })

    return (
        <div>
            <h1>{renderedVideo}</h1>
        </div>
    )
}

export default VideoList
