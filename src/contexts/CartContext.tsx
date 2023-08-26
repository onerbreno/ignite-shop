import axios from 'axios'
import { ReactNode, createContext, useState } from 'react'
import { formatCurrency } from '../utils/formatCurrency'

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

interface CartContextProps {
  items: Item[]
  isCartVisible: boolean
  numberOfItems: number
  formattedTotalPriceCart: string
  isCreatingCheckoutSession: boolean
  openCart: () => void
  closeCart: () => void
  removeItemCart: (Item) => void
  addNewItem: (Item) => void
  createCheckoutSession: () => void
}
interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [items, setItems] = useState<Item[]>([])
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const numberOfItems = items.length

  const totalPriceCart =
    items.reduce((total, item) => total + item.price.unitAmount, 0) / 100

  const formattedTotalPriceCart = formatCurrency.format(totalPriceCart)

  const openCart = () => {
    setIsCartVisible(true)
  }

  const closeCart = () => {
    setIsCartVisible(false)
  }

  function removeItemCart(item: Item) {
    setItems((state) => state.filter((itemCart) => itemCart.id === item.id))
  }

  function addNewItem(item: Item) {
    setItems((state) => [...state, item])
  }

  async function createCheckoutSession() {
    const products = items.map((item) => {
      return {
        price: item.defaultPriceId,
        quantity: 1,
      }
    })

    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products,
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <CartContext.Provider
      value={{
        isCartVisible,
        items,
        numberOfItems,
        formattedTotalPriceCart,
        isCreatingCheckoutSession,
        closeCart,
        openCart,
        removeItemCart,
        addNewItem,
        createCheckoutSession,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
