import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosSearch } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

type HeaderProps = {
  toggleSideMenu: () => void
}

export default function Header({ toggleSideMenu }: HeaderProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    setSearch(newSearch)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/videos/${search}`)
  }

  useEffect(() => setSearch(id || ''), [id])

  return (
    <header>
      <div className="flex items-center justify-between w-full px-3 h-14">
        <div className="flex items-center gap-2">
          <RxHamburgerMenu
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={toggleSideMenu}
          />
          <Link to="/">
            <img
              src="/images/yt_logo_rgb_dark.png"
              alt="Youtube logo"
              className="w-[90px] h-[20px] cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between border-solid border-almostBlack border-4 rounded-xl w-5/12 h-10 gap-2">
          <form
            className="flex w-full px-4"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search ..."
              value={search}
              className="w-full h-[26px] bg-transparent"
              onChange={handleChange}
            />
            <button className="text-2xl">X</button>
          </form>
          <IoIosSearch className="text-2xl bg-almostBlack" />
        </div>
        <div>icons</div>
      </div>
    </header>
  )
}
