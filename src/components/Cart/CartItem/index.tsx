import Image from 'next/image'

import { CartItemContainer, ImageContainer, CartItemContent } from './styles'

interface Item {
  id: string
  name: string
  imageUrl: string
  price: string
}
interface CartItemProps {
  item: Item
}

export function CartItem({ item }: CartItemProps) {
  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={item.imageUrl} alt="" width={100} height={93} />
      </ImageContainer>

      <CartItemContent>
        <div>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
        <button>Remover</button>
      </CartItemContent>
    </CartItemContainer>
  )
}
