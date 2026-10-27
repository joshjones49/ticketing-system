import './Main.css'

import products from '../../database/products.json'

const productImages = import.meta.glob('../../database/images/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const formatPrice = (price, currency) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)

const Main = () => {
  return (
    <main className='main'>
      <header className='catalog-header'>
        <div>
          <p className='catalog-eyebrow'>CAPITAL TECH</p>
          <h1>Shop Products</h1>
          <p className='catalog-description'>Quality devices and accessories for work, home, and play.</p>
        </div>
        <span className='catalog-count'>{products.length} products</span>
      </header>

      <section className='product-grid' aria-label='Products'>
        {products.map((product) => (
          <article className='product-card' key={product.id}>
            <div className='product-image-wrap'>
              <img
                className='prod-img'
                src={productImages[`../../database/${product.image}`]}
                alt={product.image_alt}
              />
              <span className='product-condition'>{product.condition}</span>
            </div>
            <div className='product-details'>
              <p className='product-category'>{product.category}</p>
              <h2 className='product-name'>{product.name}</h2>
              <p className='product-description'>{product.description}</p>
              <div className='product-price-row'>
                <span className='product-price'>{formatPrice(product.price, product.currency)}</span>
                <span className='product-stock'>
                  {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Main
