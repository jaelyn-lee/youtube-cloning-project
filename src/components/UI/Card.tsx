type YoutubeData = {
  thumbnail: string
  channelImg: string
  title: string
  channelName: string
  views: number
  date: string
}
export default function Card(props: YoutubeData) {
  return (
    <section>
      <img
        src={props.thumbnail}
        alt="Thumbnail"
        className="lg:w-[362.48px] lg:h-[203.89px]"
      />
      <div>
        <div className="flex">
          <img
            src={props.channelImg}
            alt="Channel image"
            className="w-9 h-9 rounded-full"
          />
          <p>{props.title}</p>
        </div>
        <p className="text-red">{props.channelName}</p>
        <p>
          <span>{props.views} views</span> * <span>{props.date} ago</span>
        </p>
      </div>
    </section>
  )
}
