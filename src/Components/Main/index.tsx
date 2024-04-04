import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Descrição passada por prop'
}) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
