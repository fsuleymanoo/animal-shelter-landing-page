function Hero() {
  return (
    <div className="container-fluid bg-light ">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center g-3">
            <div className="col-6-lg col-md-5">
              <h1 className="fw-bold">
                Find Your Perfect
                <span className="text-primary"> Companion</span>
              </h1>
              <p className="text-secondary my-4">
                Every pet in our shelter has a story and is waiting for a loving
                forever home. Start your journey of pet adoption today.
              </p>
              <div className="d-flex mb-2 gap-2">
                <button
                  className="btn btn-primary rounded-5 px-4"
                  type="button"
                >
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
                    <small className="d-block text-secondary">
                      Pets Available
                    </small>
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

            <div className="col-md-5 col-lg-4 py-5 px-1 ms-4 hide-on-small">
              <img
                className="w-100 rounded-4"
                src="src/assets/animals.png"
                alt="Animals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
