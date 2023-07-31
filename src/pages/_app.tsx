import { Container, Header } from '../styles/pages/app'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Image from 'next/image'

import logoImg from '../assets/logo.svg'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
