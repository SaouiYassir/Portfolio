import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import emailjs from '@emailjs/browser'
import ContactForm from './Form.jsx'

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}))

describe('ContactForm', () => {
  beforeEach(() => {
    emailjs.send.mockReset()
  })

  it('marks all form fields as required', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/^name$/i)).toBeRequired()
    expect(screen.getByLabelText(/email address/i)).toBeRequired()
    expect(screen.getByLabelText(/^subject$/i)).toBeRequired()
    expect(screen.getByLabelText(/project details/i)).toBeRequired()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()

    render(<ContactForm />)

    const emailInput = screen.getByLabelText(/email address/i)

    await user.type(emailInput, 'invalid-email')

    expect(emailInput).toBeInvalid()
  })

  it('does not send an incomplete form', async () => {
    const user = userEvent.setup()

    render(<ContactForm />)

    await user.click(
      screen.getByRole('button', {
        name: /send message/i,
      }),
    )

    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('sends a completed form successfully', async () => {
    const user = userEvent.setup()

    emailjs.send.mockResolvedValue({
      status: 200,
      text: 'OK',
    })

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/^name$/i), 'Yassir Saoui')

    await user.type(
      screen.getByLabelText(/email address/i),
      'yassir@example.com',
    )

    await user.type(
      screen.getByLabelText(/^subject$/i),
      'Website project',
    )

    await user.type(
      screen.getByLabelText(/project details/i),
      'I would like to discuss a new portfolio website.',
    )

    await user.click(
      screen.getByRole('button', {
        name: /send message/i,
      }),
    )

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1)
    })

    expect(
      await screen.findByText(/message has been sent successfully/i),
    ).toBeInTheDocument()
  })

  it('shows an error when EmailJS fails', async () => {
    const user = userEvent.setup()

    emailjs.send.mockRejectedValue(new Error('EmailJS failed'))

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/^name$/i), 'Yassir Saoui')

    await user.type(
      screen.getByLabelText(/email address/i),
      'yassir@example.com',
    )

    await user.type(
      screen.getByLabelText(/^subject$/i),
      'Website project',
    )

    await user.type(
      screen.getByLabelText(/project details/i),
      'I would like to discuss a new portfolio website.',
    )

    await user.click(
      screen.getByRole('button', {
        name: /send message/i,
      }),
    )

    expect(
      await screen.findByText(/could not send your message/i),
    ).toBeInTheDocument()
  })
})

const consoleErrorSpy = vi
  .spyOn(console, 'error')
  .mockImplementation(() => {})

consoleErrorSpy.mockRestore()