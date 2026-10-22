import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import ContactPage from './pages/ContactPage'
import PostPage from './pages/PostPage'
import NotFoundPage from './pages/NotFoundPage'
import SignInPage from './pages/SignInPage'
import SavedPage from './pages/SavedPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />

      <Route path="signin" element={<SignInPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="saved" element={<SavedPage />} />
      </Route>

    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
  )
}

export default App