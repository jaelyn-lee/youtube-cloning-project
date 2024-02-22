import { Link, useNavigate } from 'react-router-dom'

type YoutubeData = {
  thumbnail: string
  channelImg: string
  title: string
  channelName: string
  views: number
  date: string
  id: string
}
export default function Card(props: YoutubeData) {
  const navigate = useNavigate()
  const handleClick = () => {
    const id = props.id
    console.log(id)
    navigate(`/video/${id}`)
  }

  return (
    <section>
      <Link to={`/videos/${props.id}`}>
        <img
          src={props.thumbnail}
          alt="Thumbnail"
          className="lg:w-[362.48px] lg:h-[203.89px] cursor-pointer"
          onClick={handleClick}
        />
      </Link>
      <div>
        <div className="flex gap-1">
          <img
            src={props.channelImg}
            alt="Channel image"
            className="w-9 h-9 rounded-full"
          />
          <p className="truncate">{props.title}</p>
        </div>
        <p className="font-bold text-gray-400">{props.channelName}</p>
        <p>
          <span>{props.views} views</span> * <span>{props.date} ago</span>
        </p>
      </div>
    </section>
  )
}
