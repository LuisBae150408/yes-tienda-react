import { Link } from 'react-router-dom'
import { catalog, catLabels } from '../data/catalog.js'

const Chevron = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m9 6 6 6-6 6" /></svg>
)

export default function Home() {
  const cats = Object.entries(catLabels)

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <h1 className="sr-only">YES — ropa, calzado, accesorios, maquillaje y perfumes</h1>
          <div className="btn-row"><Link to="/tienda" className="btn btn-solid">Ver colección</Link></div>
          <div className="hero-cats">
            <div className="shop-rows">
              {cats.map(([slug, label]) => (
                <Link key={slug} className="shop-row" to={`/tienda/${slug}`}><span>{label}</span><Chevron /></Link>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-visual"><div className="badge">NUEVA<br />TEMPORADA</div></div>
      </section>

      <section className="categories" id="categorias">
        <div className="wrap">
          <div className="section-head"><h2 className="display">Compra por categoría</h2></div>
          <div className="cat-grid">
            {cats.map(([slug, label]) => (
              <Link key={slug} className="cat-tile" to={`/tienda/${slug}`}
                style={{ backgroundImage: `url('${catalog[slug].novedades[0].img}')` }}>
                <div><h3>{label}</h3><span className="link">Ver todo</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h3 className="display">Únete a la lista</h3>
        <p>Novedades de colección y acceso anticipado a lanzamientos.</p>
        {/* TODO: conectar a un backend (PHP + MySQL) para guardar los correos */}
        <form className="news-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Tu correo electrónico" required />
          <button className="btn btn-solid" type="submit">Suscribirme</button>
        </form>
      </section>
    </main>
  )
}
