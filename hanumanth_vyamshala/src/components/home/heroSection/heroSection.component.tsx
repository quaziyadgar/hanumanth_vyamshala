import "./heroSection.component.scss";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-section__container ">
        <h1 className="hero-section__title">Welcome to Hanumanth Vyaymshala</h1>
        <div className="col-lg-6 offset-lg-6">
          <p className="hero-section__description fw-bold">SHAPE YOUR BODY</p>
          <h2 className="fw-bold">BE STRONG</h2>
          <h2 className="fw-bold">TRAIN HARD</h2>
        </div>
      </div>
    </section>
  );
};
