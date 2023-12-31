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
  const {
    isCartVisible,
    items,
    numberOfItems,
    formattedTotalPriceCart,
    isCreatingCheckoutSession,
    createCheckoutSession,
    closeCart,
  } = useContext(CartContext)

  function handleCreateCheckoutSession() {
    createCheckoutSession()
  }

  return (
    <CartContainer isVisible={isCartVisible}>
      <CartContent>
        <CloseButton onClick={closeCart}>
          <X weight="bold" size={24} />
        </CloseButton>

        <h4>Sacola de compras</h4>

        <CartProductsList>
          {items.map((item) => (
            <CartItem key={item.id + Math.random()} item={item} />
          ))}
        </CartProductsList>

        <CartFooter>
          <CartSummary>
            <span>
              <p>Quantidade</p>
              <p>
                {numberOfItems} {numberOfItems !== 1 ? 'itens' : 'item'}
              </p>
            </span>
            <CartSummaryPriceContainer>
              <p>Valor total</p>
              <strong>{formattedTotalPriceCart}</strong>
            </CartSummaryPriceContainer>
          </CartSummary>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleCreateCheckoutSession}
          >
            Finalizar compra
          </button>
        </CartFooter>
      </CartContent>
    </CartContainer>
  )
}
