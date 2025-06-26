import data from "../data/data";

export const TestimonialSection = () => {
  const { counts, ratings, title, logos } = data.testimonialSection;

  return (
    <section className="testimonial-section-container">
      <div className="testimonial-wrapper">
        <div className="testimonial-main-section">
          <div className="testimonial-logo-fade-section">
            {Array(6)
              .fill(undefined)
              .map((_, colIndex) => (
                <div key={colIndex} className="fade-logo-coloumn">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                    />
                  ))}
                </div>
              ))}
          </div>
          <div className="testimonial-below-section">
            <div className="testimonial-below-section-left">
              <h2>
                <strong>{title}</strong>
              </h2>
              <div className="testimonial-home-row">
                {ratings.map((item, index) => (
                  <div key={index} className="testimonial-home-item">
                    <div className="rating-stars-wrapper">
                      {Array(item.stars)
                        .fill(undefined)
                        .map((_, i) => (
                          <img key={i} src="/star.svg" alt="star" />
                        ))}
                      {item.hasHalfStar && (
                        <img src="/halfstar.svg" alt="half" />
                      )}
                    </div>
                    <div className="rating-text-sec">
                      <h2>{item.score}</h2>
                      {item.platform}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial-below-section-right">
              <div className="customer-count-grid">
                {counts.map((item, i) => (
                  <div key={i} className="count-text-wrapper">
                    <h1>{item.number}</h1>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
