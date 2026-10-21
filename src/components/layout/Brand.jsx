import { Link } from 'react-router-dom'

export default function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" aria-label="Atelier North Interiors — Home" onClick={onClick}>
      <span className="brand__name">atelier north<span aria-hidden="true">.</span></span>
      <span className="brand__descriptor">Interiors · Vancouver</span>
    </Link>
  )
}
