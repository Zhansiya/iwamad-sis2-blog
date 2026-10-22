import { NavLink, Outlet } from 'react-router'

function Layout() {
  return (
    <div className="site-layout">
      <header className="site-header">
        <div className="header-container">
          <NavLink to="/" className="logo">
            Zhansiya's Blog
          </NavLink>

          <nav className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/saved">Saved</NavLink>
          </nav>
        </div>
      </header>

      <div className="page-container">
        <Outlet />
      </div>

      <footer className="site-footer">
        <p>© 2026 Zhansiya. Built with React & TypeScript.</p>
      </footer>
    </div>
  )
}

export default Layout