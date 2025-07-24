import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayouts = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className="min-h-screen">
        <Header />
        <Outlet />
      </main>

      <div className='p-6 text-center bg-gray-800 mt-10'>
        Made with ❤️ by Prince Jha
      </div>
    </div>
  )
}

export default AppLayouts
