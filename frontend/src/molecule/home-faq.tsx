import data from "../data/data";

const { title, imgIcon, columns } = data.faqSection;

export const HomeFaq = () => {
  return (
    <section className="home-faq-container">
      <div className="home-faq-container-inner">
        <div className="home-faq-title-container">
          <div className="title-text">
            <h2>{title}</h2>
          </div>
          <span>
            <img src={imgIcon} alt="question-logo" />
          </span>
        </div>
        <div className="questioner-container">
          {columns.map((column, colIndex) => (
            <div className="first-column" key={colIndex}>
              {column.map((item, itemIndex) => (
                <div
                  className="first-column-row"
                  key={`${colIndex} ${itemIndex}`}
                >
                  <div className="first-column-row-container">
                    <h3>{item.question}</h3>
                    <span className="down-triangle-icon">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="icon-triangle"
                          data-src="https://web.archive.org/web/20250621150308/https://dashboard-cdn.rebrandly.com/styleguide-assets/icons/ic-chevron-down.svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="undefined"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
                            clip-rule="evenodd"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
