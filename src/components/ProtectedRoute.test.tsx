import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from '../context/AuthContext'

describe('ProtectedRoute', () => {
  test('redirects signed out users to the sign in page', () => {
    render(
      <MemoryRouter initialEntries={['/saved']}>
        <AuthProvider>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/saved" element={<h1>Saved Posts</h1>} />
            </Route>

            <Route path="/signin" element={<h1>Sign In</h1>} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: 'Sign In' }),
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: 'Saved Posts' }),
    ).not.toBeInTheDocument()
  })
})
