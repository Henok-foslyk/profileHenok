import { Outlet } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 sm:px-8 py-6 max-w-6xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}