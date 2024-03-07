import { useQuery } from '@tanstack/react-query'
import Youtube from '../api/youtube'

type channelId = {
  id: string
}

export default function ChannelInfo({ id }: channelId) {
  const {
    data: url,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => {
      const youtube = new Youtube()
      return youtube.channelImageURL(id)
    },
    staleTime: 1000 * 60 * 5,
  })
  console.log('channel id: ', id)

  console.log('channel url: ', url)

  return <div>{url && <img src={url} alt="url" />}</div>
}
