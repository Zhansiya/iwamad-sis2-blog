import { Link } from 'react-router'

function HomePage() {
  return (
    <main className="editorial-home">
      <section className="editorial-hero">
        <div className="hero-top">
          <p className="eyebrow">PERSONAL BLOG / 2026</p>
          <p className="hero-small-text">
            IT Management student at KBTU
            <br />
            Almaty, Kazakhstan
          </p>
        </div>

        <div className="hero-title-area">
          <h1>
            Thoughts,
            <br />
            learning &
            <br />
            <em>growth.</em>
          </h1>

          <div className="hero-introduction">
            <span className="section-number">01.</span>

            <p>
              Hi, I'm Zhansiya. This is my personal space where I share
              my experience with university, web development, productivity,
              and the things I learn along the way.
            </p>

            <Link to="/posts" className="editorial-link">
              Explore my writing →
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-about">
        <div className="about-title">
          <span className="section-number">02.</span>
          <h2>About</h2>
        </div>

        <div className="about-content">
          <p className="about-large">
            Student, learner,
            <br />
            designer & developer.
          </p>

          <p>
            I'm a third-year IT Management student at KBTU. I enjoy
            combining technology, design, and management while learning
            how digital products are created.
          </p>
        </div>
      </section>

      <section className="editorial-topics">
        <div className="topics-heading">
          <span className="section-number">03.</span>
          <h2>What I write about</h2>
        </div>

        <div className="editorial-topic-grid">
          <article className="editorial-topic topic-dark">
            <span>01</span>

            <div>
              <h3>Web Development</h3>
              <p>
                React, TypeScript and my journey into modern web
                development.
              </p>
            </div>
          </article>

          <article className="editorial-topic topic-light">
            <span>02</span>

            <div>
              <h3>University</h3>
              <p>
                Experiences, challenges and thoughts from my life as an
                IT Management student.
              </p>
            </div>
          </article>

          <article className="editorial-topic topic-blue">
            <span>03</span>

            <div>
              <h3>Productivity</h3>
              <p>
                Time management, studying and finding better ways to
                organize everyday life.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="editorial-end">
        <div>
          <span className="section-number">04.</span>
          <h2>
            Read the
            <br />
            latest stories.
          </h2>
        </div>

        <div className="end-content">
          <p>
            A collection of thoughts about learning, technology,
            university life and personal growth.
          </p>

          <Link to="/posts" className="primary-button">
            View all posts
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage