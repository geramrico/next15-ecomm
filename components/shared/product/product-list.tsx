import ProductCard from './product-card'
import { Product } from '@/types'

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[]
  title?: string //optional
  limit?: number //optional
}) => {
  /* Only show data up to limit */
  const limitedData = limit ? data.slice(0, limit) : data
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{title}</h2>
      {/* Conditionally show product list of there's data */}
      {data.length > 0 ? (
        /* more columns with bigger screen size, less than sm is 1 col */
        <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  )
}

export default ProductList
