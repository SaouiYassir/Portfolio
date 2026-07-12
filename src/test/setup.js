import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Dummy configuration used only by automated tests.
vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service_test')
vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template_test')
vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public_test')

afterEach(() => {
  cleanup()
  document.body.className = ''
  localStorage.clear()
  vi.clearAllMocks()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})