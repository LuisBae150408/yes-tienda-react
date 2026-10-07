import { Link } from 'react-router-dom'
import { catLabels } from '../data/catalog.js'
import { useTheme } from '../useTheme.js'
import logo from '../assets/logo.jpg'

const Icon = ({ children }) => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{children}</svg>
)

export default function Header() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  return (
    <header>
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="YES, ir al inicio">
          <img src={logo} alt="" className="logo-mark" />
        </Link>
        <nav className="main-nav">
          {Object.entries(catLabels).map(([slug, label]) => (
            <Link key={slug} to={`/tienda/${slug}`}>{label}</Link>
          ))}
        </nav>
        <div className="header-icons">
          <button className="icon-btn" onClick={toggle} title="Cambiar tema"
            aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
            <Icon>
              {dark
                ? <><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5 5 3.6 3.6M20.4 20.4 19 19M19 5l1.4-1.4M3.6 20.4 5 19" /><circle cx="12" cy="12" r="4.5" /></>
                : <path d="M21 12.5A8.5 8.5 0 1 1 11.5 3 7 7 0 0 0 21 12.5Z" />}
            </Icon>
          </button>
          <button className="icon-btn" aria-label="Buscar"><Icon><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Icon></button>
          <button className="icon-btn" aria-label="Bolsa de compras"><Icon><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></Icon></button>
        </div>
      </div>
    </header>
  )
}
