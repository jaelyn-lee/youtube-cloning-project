type VideoId = {
  id: string
}

export default function ChannelInfo({ id }: VideoId) {
  return <div>{id}</div>
}
