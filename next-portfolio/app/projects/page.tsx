export default function Projects() {
  return (
    <section className="fade-in">
      <h2>Projects</h2>
      <article className="project">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
          alt="Project One screenshot"
        />
        <h3>Project One</h3>
        <p>
          A web application built with React and Node.js that provides real-time
          data visualization.
        </p>
      </article>
      <article className="project">
        <img
          src="https://images.unsplash.com/photo-1522199780097-ffc7f79d2170?auto=format&fit=crop&w=600&q=80"
          alt="Project Two screenshot"
        />
        <h3>Project Two</h3>
        <p>
          An e-commerce platform with a custom API and secure user authentication.
        </p>
      </article>
    </section>
  );
}
