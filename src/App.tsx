import { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import { Outlet } from 'react-router-dom'

function App() {
  const [toggled, setToggled] = useState(true)

  const toggleSideMenu = () => {
    setToggled((prev) => !prev)
  }

  return (
    <>
      <Header toggleSideMenu={toggleSideMenu} />
      <div className="flex">
        <SideMenu toggled={toggled} />
        <Outlet />
      </div>
    </>
  )
}

export default App
