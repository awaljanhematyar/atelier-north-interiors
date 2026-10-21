import SectionHeading from './SectionHeading.jsx'

export default function EmptyState({ title, children }) {
  return (
    <section className="empty-state" aria-labelledby="content-status">
      <div className="empty-state__drawing" aria-hidden="true"><span /><span /><span /></div>
      <div className="max-w-xl">
        <SectionHeading eyebrow="In preparation" id="content-status">{title}</SectionHeading>
        <p className="mt-4 text-sm leading-7">{children}</p>
      </div>
    </section>
  )
}
