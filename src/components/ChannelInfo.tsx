import { useQuery } from '@tanstack/react-query'
import Youtube from '../api/youtube'

type channelId = {
  id: string
}

export default function ChannelInfo({ id }: channelId) {
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => {
      const youtube = new Youtube()
      return youtube.channelImageURL(id)
    },
    staleTime: 1000 * 60 * 5,
  })
  return (
    <div>
      {url && <img className="rounded-full w-9 h-9" src={url} alt="url" />}
    </div>
  )
}
