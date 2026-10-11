
import { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import TaskItem from '../components/TaskItem.jsx'

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar React', completed: false },
    { id: 2, title: 'Praticar componentes', completed: true },
  ])

  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    document.title = 'Minhas tarefas | Task Manager'
  }, [])

  function addTask(event) {
    event.preventDefault()

    if (newTask.trim() === '') return

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now(),
        title: newTask.trim(),
        completed: false,
      },
    ])

    setNewTask('')
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    )
  }

  return (
    <Card title="Minhas tarefas">
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <p>Total de tarefas: {tasks.length}</p>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
      )}
    </Card>
  )
}

export default Tasks
