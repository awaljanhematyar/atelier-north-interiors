import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import AppLayout from './components/layout/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage.jsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage.jsx'))
const EnquiryPage = lazy(() => import('./pages/EnquiryPage.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="consultation" element={<EnquiryPage consultation />} />
        <Route path="contact" element={<EnquiryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
