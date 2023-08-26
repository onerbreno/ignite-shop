import { CartContext } from '@/src/contexts/CartContext'
import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import { useContext, MouseEvent } from 'react'
import { ProductContainer } from './styles'
import { Product } from '@/src/pages'

interface ProductProps {
  product: Product
}

export function Product({ product }: ProductProps) {
  const { addNewItem } = useContext(CartContext)

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    addNewItem(product)
  }

  return (
    <ProductContainer
      key={product.id}
      href={`/product/${product.id}`}
      className="keen-slider__slide"
      prefetch={false}
    >
      <Image src={product.imageUrl} width={520} height={480} alt="" />
      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{product.price.formattedCurrency}</span>
        </div>
        <button onClick={handleClick}>
          <Handbag size={24} weight="bold" />
        </button>
      </footer>
    </ProductContainer>
  )
}
