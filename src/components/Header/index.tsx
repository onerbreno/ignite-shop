import { Handbag } from '@phosphor-icons/react'
import { HeaderContainer, ButtonCart } from './styles'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '@/src/contexts/CartContext'
import Link from 'next/link'

export function Header() {
  const { openCart } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="" />
      </Link>
      <ButtonCart onClick={openCart}>
        <Handbag size={24} />
        <span>1</span>
      </ButtonCart>
    </HeaderContainer>
  )
}
