export default function ContactUs() {
  return (
    <main>
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" required />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" required />

        <button type="submit">Send</button>
      </form>
    </main>
  );
}
