import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import ProjectDetail from './ProjectDetail.jsx'
import { PROJECTS } from '../../../Data/Projects.js'

function renderProjectRoute(path) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  )
}

describe('ProjectDetail routing', () => {
  it('renders a valid project route', () => {
    const project = PROJECTS[0]

    renderProjectRoute(`/projects/${project.slug}`)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: project.title,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(project.pitch)).toBeInTheDocument()
  })

  it('renders the invalid-project page for an unknown slug', () => {
    renderProjectRoute('/projects/project-that-does-not-exist')

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /project not found/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /view all projects/i,
      }),
    ).toHaveAttribute('href', '/projects')
  })
})