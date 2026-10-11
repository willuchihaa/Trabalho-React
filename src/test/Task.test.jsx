
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tasks from '../pages/Tasks'

describe('Página de tarefas', () => {
  it('deve permitir adicionar uma nova tarefa', async () => {
    const user = userEvent.setup()

    render(<Tasks />)

    await user.type(
      screen.getByPlaceholderText('Digite uma tarefa...'),
      'Fazer trabalho de React'
    )

    await user.click(
      screen.getByRole('button', { name: 'Adicionar' })
    )

    expect(
      screen.getByText('Fazer trabalho de React')
    ).toBeInTheDocument()
  })
})
    