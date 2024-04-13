import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => (
  <S.Wrapper>
    <h1>{children}</h1>
  </S.Wrapper>
)

export default Heading
