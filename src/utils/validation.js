export const timeWindows = [
  { value: 'morning', label: 'Morning · 9 am–12 pm' },
  { value: 'afternoon', label: 'Afternoon · 1–5 pm' },
]

export function vancouverToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Vancouver', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const part = name => parts.find(item => item.type === name).value
  return `${part('year')}-${part('month')}-${part('day')}`
}

export function validCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const [year, month, day] = value.split('-').map(Number)
  if (year < 1 || year > 9999 || month < 1 || month > 12 || day < 1) return false
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
  return day <= [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]
}

export function validateEnquiry(values, { consultation = false, categories = [], today = vancouverToday() } = {}) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your full name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(values.email.trim())) errors.email = 'Enter a valid email address, such as name@example.com.'
  if (!categories.includes(values.category)) errors.category = 'Choose a project category.'
  if (consultation) {
    if (!values.date) errors.date = 'Choose a preferred date.'
    else if (!validCalendarDate(values.date)) errors.date = 'Enter a valid calendar date.'
    else if (values.date < today) errors.date = 'Choose today or a future date in Vancouver.'
    if (!timeWindows.some(window => window.value === values.time)) errors.time = 'Choose a preferred time window.'
  }
  if (!values.message.trim()) errors.message = consultation ? 'Enter a short project brief.' : 'Enter your message.'
  if (!values.acknowledgment) errors.acknowledgment = 'Acknowledge that this is a demo and nothing will be sent or booked.'
  return errors
}
