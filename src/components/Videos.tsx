import Card from './UI/Card'

export default function Videos({ video }) {
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
