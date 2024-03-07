import { useNavigate } from 'react-router-dom'
import { format } from 'timeago.js'

type YoutubeData = {
  thumbnail: string
  channelImg: string
  title: string
  channelName: string
  channelId: string
  views: number
  publishAt: string
  id?: string
}
export default function Card(props: YoutubeData) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/videos/watch/${props.id}`, { state: props })
  }

  return (
    <li onClick={handleClick}>
      <img
        src={props.thumbnail}
        alt="Thumbnail"
        className="lg:w-[362.48px] lg:h-[203.89px] cursor-pointer"
      />
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
          <span>{props.views} views</span> *{' '}
          <span>{format(props.publishAt)}</span>
        </p>
      </div>
    </li>
  )
}
