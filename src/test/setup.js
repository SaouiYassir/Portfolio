import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Clean the rendered DOM after every test.
afterEach(() => {
  cleanup()
  document.body.className = ''
  localStorage.clear()
  vi.clearAllMocks()
})

// jsdom does not provide matchMedia by default.
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

// jsdom does not fully implement scrolling.
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})