import { GoHomeFill } from 'react-icons/go'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdSubscriptions } from 'react-icons/md'
import { BiSolidVideos } from 'react-icons/bi'

export default function SideMenu() {
  return (
    <div className="flex flex-col gap-12 pt-10">
      <div className="flex flex-col place-items-center">
        <GoHomeFill className="text-2xl" />
        <span className="text-xs">Home</span>
      </div>
      <div className="flex flex-col place-items-center">
        <SiYoutubeshorts className="text-2xl" />
        <span className="text-xs">Shorts</span>
      </div>
      <div className="flex flex-col place-items-center">
        <MdSubscriptions className="text-2xl" />
        <span className="text-xs">Subscriptions</span>
      </div>
      <div className="flex flex-col place-items-center">
        <BiSolidVideos className="text-2xl" />
        <span className="text-xs">You</span>
      </div>
    </div>
  )
}
