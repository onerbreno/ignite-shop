import { Container } from '../styles/pages/app'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Header } from '../components/Header'
import { Cart } from '../components/Cart'
import { CartContextProvider } from '../contexts/CartContext'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Cart />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
