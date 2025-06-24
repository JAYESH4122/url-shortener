export const Header = () => {
  const navItems = ["Home", "Qr Code Generator", "Stats"];
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};