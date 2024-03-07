import { GoHomeFill } from 'react-icons/go'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdSubscriptions } from 'react-icons/md'
import { BiSolidVideos } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

type SideMenuProps = {
  toggled: boolean
}

export default function SideMenu({ toggled }: SideMenuProps) {
  const navigate = useNavigate()
  return (
    <>
      {toggled && (
        <div className="flex flex-col gap-12 pt-10">
          <div
            className="flex flex-col place-items-center"
            onClick={() => navigate(`/`)}
          >
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
      )}
    </>
  )
}
