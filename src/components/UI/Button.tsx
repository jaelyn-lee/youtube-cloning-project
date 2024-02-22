import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs'

export default function Button() {
  return (
    <div>
      <div className="flex items-center px-2 py-1 rounded-3xl bg-almostBlack">
        <button className="border-solid border-white border-r-2 pr-2">
          <BsHandThumbsUp className="text-2xl" />
        </button>
        <p className="pl-2">Thumbs up</p>
      </div>
      <div>
        <button>
          <BsHandThumbsDown />
        </button>
        <p>Thumbs Down</p>
      </div>
    </div>
  )
}
