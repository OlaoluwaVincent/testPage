import "./styles/header.css";

const navMenu = ["Property", "About", "FAQs", "Contact Us"];

const Header = () => {
  return (
    <section className="header--section">
      <a href="/" className="header--logo">
        <img
          src="./public/blue-01 1.png"
          alt="Logo Icon"
          className="logo_img"
        />
      </a>
      <nav className="header--nav">
        <ul className="header--list-items">
          {navMenu.map((navItem) => (
            <li key={navItem} className="list_item">
              <a href={"/" + navItem.toLowerCase()}>{navItem}</a>
            </li>
          ))}
        </ul>
      </nav>
      <img src="./public/hamburgerIcon.png" className="hamburgerIcon"/>
    </section>
  );
};
export default Header;
