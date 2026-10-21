import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import RoutePage from './pages/RoutePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<RoutePage page="home" />} />
        <Route path="projects" element={<RoutePage page="projects" />} />
        <Route path="projects/:slug" element={<RoutePage page="project" />} />
        <Route path="services" element={<RoutePage page="services" />} />
        <Route path="about" element={<RoutePage page="about" />} />
        <Route path="testimonials" element={<RoutePage page="testimonials" />} />
        <Route path="consultation" element={<RoutePage page="consultation" />} />
        <Route path="contact" element={<RoutePage page="contact" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
