import data from "../data/data";

const { logo_title, logo, columns } = data.footer;
const { content_col, copyright_text } = data.subfooter;

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <a href="" className="footer-logo-wrapper">
          {logo_title}
          <img
            src={logo}
            alt="Url shortener"
            className="logo-header"
            width="110"
            height="28"
          ></img>
        </a>
        <div className="footer-extra-links">
          {columns.map((column, colIndex) => (
            <div className="extra-links-wrapper" key={colIndex}>
              {column.map((item, itemIndex) => (
                <p key={`${colIndex}-${itemIndex}`}>{item.link_text}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SubFooter = () => {
  return (
    <div className="subfooter">
      <div className="sub-footer-wrapper">
        <div className="links-wrapper">
          {content_col.map((item, itemIndex) => (
            <p key={itemIndex}>{item.text}</p>
          ))}
        </div>
        <div className="sub-footer-logo">
          <p>{copyright_text}</p>
        </div>
      </div>
    </div>
  );
};
