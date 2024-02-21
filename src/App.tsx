import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Videos from './components/Videos'

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideMenu />
        <Videos />
      </div>
    </>
  )
}

export default App
