// https://www.udemy.com/course/react-avancado/learn/lecture/39682528#questions

import { PropsWithChildren } from 'react' // genérico que tem o children como propriedade a ser passada
import GlobalStyles from '@/styles/global'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
