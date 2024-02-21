import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosSearch } from 'react-icons/io'
import { useState } from 'react'

export default function Header() {
  const [toggled, setToggled] = useState(false)
  return (
    <>
      <div className="flex items-center justify-between w-full px-3 h-14">
        <div className="flex items-center gap-2">
          <RxHamburgerMenu width={24} height={24} className="cursor-pointer" />
          <img
            src="/images/yt_logo_rgb_dark.png"
            alt="Youtube logo"
            className="w-[90px] h-[20px] cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between border-solid border-almostBlack border-4 rounded-xl w-5/12 h-10 gap-2">
          <div className="flex w-full px-4">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full h-[26px] bg-transparent"
            />
            <button className="text-2xl">X</button>
          </div>
          <IoIosSearch className="text-2xl bg-almostBlack" />
        </div>
        <div>icons</div>
      </div>
    </>
  )
}
