import { X } from '@phosphor-icons/react'
import {
  CartContainer,
  CartContent,
  CartFooter,
  CartProductsList,
  CartSummary,
  CartSummaryPriceContainer,
  CloseButton,
} from './styles'
import { CartItem } from './CartItem'
import { useContext } from 'react'
import { CartContext } from '@/src/contexts/CartContext'

export function Cart() {
  const { isCartVisible, closeCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isCartVisible}>
      <CartContent>
        <CloseButton onClick={closeCart}>
          <X weight="bold" size={24} />
        </CloseButton>

        <CartProductsList>
          <h4>Sacola de compras</h4>
          <ul>
            <CartItem />
          </ul>
        </CartProductsList>

        <CartFooter>
          <CartSummary>
            <span>
              <p>Quantidade</p>
              <p>1 item</p>
            </span>
            <CartSummaryPriceContainer>
              <p>Valor total</p>
              <strong>R$ 79,90</strong>
            </CartSummaryPriceContainer>
          </CartSummary>

          <button>Finalizar compra</button>
        </CartFooter>
      </CartContent>
    </CartContainer>
  )
}
