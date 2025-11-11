import { Outlet } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'

const Layout = () => {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
