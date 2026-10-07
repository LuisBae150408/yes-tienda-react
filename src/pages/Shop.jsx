import { Link, useParams } from 'react-router-dom'
import { catalog, catLabels, subcats, slugify } from '../data/catalog.js'
import ProductCard from '../components/ProductCard.jsx'

const Chevron = ({ left }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d={left ? 'm15 18-6-6 6-6' : 'm9 6 6 6-6 6'} />
  </svg>
)

export default function Shop() {
  const { categoria } = useParams()           // /tienda/:categoria
  const enCategoria = categoria && catalog[categoria]
  const irA = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <div className="wrap" style={{ paddingTop: 38 }}>
        <Link to="/" style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>‹ Volver al inicio</Link>
      </div>
      <section className="products" id="productos">
        <div className="wrap">
          {!enCategoria ? (
            <>
              <div className="section-head">
                <h2 className="display">Comprar por categoría</h2>
                <p className="muted">Elige una categoría para ver los productos disponibles.</p>
              </div>
              <div className="shop-rows">
                {Object.entries(catLabels).map(([slug, label]) => (
                  <Link key={slug} className="shop-row" to={`/tienda/${slug}`}><span>{label}</span><Chevron /></Link>
                ))}
              </div>
            </>
          ) : (
            <div className="shop-detail">
              <div className="shop-detail-head">
                <Link className="shop-back" to="/tienda"><Chevron left /> Categorías</Link>
                <h3 className="display">{catLabels[categoria]}</h3>
              </div>
              <div className="shop-jump">
                {subcats.map((s) => (
                  <a key={s} href="#/" onClick={(e) => { e.preventDefault(); irA(`${categoria}-${slugify(s)}`) }}>{s}</a>
                ))}
              </div>
              {subcats.map((s) => {
                const key = slugify(s)
                return (
                  <div key={key} className="collection-block" id={`${categoria}-${key}`}>
                    <h4 className="collection-title">{s}</h4>
                    <div className="product-grid">
                      {(catalog[categoria][key] || []).map((p, i) => <ProductCard key={i} {...p} />)}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
