
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>tem essa pagina nao meu nobre</h2>

      <p>
        essa pagina nao existe.
      </p>

      <Link to="/">voltar para o inicio</Link>
    </div>
  )
}

export default NotFound
