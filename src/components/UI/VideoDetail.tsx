import { useParams } from 'react-router-dom'
import SideCard from './SideCard'

export default function VideoDetail() {
  const id = useParams()

  const mockVideos = [
    {
      kind: 'youtube#searchResult',
      etag: 'HVehEhmh9qBot40CksgvJjR7TAQ',
      id: {
        kind: 'youtube#video',
        videoId: 'zqgzlfTT3v4',
      },
      snippet: {
        publishedAt: '2024-02-08T12:00:32Z',
        channelId: 'UCkJSVi5NPCKT0l02UWyyu7g',
        title:
          'Leo Woodall &amp; Ambika Mod’s Favourite Lines From One Day &amp; How They Bonded',
        description:
          'Our entertainment reporter Olivia Marks chatted with Ambika Mod and Leo Woodall about all things One Day. Find out which film ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/zqgzlfTT3v4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/zqgzlfTT3v4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/zqgzlfTT3v4/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Hits Radio',
        liveBroadcastContent: 'none',
        publishTime: '2024-02-08T12:00:32Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '0nJVSY1oVAreu-ZFZBdBtuV16i8',
      id: {
        kind: 'youtube#video',
        videoId: 'mv3zHSyFiNQ',
      },
      snippet: {
        publishedAt: '2024-02-16T23:30:07Z',
        channelId: 'UCmSQ47G2NHhcjRAm9Px6R3g',
        title:
          '&#39;One Day&#39; Star Leo Woodall Jokes He Stole His Mom&#39;s Netflix Account',
        description:
          'Leo Woodall dishes on his new Netflix series "One Day," and admits it took a while for his mom to watch it because he stole her ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/mv3zHSyFiNQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/mv3zHSyFiNQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/mv3zHSyFiNQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'The Kelly Clarkson Show',
        liveBroadcastContent: 'none',
        publishTime: '2024-02-16T23:30:07Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'kmUYF2hlw_ozmajHRRFfvTgW61Y',
      id: {
        kind: 'youtube#video',
        videoId: 'UgWjjlzI5fM',
      },
      snippet: {
        publishedAt: '2024-02-10T12:30:18Z',
        channelId: 'UCAqEoRfgMCtErK0qsL1cCtw',
        title: 'What are Ambika Mod and Leo Woodall&#39;s hidden talents?',
        description:
          'They could start a band with their talents! #OneDay #AmbikaMod #LeoWoodall.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/UgWjjlzI5fM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/UgWjjlzI5fM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/UgWjjlzI5fM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'BuzzFeed UK',
        liveBroadcastContent: 'none',
        publishTime: '2024-02-10T12:30:18Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '7zjHLRoPLg0XIh2_RMx-rc6r8M0',
      id: {
        kind: 'youtube#video',
        videoId: 'CMTw4jO9jug',
      },
      snippet: {
        publishedAt: '2024-02-20T22:20:58Z',
        channelId: 'UCjDsbbzHgTrGc4Ff26TJtsA',
        title:
          'Meghann Fahy and Leo Woodall CONFIRM Romance With This Instagram Picture! | E! News',
        description:
          'Love has blossomed outside the White Lotus: Meghann Fahy and Leo Woodall, who played Daphne and Jack on season two, ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/CMTw4jO9jug/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/CMTw4jO9jug/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/CMTw4jO9jug/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'E! News',
        liveBroadcastContent: 'none',
        publishTime: '2024-02-20T22:20:58Z',
      },
    },
  ]

  return (
    <div className="flex">
      <iframe
        id="ytplayer"
        width="1184"
        height="666"
        src={`https://www.youtube.com/embed/${id.id}`}
      ></iframe>
      <div className="flex flex-col">
        {mockVideos.map((video) => (
          <SideCard
            thumbnail={video.snippet.thumbnails.high.url}
            channelImg="/images/leo.jpeg"
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            views={500}
            date={video.snippet.publishTime}
            key={video.id.videoId}
            id={video.id.videoId}
          />
        ))}
      </div>
    </div>
  )
}
