import { ReactNode, createContext, useState } from 'react'

interface Item {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface CartContextProps {
  items: Item[]
  isCartVisible: boolean
  itemCount: number
  openCart: () => void
  closeCart: () => void
  removeItemCart: (Item) => void
  addNewItem: (Item) => void
}
interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [items, setItems] = useState<Item[]>([])
  const itemCount = items.length

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

  return (
    <CartContext.Provider
      value={{
        closeCart,
        openCart,
        isCartVisible,
        items,
        itemCount,
        removeItemCart,
        addNewItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
