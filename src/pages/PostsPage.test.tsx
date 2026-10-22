import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import PostsPage from './PostsPage'

describe('PostsPage', () => {
  test('renders blog posts', () => {
    render(
      <MemoryRouter>
        <PostsPage />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        name: 'How I Manage My University Time',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'Balancing Study and Personal Life',
      }),
    ).toBeInTheDocument()
  })
})