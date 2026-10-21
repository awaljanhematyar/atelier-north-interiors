import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'
import { pageSkeletons } from '../data/pageSkeletons.js'


export default function RoutePage({ page }) {
  const content = pageSkeletons[page]
  const { slug } = useParams()
  useEffect(() => { document.title = `${page === 'home' ? 'Spaces That Tell Your Story' : content.title} | Atelier North Interiors` }, [page, content.title])
  return (
    <>
      <PageHeader {...content} home={page === 'home'} />
      <Container>
        <EmptyState title={content.status}>{content.note}{slug && <span className="mt-3 block break-words text-xs">Requested project: {slug}</span>}</EmptyState>
      </Container>
    </>
  )
}
