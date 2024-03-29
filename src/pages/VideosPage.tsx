import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Video } from '../components/Video'
import Card from '../components/UI/Card'
import Youtube from '../api/youtube'

export default function Videos() {
  const { id } = useParams<{ id: string }>()
  const {
    data: videos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['videos', id],
    queryFn: () => {
      const youtube = new Youtube()
      return youtube.search(id)
    },
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) return <div>Loading ...</div>
  if (isError) return <div>Error!</div>

  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {videos.map((video: Video) => (
          <Card
            thumbnail={video.snippet.thumbnails.high.url}
            channelImg="/images/leo.jpeg"
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            channelId={video.snippet.channelId}
            views={500}
            publishAt={video.snippet.publishedAt}
            key={video.id.videoId}
            id={video.id}
          />
        ))}
      </div>
    </>
  )
}
