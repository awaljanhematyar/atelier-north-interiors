import { Link } from 'react-router-dom'

export default function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick}>
      <span className="brand__name">atelier north<span aria-hidden="true">.</span></span>
      <span className="brand__descriptor">Interiors · Vancouver</span>
      <span className="sr-only"> — Home</span>
    </Link>
  )
}
