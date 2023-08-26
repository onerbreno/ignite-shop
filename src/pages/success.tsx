import Link from 'next/link'
import {
  ImageContainer,
  SuccessContainer,
  SuccessProductImages,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'
import { CartContext } from '../contexts/CartContext'
import { useEffect, useContext } from 'react'

interface Product {
  name: string
  imageUrl: string
}

interface SuccessProps {
  customerName: string
  products: Product[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearItems } = useContext(CartContext)

  useEffect(() => {
    clearItems()
  }, [clearItems])

  return (
    <>
      <Head>
        <title>Compra efetuada! | Ignite Shop</title>
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <SuccessProductImages>
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={140}
                height={140}
              />
            </ImageContainer>
          ))}
        </SuccessProductImages>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra{' '}
          {products.length !== 1 ? `de ${products.length} camisetas` : ''} já
          está a caminho da sua casa!
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map(({ price }) => {
    const itemProduct = price.product as Stripe.Product
    return {
      name: itemProduct.name,
      imageUrl: itemProduct.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
