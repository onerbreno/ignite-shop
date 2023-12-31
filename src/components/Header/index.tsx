import { Handbag } from '@phosphor-icons/react'
import { HeaderContainer, ButtonCart } from './styles'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '@/src/contexts/CartContext'
import Link from 'next/link'

export function Header() {
  const { openCart, numberOfItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="" height={52} width={130} />
      </Link>
      <ButtonCart onClick={openCart}>
        <Handbag size={24} weight="bold" />
        {numberOfItems ? <span>{numberOfItems}</span> : ''}
      </ButtonCart>
    </HeaderContainer>
  )
}
