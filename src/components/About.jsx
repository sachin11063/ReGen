import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 about-quoat">
        <h3>
          Community Solar Sharing Platform: Empowering Communities for a Sustainable Future
        </h3>
      </div>

      <div className="row mt-5 fs-5 mb-5 content-container">
        <div className="col-4 offset-1 about-content">
          <p style={{ textAlign: "justify" }}>
            The Community Solar Sharing Platform is dedicated to enabling communities across India to invest collectively in solar energy projects. <br />
            <br />
            Our platform offers an accessible and affordable way for users to purchase shares in solar initiatives, while providing transparent tracking of energy production, individual contributions, and environmental benefits. <br />
            <br />
            By integrating advanced technology with active community participation, we strive to foster sustainable energy adoption and environmental stewardship.
          </p>
        </div>
        <div className="col-4 offset-2 about-content">
          <p style={{ textAlign: "justify" }}>
            Our vision is to build a sustainable future by leveraging the collective power of community investments in renewable energy. <br />
            <br />
            We provide users with intuitive tools to monitor their impact and contribute meaningfully to a cleaner, greener environment. <br />
            <br />
            Recognizing the critical role of renewable energy in addressing climate change, we are committed to making solar power accessible and beneficial for all.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-3 offset-1">
          <img
            className="about-image"
            src="src/assets/sachin.jpg"
            alt="Sachin"
          />
        </div>
        <div className="col-3">
          <img className="about-image" src="src/assets/aman1.jpg" alt="Aman" />
        </div>
        <div className="col-3">
          <img
            className="about-image"
            src="src/assets/bibhash_hack.jpg"
            alt="Bibhash"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
