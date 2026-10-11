
import Header from '../components/Header.jsx'
import Card from '../components/Card.jsx'

function Home() {
  return (
    <div>
      <Header appName="Task Manager" />

      <Card title="Bem-vindo!">
        <p>
          Organize suas tarefas e acompanhe seu progresso.
        </p>

        <p>
          Utilize o menu de navegação para acessar suas tarefas.
        </p>
      </Card>
    </div>
  )
}

export default Home
