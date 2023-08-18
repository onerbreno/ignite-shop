import Image from 'next/image'

import camiseta1 from '../../../assets/camiseta1.png'
import { CartItemContainer, ImageContainer, CartItemContent } from './styles'

export function CartItem() {
  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={camiseta1} alt="" width={100} height={93} />
      </ImageContainer>

      <CartItemContent>
        <div>
          <h4>Camiseta Beyond the Limits</h4>
          <p>R$ 79,90</p>
        </div>
        <button>Remover</button>
      </CartItemContent>
    </CartItemContainer>
  )
}
