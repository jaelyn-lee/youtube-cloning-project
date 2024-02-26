import { useParams } from 'react-router-dom'

export default function VideoDetail() {
  const { id } = useParams()
  console.log(id)

  return <div>VideoDetail</div>
}
