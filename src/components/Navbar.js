// Import icon images for the navbar from the assets folder
import {
  homeIcon,
  yourBoardsIcon,
  createIcon,
  updatesIcon,
  messagesIcon,
} from "../assets/assets";

//An array of objects to dynamically loop through an array of icon paths.
const navbarIcons = [
  { src: homeIcon, alt: "Home" },
  { src: yourBoardsIcon, alt: "Your Boards" },
  { src: createIcon, alt: "Create" },
  { src: updatesIcon, alt: "Updates" },
  { src: messagesIcon, alt: "Messages" },
];

//The Navbar component of the Pinterest clone.
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navbarIcons.map((icon, index) => (
          <li key={index}>
            <img src={icon.src} alt={icon.alt} className="navbar-icon" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

//Exporting the Navbar component
export default Navbar;
