import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'
import { formatCurrency } from '../utils/formatCurrency'
import Head from 'next/head'
import { Handbag } from '@phosphor-icons/react'
import { MouseEvent, useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { openCart, addNewItem } = useContext(CartContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    openCart()
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button
                  onClick={() => {
                    addNewItem(product)
                    return handleClick
                  }}
                >
                  <Handbag size={24} weight="bold" />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatCurrency.format((price.unit_amount as number) / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
