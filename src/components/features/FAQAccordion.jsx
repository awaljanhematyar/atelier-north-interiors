import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

function FAQItem({ question, answer }) {
  const id = useId()
  const [expanded, setExpanded] = useState(false)
  return (
    <article>
      <h3><button type="button" id={`${id}-question`} aria-expanded={expanded} aria-controls={`${id}-answer`} onClick={() => setExpanded(!expanded)}>
        {question}{expanded ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
      </button></h3>
      <div id={`${id}-answer`} aria-labelledby={`${id}-question`} hidden={!expanded}><p>{answer}</p></div>
    </article>
  )
}

export default function FAQAccordion({ items }) {
  return <div className="faq-list">{items.map(item => <FAQItem key={item.question} {...item} />)}</div>
}
