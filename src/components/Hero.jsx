function Hero() {
  return (
    <div className="container bg-body-outline-secondary py-1">
      <div className="row align-items-center">
        <div className="border col-lg-6 col-md-6 col-sm-12">
          <h2 className="fw-bold">
            Find Your Perfect
            <span className="text-primary d-block">Companion</span>
          </h2>
          <p className="text-secondary my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <span className="d-block">
              Commodi saepe repellat perferendis deserunt maxime inventore?
            </span>
          </p>
          <div className="d-flex mb-2 gap-2">
            <button className="btn btn-primary rounded-5 px-4" type="button">
              Adopt a Pet
            </button>
            <button
              className="btn btn-outline-primary rounded-5 px-4"
              type="button"
            >
              Learn More
            </button>
          </div>
          <div>
            <div className="d-flex gap-4 py-4">
              <p>
                <span className="fs-5 fw-bold">50+</span>
                <small className="d-block text-secondary">Pets Available</small>
              </p>
              <p>
                <span className="fs-5 fw-bold">200+</span>
                <small className="d-block text-secondary">
                  Happy Adoptions
                </small>
              </p>
              <p>
                <span className="fs-5 fw-bold">15+</span>
                <small className="d-block text-secondary">
                  Years of Service
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="border col-lg-6 col-md-6 col-sm-12 justify-content-center mb-3">
          <img
            className="w-75 rounded-4"
            src="src/assets/animals.png"
            alt="Animals"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
