import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // State for projects section background color
  const [projectsBgColor, setProjectsBgColor] = useState("#4FA3FF");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  const themeColors = ["#FFD93D", "#8BD8F9", "#5495FF", "#FF6B6B", "#C8E0F6"];

  // Change the whole projects section background color when any project title is clicked
  const changeProjectsSectionColor = () => {
    setProjectsBgColor((prev) => {
      let newColor;
      do {
        newColor = themeColors[Math.floor(Math.random() * themeColors.length)];
      } while (newColor === prev);
      return newColor;
    });
  };

  const projects = [
    {
      id: 1,
      title: "Travel Bud",
      description: "Travel companion app for adventurers.",
      details: "Find companions, plan trips, and explore together.",
      image: "/images/TravelBud.png",
    },
    {
      id: 2,
      title: "JeepneyGo",
      description: "Real-time jeepney location monitoring and tracking app.",
      details: "See jeepney locations, arrival times, and routes.",
      image: "/images/JeepneyGo.png",
    },
    {
      id: 3,
      title: "Retro Movie Poster",
      description: "A Senior Highschool movie project.",
      details: "Inspired by 80s gaming aesthetics.",
      image: "/images/MoviePoster.png",
    },
  ];

  return (
    <div className="retro-bg">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg pixel-nav fixed-top">
        <div className="container">
          <a className="navbar-brand pixel-text" href="#portfolio">
            🎮 Richmond's Pokéfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link pixel-text" href="#portfolio">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pixel-text" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pixel-text" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Me */}
      <section
        id="portfolio"
        className="py-5 mt-5 pixel-border"
        style={{
          position: "relative",
          backgroundImage: "url('/images/Pokemon.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></div>

        <div
          className="container text-center position-relative"
          style={{ zIndex: 1 }}
        >
          <h2 className="pixel-text" style={{ fontSize: "2.5rem" }}>
            About Me
          </h2>

          <img
            src="/images/Profile.jpg"
            alt="Profile"
            className="rounded-circle my-3"
            width="300"
            height="300"
          />
          <p className="pixel-text">
            Hi! I'm a dev who loves retro pixel games & Pokémon. <br /> My
            mission? Turn ideas into fun, colorful, and interactive digital
            worlds.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-5"
        style={{
          backgroundColor: projectsBgColor,
          transition: "background-color 0.5s ease",
        }}
      >
        <div className="container">
          <h2 className="text-center mb-4 pixel-text">Projects</h2>
          <div className="row g-4">
            {projects.map((proj) => (
              <div className="col-md-4" key={proj.id}>
                <div className="card h-100 pixel-border">
                  <img
                    src={proj.image}
                    className="card-img-top pixel-image"
                    alt={proj.title}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title pixel-text"
                      style={{ cursor: "pointer" }}
                      onClick={changeProjectsSectionColor}
                      title="Click to change projects section color"
                    >
                      {proj.title}
                    </h5>
                    <p className="card-text pixel-text">{proj.description}</p>
                    <button
                      className="btn pixel-btn pokedex-btn"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal${proj.id}`}
                    >
                      Pokédex Entry
                    </button>
                  </div>
                </div>

                {/* Modal */}
                <div
                  className="modal fade"
                  id={`modal${proj.id}`}
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content pixel-border">
                      <div className="modal-header">
                        <h5 className="modal-title pixel-text">{proj.title}</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body pixel-text">
                        <p>{proj.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section
  id="contact"
  className="py-5 pixel-border"
  style={{
    backgroundImage: "url('/images/background.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }}
>
  <div className="contact-bg-overlay"></div>
  <div className="container">
    <h2 className="text-center mb-4 pixel-text">Contact Me</h2>
    <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
      <div className="mb-3">
        <label className="form-label pixel-text">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control pixel-input"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label pixel-text">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control pixel-input"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label pixel-text">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="form-control pixel-input"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn pixel-btn">
        Send Message
      </button>
    </form>
  </div>
</section>


      {/* Footer */}
      <footer className="pixel-nav text-light text-center py-3">
        <p className="pixel-text">
          &copy; {new Date().getFullYear()} Richmond's Pokéfolio
        </p>
      </footer>
    </div>
  );
}