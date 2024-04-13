'use client'
// https://www.udemy.com/course/react-avancado/learn/lecture/39682528#questions

import { PropsWithChildren } from 'react' // genérico que tem o children como propriedade a ser passada
import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}
