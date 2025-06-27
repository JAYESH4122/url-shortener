import data from "../data/data";

export const DomainBanner = () => {
  const { title, subtitle, btn } = data.banner;

  return (
    <div className="domain-banner-container">
      <img src="/lighning-domain-logo.svg" alt="lighning-logo" />
      <div className="banner-text-main-content">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <button className="search-domain-btn">{btn}</button>
    </div>
  );
};
