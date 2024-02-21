// import Card from './UI/Card'

import { useEffect, useState } from 'react'
import Card from './UI/Card'
import { Video } from './Video'

export default function Videos() {
  const [items, setItems] = useState<Video[]>([])

  useEffect(() => {
    const fetchedData = async () => {
      const fetchedData = await fetch('/data/leo-woodall.json').then((res) =>
        res.json()
      )
      const data = fetchedData.items
      setItems(data)
      console.log('data is here', data)
    }
    fetchedData()
  }, [])

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      {items.map((item) => (
        <Card
          thumbnail={item.snippet.thumbnails.high.url}
          channelImg="/images/leo.jpeg"
          title={item.snippet.title}
          channelName={item.snippet.channelTitle}
          views={500}
          date={item.snippet.publishTime}
          key={item.id.videoId}
        />
      ))}
    </div>
  )
}
