import * as S from './styles'

export type ButtonProps = {
  size: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  fullWidth?: boolean
}

const Button = ({ children, size = 'medium', fullWidth }: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} size={size}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
