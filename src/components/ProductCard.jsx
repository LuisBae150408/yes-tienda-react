// Un componente = una función que recibe "props" y devuelve JSX.
export default function ProductCard({ img, tag, name, price }) {
  return (
    <div className="product-card">
      <div className="product-thumb" style={{ backgroundImage: `url('${img}')` }}>
        {tag && <span className="product-tag">{tag}</span>}
      </div>
      <h4>{name}</h4>
      <span className="price">{price}</span>
    </div>
  )
}
