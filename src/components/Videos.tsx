import Card from './UI/Card'
import { useQuery } from '@tanstack/react-query'
import { Video } from './Video'

export default function Videos() {
  const {
    data: videos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['videos'],
    queryFn: async () => {
      const res = await fetch('/data/most-popular.json').then((res) =>
        res.json()
      )
      return res.items
    },
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) return <div>Loading ...</div>
  if (isError) return <div>Error!</div>

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      {videos.map((video: Video) => (
        <Card
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
  )
}

// `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=NZ&key=${
//           import.meta.env.VITE_API_KEY
//         }`
