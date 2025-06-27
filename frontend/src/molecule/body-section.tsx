import data from "../data/data";
import type { ParagraphWithLinks } from "../data/types";

const renderParagraph = (content: ParagraphWithLinks) => {
  if (content.parts) {
    return content.parts.map((part, index) =>
      part.isLink ? (
        <a key={index} href={part.url}>
          {part.text}
        </a>
      ) : (
        <span key={index}>{part.text}</span>
      )
    );
  }
  return (
    <>
      {content.beforeLink}
      <a href={content.link?.url}>{content.link?.text}</a>
      {content.afterLink}
    </>
  );
};

export const BodySection = () => {
  const { content, images } = data.bodySection;

  return (
    <section className="contact-banner">
      <div className="contact-banner-left">
        <div className="container">
          <h2>{content.title1}</h2>
          <p>{renderParagraph(content.paragraph1)}</p>
          <h2>{content.title2}</h2>
          <p>{content.paragraph2}</p>
          <p className="paragraph-dark-left">
            {renderParagraph(content.paragraph3)}
          </p>
        </div>
      </div>
      <div className="container-banner-right">
        <div className="container-right">
          <div className="phone-image-div">
            <span>
              <img src={images.phoneImage} alt="Phone illustration" />
            </span>
          </div>
          <div className="contact-details-container">
            <p>
              Experience the{" "}
              <strong>
                {" "}
                benefits of link <br /> management{" "}
              </strong>{" "}
              for your business
            </p>
            <div className="details-btns">
              <a href="" className="try-btn">
                <button>Try Rebrandly</button>
              </a>
              <a href="" className="talk-sales">
                <button>Talk to Sales</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
