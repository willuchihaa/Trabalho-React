
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/" className="logo">
          Task Manager
        </Link>

        <div className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/tarefas">Minhas tarefas</Link>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Task Manager - Projeto de Web II</p>
      </footer>
    </div>
  )
}

export default MainLayout
