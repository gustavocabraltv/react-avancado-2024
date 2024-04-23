import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    padding: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: ${theme.font.sizes.xxlarge};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
