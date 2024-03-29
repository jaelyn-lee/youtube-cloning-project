import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import VideoDetailPage from './pages/VideoDetailPage.tsx'
import Error from './pages/Error.tsx'
import Videos from './pages/VideosPage.tsx'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Videos />} />
      <Route path="videos" element={<Videos />} />
      <Route path="videos/:id" element={<Videos />} />
      <Route path="videos/watch/:id" element={<VideoDetailPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </React.StrictMode>
)
