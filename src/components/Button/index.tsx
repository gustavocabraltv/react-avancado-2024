import * as S from './styles'

export type ButtonProps = {
  size: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactNode
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} size={size} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
