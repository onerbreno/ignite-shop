import axios from 'axios'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { formatCurrency } from '../utils/formatCurrency'

import version from '@/package.json'

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
  clearItems: () => void
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

  useEffect(() => {
    const storedItems = localStorage.getItem(
      `ignite-shop:items-state-${version}`,
    )

    if (storedItems) {
      setItems(JSON.parse(storedItems))
    }
  }, [])

  const numberOfItems = items.length

  const totalPriceCart =
    items.reduce((total, item) => total + item.price.unitAmount, 0) / 100

  const formattedTotalPriceCart = formatCurrency.format(totalPriceCart)

  function updateLocalStorage(updatedItems) {
    const stateJSON = JSON.stringify(updatedItems)

    localStorage.setItem(`ignite-shop:items-state-${version}`, stateJSON)
  }

  const openCart = useCallback(async () => {
    setIsCartVisible(true)
  }, [])

  const closeCart = useCallback(async () => {
    setIsCartVisible(false)
  }, [])

  const removeItemCart = useCallback(async (item: Item) => {
    setItems((state) => {
      const updatedItems = state.filter(({ id }) => id !== item.id)

      updateLocalStorage(updatedItems)

      return updatedItems
    })
  }, [])

  const clearItems = useCallback(async () => {
    setItems([])
    updateLocalStorage([])
  }, [])

  const addNewItem = useCallback(
    async (newItem: Item) => {
      const isItemInCart = items.find(({ id }) => id === newItem.id)

      if (!isItemInCart) {
        setItems((state) => {
          const updatedItems = [...state, newItem]
          updateLocalStorage(updatedItems)

          return updatedItems
        })
      }
    },
    [items],
  )

  const createCheckoutSession = useCallback(async () => {
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
  }, [items])

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
        clearItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
