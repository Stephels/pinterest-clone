// Import Pinterest logo from the assets folder
import { pinterestLogo } from "../assets/assets";

// The Header component. It displays the Pinterest logo and a search bar for the Pinterest clone
function Header() {
  return (
    <header className="header">
      <div className="logo-column">
        <img src={pinterestLogo} alt="Pinterest Logo" className="logo" />
      </div>
      <div className="search-column">
        <input type="text" className="searchBar" placeholder="Search" />
      </div>
    </header>
  );
}

// Exporting the Header component
export default Header;
