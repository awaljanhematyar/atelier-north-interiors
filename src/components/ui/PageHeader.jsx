import Container from './Container.jsx'

export default function PageHeader({ eyebrow, title, description, home = false }) {
  return (
    <section className={`page-header ${home ? 'page-header--home' : ''}`} aria-labelledby="page-title">
      <Container>
        <div className="page-header__meta"><p className="eyebrow">{eyebrow}</p><span className="edition-label">Atelier North / Portfolio</span></div>
        <h1 id="page-title" className="page-title">{title}</h1>
        <div className="page-header__bottom">
          <p className="page-description">{description}</p>
          <span className="decorative-mark" aria-hidden="true">AN<span>↗</span></span>
        </div>
      </Container>
    </section>
  )
}
