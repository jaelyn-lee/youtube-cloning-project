import { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  const [toggled, setToggled] = useState(true)

  const toggleSideMenu = () => {
    setToggled((prev) => !prev)
  }

  return (
    <>
      <Header toggleSideMenu={toggleSideMenu} />
      <div className="flex">
        <SideMenu toggled={toggled} />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
