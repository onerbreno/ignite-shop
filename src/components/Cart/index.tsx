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
  const { isCartVisible, items, closeCart, itemCount } = useContext(CartContext)

  return (
    <CartContainer isVisible={isCartVisible}>
      <CartContent>
        <CloseButton onClick={closeCart}>
          <X weight="bold" size={24} />
        </CloseButton>

        <CartProductsList>
          <h4>Sacola de compras</h4>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </CartProductsList>

        <CartFooter>
          <CartSummary>
            <span>
              <p>Quantidade</p>
              <p>
                {itemCount} {itemCount !== 1 ? 'itens' : 'item'}
              </p>
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
