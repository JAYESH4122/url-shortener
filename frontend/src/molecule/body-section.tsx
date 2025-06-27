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
  const { description, buttons } = data.contactDetails;

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
              {description.prefix}
              <strong>
                {" "}
                {description.emphasized.text
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")}{" "}
                <br />
                {description.emphasized.text.split(" ").slice(3).join(" ")}{" "}
              </strong>
              {description.suffix}
            </p>
            <div className="details-btns">
              <a href="#" className={buttons.try.className}>
                <button>{buttons.try.text}</button>
              </a>
              <a href="#" className={buttons.sales.className}>
                <button>{buttons.sales.text}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
