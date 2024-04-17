import * as S from './styles'

export type ButtonProps = {
  size: 'small' | 'medium'
  children?: React.ReactNode
}

const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
