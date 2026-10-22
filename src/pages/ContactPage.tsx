function ContactPage() {
  return (
    <main>
      <section className="simple-page">
        <p className="eyebrow">GET IN TOUCH</p>

        <h1>Contact Me</h1>

        <p className="simple-page-text">
          Have a question or just want to say hello? Feel free to send me
          a message.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={6}
              placeholder="Write your message..."
            />
          </div>

          <button type="submit" className="primary-form-button">
            Send message
          </button>
        </form>
      </section>
    </main>
  )
}

export default ContactPage