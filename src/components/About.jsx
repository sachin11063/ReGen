import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 about-quoat">
        <h3>
          Community Solar Sharing Platform: Uniting communities for a greener
          tomorrow
        </h3>
      </div>

      <div className="row mt-5 fs-5 mb-5 content-container">
        <div className="col-4 offset-1 about-content">
          <p style={{ textAlign: "justify" }}>
            Community Solar Sharing Platform is designed to empower communities
            in India to invest in shared solar energy projects. <br />
            <br />
            Our platform provides an accessible way for users to buy affordable
            shares in solar initiatives and track their energy
            production,contributions, and environ-mental impact. <br />
            <br />
            We combine innovative technology with community engagement to
            promote sustainable energy practices.
          </p>
        </div>
        <div className="col-4 offset-2 about-content">
          <p style={{ textAlign: "justify" }}>
            Our vision is to create a sustainable future by harnessing the
            collective power of community investments in renewable energy.{" "}
            <br />
            <br />
            We aim to provide tools that enable users to measure their impact
            while contributing to a cleaner environment. <br />
            <br />
            We recognize the importance of renewable energy in combating climate
            change and strive to make solar energy accessible for all.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-3 offset-1">
          <img
            className="about-image"
            src="src/assets/sachin.jpg"
            alt="Bangali"
          />
        </div>
        <div className="col-3">
          <img className="about-image" src="src/assets/aman1.jpg" alt="Aman" />
        </div>
        <div className="col-3">
          <img
            className="about-image"
            src="src/assets/bibhash_hack.jpg"
            alt="Harsh"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
