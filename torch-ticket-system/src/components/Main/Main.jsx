import './Main.css'

import products from '../../database/products.json'

const productImages = import.meta.glob('../../database/images/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const Main = () => {
  return (
    <div className='main'>
      {
        products.map((product, index) => (
          <div className='products' key={index}>
            <img className='prod-img' src={productImages[`../../database/${product.image}`]} alt={product.image_alt} />
            <h1>{product.name}</h1>
            <h2>{product.year_made}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Main
