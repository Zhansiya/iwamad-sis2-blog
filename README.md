# Zhansiya's Blog

A responsive personal blog built with React and TypeScript for SIS Assignment 2.

## Features

- React + TypeScript
- React Router
- Responsive design
- 5 blog posts rendered from a typed array
- Dynamic post routes using `/posts/:id`
- Independent Like buttons using local state
- Custom 404 page
- Simulated authentication
- Protected `/saved` route
- Responsive layout for desktop and mobile

## Pages

- Home
- Posts
- Individual Post
- Contact
- Sign In
- Saved Posts
- 404 Page

## Protected Route

The `/saved` page is protected.

A signed-out user who tries to access `/saved` is redirected to `/signin`.

After signing in, the user can access the Saved Posts page and sign out again.

## Tests

The project includes 3 automated tests:

1. LikeButton interaction test
2. PostsPage rendering test
3. ProtectedRoute redirect test

Run tests with:

```bash
npm test

## Site

https://zhansiya.github.io/iwamad-sis2-blog/