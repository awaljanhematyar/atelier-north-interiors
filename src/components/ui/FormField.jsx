import { useId } from 'react'

export default function FormField({ label, name, value, onChange, error, as = 'input', children, hintId, className = '', ...props }) {
  const id = useId()
  const Control = as
  const errorId = `${id}-error`
  return (
    <div className={className}>
      <label htmlFor={id}>{label} <span>(required)</span></label>
      <Control id={id} name={name} value={value} onChange={onChange} required aria-invalid={error ? 'true' : undefined} aria-describedby={[hintId, error ? errorId : null].filter(Boolean).join(' ') || undefined} {...props}>{children}</Control>
      {error && <p className="field-error" id={errorId}><span aria-hidden="true">! </span>{error}</p>}
    </div>
  )
}
