import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import LikeButton from './LikeButton'

describe('LikeButton', () => {
  test('increases the number of likes after clicking', async () => {
    const user = userEvent.setup()

    render(<LikeButton />)

    const button = screen.getByRole('button', { name: /like 0/i })

    await user.click(button)

    expect(
      screen.getByRole('button', { name: /like 1/i }),
    ).toBeInTheDocument()
  })
})