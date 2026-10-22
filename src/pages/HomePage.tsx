import { Link } from 'react-router'

function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">WELCOME TO MY BLOG</p>

        <h1>
          Hi, I'm Zhansiya.
          <br />
          I write about learning and growth.
        </h1>

        <p className="hero-text">
          I'm a third-year IT Management student at KBTU. Here I share my
          thoughts about university life, web development, productivity,
          and my learning journey.
        </p>

        <div className="hero-actions">
          <Link to="/posts" className="primary-button">
            Explore my posts
          </Link>

          <Link to="/contact" className="secondary-button">
            Contact me
          </Link>
        </div>
      </section>

      <section className="topics-section">
        <div className="topic-card">
          <span className="topic-number">01</span>
          <h2>Web Development</h2>
          <p>
            My experience learning React, TypeScript, and modern web
            development.
          </p>
        </div>

        <div className="topic-card">
          <span className="topic-number">02</span>
          <h2>University</h2>
          <p>
            Thoughts and experiences from my life as an IT Management
            student.
          </p>
        </div>

        <div className="topic-card">
          <span className="topic-number">03</span>
          <h2>Productivity</h2>
          <p>
            Simple ideas about time management, studying, and personal
            growth.
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage