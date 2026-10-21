import { useRef, useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { categories } from '../../data/projects.js'
import { timeWindows, validateEnquiry, vancouverToday } from '../../utils/validation.js'
import FormField from '../ui/FormField.jsx'
import Button from '../ui/Button.jsx'

const emptyValues = () => ({ name: '', email: '', category: '', date: '', time: '', message: '', acknowledgment: false })

export default function DemoEnquiryForm({ consultation = false }) {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [completed, setCompleted] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const submitted = useRef(false)
  const focusAfterReset = useRef(false)
  const acknowledgmentId = 'demo-acknowledgment'
  const today = vancouverToday()

  function update(event) {
    const { name, type, checked, value } = event.target
    setValues(current => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function submit(event) {
    event.preventDefault()
    if (submitted.current) return
    const nextErrors = validateEnquiry(values, { consultation, categories: categories.map(category => category.id), today: vancouverToday() })
    setErrors(nextErrors)
    setAttempt(current => current + 1)
    if (Object.keys(nextErrors).length) {
      // Focus the first invalid control without discarding any typed input.
      event.currentTarget.elements.namedItem(Object.keys(nextErrors)[0])?.focus()
      return
    }
    submitted.current = true
    setValues(emptyValues())
    setCompleted(true)
  }

  function reset() {
    focusAfterReset.current = true
    submitted.current = false
    setCompleted(false)
    setValues(emptyValues())
    setErrors({})
    setAttempt(0)
  }

  if (completed) {
    return (
      <section className="form-success" aria-labelledby="success-title" ref={element => element?.focus()} tabIndex={-1}>
        <Check size={28} aria-hidden="true" />
        <h3 id="success-title">Demo complete.</h3>
        <p role="status">{consultation ? 'This is a demo. No appointment has been booked.' : 'This is a demo. No message has been delivered.'}</p>
        <p>No email was sent. Your entries have been cleared and were not stored or sent to a server.</p>
        <Button className="mt-6" onClick={reset}>Start again</Button>
      </section>
    )
  }

  const field = (name, label, props = {}) => <FormField key={name} name={name} label={label} value={values[name]} onChange={update} error={errors[name]} {...props} />
  return (
    <form ref={element => { if (element && focusAfterReset.current) { element.elements.namedItem('name')?.focus(); focusAfterReset.current = false } }} aria-labelledby="form-title" aria-describedby={consultation ? 'form-demo-note timezone-note' : 'form-demo-note'} noValidate onSubmit={submit} autoComplete="off">
      {Object.keys(errors).length > 0 && <div className="form-error-summary" role="alert" key={attempt}><strong>Please check the highlighted fields.</strong><p>{Object.keys(errors).length} {Object.keys(errors).length === 1 ? 'field needs' : 'fields need'} attention. Your entries have been kept.</p></div>}
      <div className="form-grid">
        {field('name', 'Full name', { maxLength: 120 })}
        {field('email', 'Email address', { type: 'email', maxLength: 254 })}
        {field('category', 'Project category', { as: 'select', className: 'form-full', children: <><option value="">Choose a project category</option>{categories.map(category => <option value={category.id} key={category.id}>{category.label}</option>)}</> })}
        {consultation && <>
          {field('date', 'Preferred date', { type: 'date', min: today, max: '9999-12-31', hintId: 'timezone-note' })}
          {field('time', 'Preferred time window', { as: 'select', hintId: 'timezone-note', children: <><option value="">Choose a preference</option>{timeWindows.map(window => <option key={window.value} value={window.value}>{window.label}</option>)}</> })}
        </>}
        {field('message', consultation ? 'Project brief' : 'Message', { as: 'textarea', rows: 5, className: 'form-full', maxLength: 5000 })}
        <div className="form-full">
          <label className="acknowledgment" htmlFor={acknowledgmentId}>
            <input id={acknowledgmentId} name="acknowledgment" type="checkbox" checked={values.acknowledgment} onChange={update} required aria-invalid={errors.acknowledgment ? 'true' : undefined} aria-describedby={errors.acknowledgment ? 'acknowledgment-error' : undefined} />
            <span>I understand this is a fictional demo. No {consultation ? 'appointment is booked' : 'message is delivered'}, and my details are not stored or sent. (required)</span>
          </label>
          {errors.acknowledgment && <p className="field-error" id="acknowledgment-error">{errors.acknowledgment}</p>}
        </div>
      </div>
      <Button type="submit" className="mt-6">Try the {consultation ? 'consultation' : 'enquiry'} demo <ArrowRight size={16} aria-hidden="true" /></Button>
      <Button variant="outline" className="mt-6 ml-3" onClick={reset}>Clear form</Button>
    </form>
  )
}
