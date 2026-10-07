import { Link } from 'react-router-dom'
import { catLabels } from '../data/catalog.js'
import logo from '../assets/logo.jpg'

// Datos de las columnas de ayuda y marca: así el JSX solo recorre arreglos (map)
const ayuda = ['Envíos', 'Cambios y devoluciones', 'Guía de tallas', 'Contacto']
const marca = ['Sobre nosotros', 'Sustentabilidad', 'Instagram', 'TikTok']

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo"><img src={logo} alt="" className="logo-mark" /></div>
            <p>Ropa, maquillaje, accesorios y perfumes en un mismo lugar, con una estética limpia y sin ruido.</p>
          </div>
          <div>
            <h5>TIENDA</h5>
            <ul>
              {Object.entries(catLabels).map(([slug, label]) => (
                <li key={slug}><Link to={`/tienda/${slug}`}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>AYUDA</h5>
            <ul>{ayuda.map((t) => <li key={t}><a href="#/">{t}</a></li>)}</ul>
          </div>
          <div>
            <h5>MARCA</h5>
            <ul>{marca.map((t) => <li key={t}><a href="#/">{t}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 YES. Todos los derechos reservados.</span>
          <span>Borrador de diseño — contenido de ejemplo</span>
        </div>
      </div>
    </footer>
  )
}
