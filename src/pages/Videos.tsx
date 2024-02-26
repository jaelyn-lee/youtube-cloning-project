import { useParams } from 'react-router-dom'

export default function Videos() {
  const { id } = useParams<{ id: string }>()
  console.log(id)

  return <div>Videos {id ? `🔍${id}` : `❤️‍🔥`}</div>
}
