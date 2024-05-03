import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Logo from '../../components/Logo'
import { useState } from 'react'
import Button from '../Button'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper aria-label="open menu" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideonmobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper aria-label="search">
          <SearchIcon />
        </S.IconWrapper>
        <S.IconWrapper aria-label="cart">
          <ShoppingCartIcon />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
        <S.RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <S.CreateAccount href="#" title="Sign Up">
            Sign Up
          </S.CreateAccount>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
