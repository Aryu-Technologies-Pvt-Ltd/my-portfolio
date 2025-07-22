export default function About() {
  return (
    <section className="fade-in about-section">
      <h2>About Me</h2>
      <img
        className="profile"
        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=250&q=80"
        alt="Portrait"
      />
      <p>
        I am a passionate Full Stack Developer experienced with React, Node.js
        and databases.
      </p>
      <ul className="skills">
        <li>Frontend: React, Next.js, TypeScript</li>
        <li>Backend: Node.js, Express</li>
        <li>Database: PostgreSQL, MongoDB</li>
      </ul>
    </section>
  );
}
