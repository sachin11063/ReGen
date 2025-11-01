import "./About.css";

const About = () => {
  return (
    <div className="container about-container mt-5 mb-5 p-5">
      
      <div className="row text-center about-heading">
        <h2>Community Solar Sharing: Empowering Sustainable Communities</h2>
      </div>
      <div className="row mt-5 fs-5 about-content-section">
        <div className="col-md-5 offset-md-1 about-text">
          <p>
            The <strong>Community Solar Sharing Platform</strong> is dedicated
            to enabling communities across India to invest collectively in solar
            energy projects. Our platform provides an accessible and affordable
            way for users to purchase shares in solar initiatives while offering
            transparent tracking of energy production, personal contributions,
            and environmental benefits.
          </p>
          <p>
            By integrating advanced technology with active community
            participation, we aim to foster sustainable energy adoption and
            environmental stewardship.
          </p>
        </div>

        <div className="col-md-5 about-text">
          <p>
            Our vision is to build a <strong>sustainable future</strong> by
            leveraging the collective power of community investments in
            renewable energy.
          </p>
          <p>
            We provide intuitive tools that help users monitor their impact and
            contribute meaningfully to a cleaner, greener world.
          </p>
          <p>
            Recognizing the critical role of renewable energy in addressing
            climate change, we are committed to making solar power accessible
            and beneficial for everyone.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="row text-center about-team mt-5">
        <div className="col-md-3 offset-md-1">
          <img
            className="about-image"
            src="src/assets/sachin.jpg"
            alt="Sachin"
          />
          <p className="team-name mt-3">Sachin</p>
        </div>

        <div className="col-md-3">
          <img
            className="about-image"
            src="src/assets/aman1.jpg"
            alt="Aman"
          />
          <p className="team-name mt-3">Aman</p>
        </div>

        <div className="col-md-3">
          <img
            className="about-image"
            src="src/assets/bibhash_hack.jpg"
            alt="Bibhash"
          />
          <p className="team-name mt-3">Bibhash</p>
        </div>
      </div>
    </div>
  );
};

export default About;
