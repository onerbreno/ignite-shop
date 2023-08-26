import Image from 'next/image'

import { CartItemContainer, ImageContainer, CartItemContent } from './styles'
import { useContext } from 'react'
import { CartContext } from '@/src/contexts/CartContext'

interface Item {
  id: string
  name: string
  imageUrl: string
  price: {
    formattedCurrency: string
    unitAmount: number
  }
  description: string
  defaultPriceId: string
}
interface CartItemProps {
  item: Item
}

export function CartItem({ item }: CartItemProps) {
  const { removeItemCart } = useContext(CartContext)

  function handleRemoveItem(item) {
    removeItemCart(item)
  }

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={item.imageUrl} alt="" width={100} height={93} />
      </ImageContainer>

      <CartItemContent>
        <div>
          <h4>{item.name}</h4>
          <p>{item.price.formattedCurrency}</p>
        </div>
        <button onClick={handleRemoveItem}>Remover</button>
      </CartItemContent>
    </CartItemContainer>
  )
}
