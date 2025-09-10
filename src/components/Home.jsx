import "./Home.css";

const Home = () => {
  return (
    <div className="container mt-5 p-2 mb-5">
      <div className="row">
        <div className="col-5 offset-0 mt-5">
          <p className="mb-4 Home-Heading ">SolarSync Platform</p>
          <p className="Home-description">
            Join the community-driven solar energy revolution! Invest in shared
            solar projects, track your energy savings, and monitor your positive
            environmental impact. Be a part of sustainable growth by supporting
            renewable energy adoption and making a difference in reducing carbon
            emissions.
          </p>
          <button type="button" class="btn  btn-outline-danger mt-3 ">
            Sign up
          </button>
        </div>

        <div className="col-4 offset-3">
          <img
            src="src/assets/Home.jpg"
            alt="Hero Photo"
            className="Home-img"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
