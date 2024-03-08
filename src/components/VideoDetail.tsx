// import { useParams } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { Video } from './Video'

import ChannelInfo from './ChannelInfo'
// import RelatedVideos from './UI/RelatedVideos'

type VideoDetail = {
  channelImg: string
  channelName: string
  channelId: string
  id: string
  publishAt: string
  thumbnail?: string
  title: string
  views: number
}

export default function VideoDetail(props: VideoDetail) {
  return (
    <div className="xl:flex gap-2">
      <div>
        <iframe
          id="ytplayer"
          src={`https://www.youtube.com/embed/${props.id}`}
          className="xl:w-[1184px] xl:h-[666px] sm:w-[817px] sm:h-[523px]"
        ></iframe>
        <div>
          <h1 className="text-xl">{props.title}</h1>
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-3">
              <ChannelInfo id={props.channelId} />
              <div>
                <h2 className="text-base">{props.channelName}</h2>
                <p className="text-xs">500 subscribers</p>
              </div>
              <button className="w-[94.56px] h-[36px] bg-white text-black font-semibold rounded-2xl">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <button>Share</button>
                <p>Share</p>
              </div>
              <div className="flex items-center justify-center">
                <button>Download</button>
                <p>Download</p>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-40 bg-almostBlack rounded-lg mt-3">
          <div className="flex">
            <p>65,054 views</p>
            <p>{props.publishAt} ago</p>
          </div>
          <p>{props.title}</p>
        </div>
      </div>
      {/* <div className="flex flex-col">
        {videos.map((video: Video) => (
          <RelatedVideos
            thumbnail={video.snippet.thumbnails.high.url}
            channelImg="/images/leo.jpeg"
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            views={500}
            date={video.snippet.publishTime}
            key={video.id.videoId}
            id={video.id.videoId}
          />
        ))}
      </div> */}
    </div>
  )
}
