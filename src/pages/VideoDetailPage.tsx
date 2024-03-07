import { useLocation } from 'react-router-dom'
import VideoDetail from '../components/VideoDetail'

export default function VideoDetailPage() {
  const { state: props } = useLocation()

  console.log(props)

  return (
    <>
      <VideoDetail {...props} />
    </>
  )
}
