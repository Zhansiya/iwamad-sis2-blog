import { NavLink, Outlet } from 'react-router'

function Layout() {
  return (
    <div>
      <header>
        <h2>Zhansiya's Blog</h2>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/saved">Saved</NavLink>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>© 2026 Zhansiya</p>
      </footer>
    </div>
  )
}

export default Layout