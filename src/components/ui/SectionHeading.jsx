export default function SectionHeading({ eyebrow, children, id }) {
  return <div>{eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}<h2 id={id} className="section-title">{children}</h2></div>
}
