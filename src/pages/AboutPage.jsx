import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Photo, { ImageCredit } from '../components/ui/Photo.jsx'
import ConsultationCTA from '../components/features/ConsultationCTA.jsx'
import { projects } from '../data/projects.js'
import { values } from '../data/studio.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function AboutPage() {
  usePageTitle('About Atelier North')
  const image = projects[1]?.images?.[0]
  return <><PageHeader eyebrow="The studio, imagined" title="About Atelier North" description="A fictional Vancouver studio with a simple point of view: thoughtful interiors should feel personal, useful and quietly enduring." /><Container><section className="about-story section-space" aria-labelledby="story-title"><figure><Photo image={image} className="portrait-photo" /><figcaption><ImageCredit image={image} /></figcaption></figure><div><SectionHeading eyebrow="A sense of place" id="story-title">Rooted in the everyday.</SectionHeading><p className="lead-copy mt-6">Imagined between the coast and the city, Atelier North takes its cues from changing light, natural textures and the way people make a room their own.</p><p className="mt-5">The studio is a creative framework for this portfolio, not an operating design practice. Its concept studies ask a useful question: how can a space be both composed and comfortable enough to live in?</p><p className="mt-5">The answer begins with listening. A favourite chair, a busy morning, a place to work without distraction — these details can shape a brief more honestly than a passing trend.</p></div></section><section className="section-space section-border" aria-labelledby="values-title"><SectionHeading eyebrow="The point of view" id="values-title">A few things worth keeping.</SectionHeading><div className="values-grid">{values.map(value => <article key={value.title}><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></section><section className="editorial-intro section-space section-border" aria-labelledby="approach-title"><SectionHeading eyebrow="An integrated approach" id="approach-title">The room is<br />the whole story.</SectionHeading><div><p className="lead-copy">Layout, light and material belong in the same conversation.</p><p>A finish is considered alongside the daylight it receives. A furniture plan is considered alongside the route through the room. This portfolio explores those relationships through fictional briefs, without claiming professional credentials, awards or real client engagements.</p></div></section></Container><ConsultationCTA /></>
}
