import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import 'jest-styled-components'

import Button from '.'

describe('<Button />', () => {
  it('Deve renderizar o botao medium', () => {
    renderWithTheme(<Button size="medium">Won Games</Button>)
    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem'
    })
  })

  it('Deve renderizar o botao large', () => {
    renderWithTheme(<Button size="large">Won Games</Button>)
    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem'
    })
  })

  it('Deve renderizar o botao com 100% de largura', () => {
    renderWithTheme(<Button size="large">Won Games</Button>)
    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      width: '100% '
    })
  })
})
