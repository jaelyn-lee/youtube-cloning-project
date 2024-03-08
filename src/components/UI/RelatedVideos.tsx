// // import { useQuery } from "@tanstack/react-query"
// // import Youtube from "../../api/youtube"

// type YoutubeData = {
//   thumbnail?: string
//   channelImg: string
//   title: string
//   channelName: string
//   views: number
//   date: string
//   id: string
// }

// export default function RelatedVideos(props: YoutubeData) {
//   const { data: videos } = useQuery({
//     queryKey: ['channel', id],
//     queryFn: () => {
//       const youtube = new Youtube()
//       return youtube.channelImageURL(id)
//     },
//     staleTime: 1000 * 60 * 5,
//   })
//   return (
//     <section className="w-[402px] h-[94px] flex">
//       <div>
//         <img
//           src={props.thumbnail}
//           alt="Thumbnail"
//           className="lg:w-[168px] lg:h-[94px] cursor-pointer rounded-lg"
//         />
//       </div>
//       <div className="w-[202px]">
//         <p className="truncate">{props.title}</p>
//         <p className="font-bold text-textSecondary">{props.channelName}</p>
//         <p>
//           <span className="text-textSecondary">{props.views} views</span> *{' '}
//           <span className="text-textSecondary">{props.date} ago</span>
//         </p>
//       </div>
//     </section>
//   )
// }
