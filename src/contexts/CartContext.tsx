import { ReactNode, createContext, useState } from 'react'

interface CartContextProps {
  openCart: () => void
  closeCart: () => void
  isCartVisible: boolean
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const openCart = () => {
    setIsCartVisible(true)
  }

  const closeCart = () => {
    setIsCartVisible(false)
  }

  return (
    <CartContext.Provider
      value={{
        closeCart,
        openCart,
        isCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
