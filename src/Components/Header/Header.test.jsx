import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
    MemoryRouter,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom'

import Header from './Header.jsx'

function LocationDisplay() {
    const location = useLocation()

    return <span data-testid="current-location">{location.pathname}</span>
}

function renderHeader(initialRoute = '/') {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Header />

            <Routes>
                <Route path="*" element={<LocationDisplay />} />
            </Routes>
        </MemoryRouter>,
    )
}

describe('Header', () => {
    it('navigates to the projects page', async () => {
        const user = userEvent.setup()

        renderHeader()

        const mainNavigation = screen.getByRole('navigation', {
            name: /main navigation/i,
        })

        const projectsLink = within(mainNavigation).getByRole('link', {
            name: /projects/i,
        })

        await user.click(projectsLink)

        expect(screen.getByTestId('current-location')).toHaveTextContent(
            '/projects',
        )

        expect(projectsLink).toHaveAttribute('aria-current', 'page')
    })

    it('shows the current page as active', () => {
        renderHeader('/about')

        const mainNavigation = screen.getByRole('navigation', {
            name: /main navigation/i,
        })

        const aboutLink = within(mainNavigation).getByRole('link', {
            name: /about/i,
        })

        expect(aboutLink).toHaveAttribute('aria-current', 'page')
    })

    it('switches to dark mode and saves the preference', async () => {
        const user = userEvent.setup()

        localStorage.setItem('theme', 'light')

        renderHeader()

        const themeButton = screen.getByRole('button', {
            name: /switch to dark mode/i,
        })

        await user.click(themeButton)

        expect(document.body).toHaveClass('dark-mode')
        expect(localStorage.getItem('theme')).toBe('dark')

        expect(themeButton).toHaveAccessibleName(/switch to light mode/i)
    })

    it('restores the saved dark theme', () => {
        localStorage.setItem('theme', 'dark')

        renderHeader()

        expect(document.body).toHaveClass('dark-mode')

        expect(
            screen.getByRole('button', {
                name: /switch to light mode/i,
            }),
        ).toBeInTheDocument()
    })
})