
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import Card from '../components/Card'

describe('Testes dos componentes', () => {
  it('deve exibir o nome recebido por props no Header', () => {
    render(<Header appName="Task Manager" />)

    expect(
      screen.getByRole('heading', { name: 'Task Manager' })
    ).toBeInTheDocument()
  })

  it('deve renderizar o conteúdo recebido por children no Card', () => {
    render(
      <Card title="Teste">
        <p>Conteúdo de exemplo</p>
      </Card>
    )

    expect(
      screen.getByText('Conteúdo de exemplo')
    ).toBeInTheDocument()
  })
})
