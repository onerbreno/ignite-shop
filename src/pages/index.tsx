import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'

import { HomeContainer } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'
import { formatCurrency } from '../utils/formatCurrency'
import Head from 'next/head'
import { Product } from '../components/Product'

export interface Product {
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
interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return <Product key={product.id} product={product} />
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
      price: {
        formattedCurrency: formatCurrency.format(
          (price.unit_amount as number) / 100,
        ),
        unitAmount: price.unit_amount,
      },
      description: product.description,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
