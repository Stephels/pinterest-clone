/* Importing the CSS file for styling the app */
import ".//App.css";
//Importing the components to be used in the app
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

//function component for the app
function App() {
  return (
    <div className="PinterestApp">
      <Header /> {/* Render the Header component */}
      <div className="content-row">
        <Navbar /> {/* Render the Navbar component */}
        <Grid /> {/* Render the Grid component */}
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}
/* Exporting the App component as the default export of this module */
export default App;
