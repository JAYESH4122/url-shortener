import { Button } from "../atom/Button";
import data from "../data/data";
import type { ParagraphWithLinks } from "../data/types";

const renderTextWithLinks = (content: ParagraphWithLinks) => {
  return content.parts?.map((part, index) => {
    if (part.isLink) {
      return (
        <a
          key={index}
          href={part.url}
          title={"title" in part ? part.title : ""}
          rel="noreferrer noopener"
        >
          {part.text}
        </a>
      );
    }
    return <span key={index}>{part.text}</span>;
  });
};

export const HeaderBelowSection = () => {
  const { headerBelow } = data;

  return (
    <section className="header-below">
      <h1 className="title">{headerBelow.title}</h1>
      <div className="main-search-div">
        <div className="search-bar-div">
          <h2>{renderTextWithLinks(headerBelow.mainText)}</h2>
          <form>
            <input
              className="url-input"
              type="text"
              placeholder={headerBelow.inputPlaceholder}
            />
            <Button />
          </form>
          <div className="terms-and-use-text-div">
            <p>{renderTextWithLinks(headerBelow.termsText)}</p>
          </div>
        </div>
        <div className="subscription-detail-div">
          <div className="subscription-detail-container">
            <div className="titles-div">
              <h3>{headerBelow.subscription.title}</h3>
              <h5>{headerBelow.subscription.subtitle}</h5>
            </div>
            <div className="sub-container">
              <div className="subtitles-div">
                <a href={headerBelow.subscription.cta.url}>
                  {headerBelow.subscription.cta.text}
                </a>
              </div>
              <a
                href={headerBelow.subscription.priceText.parts?.[1].url || "#"}
                className="sub-price-text"
              >
                <span>
                  {headerBelow.subscription.priceText.parts?.[0].text}
                </span>
                {headerBelow.subscription.priceText.parts?.[1].text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
