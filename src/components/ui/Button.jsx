import { Link } from 'react-router-dom'

export default function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const classes = `button button--${variant} ${className}`
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>
  return <button type="button" className={classes} {...props}>{children}</button>
}
