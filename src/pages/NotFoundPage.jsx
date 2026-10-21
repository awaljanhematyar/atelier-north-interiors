import usePageTitle from '../hooks/usePageTitle.js'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Button from '../components/ui/Button.jsx'

export default function NotFoundPage() {
  usePageTitle('Page not found')
  return (
    <>
      <PageHeader eyebrow="404 / A little off plan" title="A space yet to be found." description="The page you’re looking for doesn’t exist. Let’s find your way back." />
      <Container className="not-found-actions">
        <Button to="/"><ArrowLeft size={16} aria-hidden="true" /> Return home</Button>
        <Button to="/projects" variant="outline">Explore projects <ArrowUpRight size={16} aria-hidden="true" /></Button>
      </Container>
    </>
  )
}
