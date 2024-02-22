import { useParams } from 'react-router-dom'
import SideCard from './SideCard'
import { useQuery } from '@tanstack/react-query'
import { Video } from '../Video'

export default function VideoDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: videos } = useQuery({
    queryKey: ['videos'],
    queryFn: async () => {
      const res = await fetch('/data/leo-woodall.json').then((res) =>
        res.json()
      )
      return res.items
    },
    staleTime: 1000 * 60 * 5,
  })

  const filteredVideo = videos.filter((video: Video) => video.id.videoId === id)

  return (
    <div className="xl:flex gap-2">
      <div>
        <iframe
          id="ytplayer"
          src={`https://www.youtube.com/embed/${id}`}
          className="xl:w-[1184px] xl:h-[666px] sm:w-[817px] sm:h-[523px]"
        ></iframe>
        <div>
          <h1 className="text-xl">{filteredVideo[0].snippet.title}</h1>
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-3">
              <img
                src="/images/leo.jpeg"
                alt="channelImg"
                className="w-9 h-9 rounded-full"
              />
              <div>
                <h2 className="text-base">
                  {filteredVideo[0].snippet.channelTitle}
                </h2>
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
            <p>{filteredVideo[0].publishTime} ago</p>
          </div>
          <p>{filteredVideo[0].snippet.description}</p>
        </div>
      </div>
      <div className="flex flex-col">
        {videos.map((video: Video) => (
          <SideCard
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
      </div>
    </div>
  )
}
