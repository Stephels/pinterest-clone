//Importing the Pin component to be used in the Grid component
import Pin from "./Pin";
//Importing the pin data from the data folder
import pinData from "../data/pinData";

//The pinGrid component. It uses an array called pinData, where each object represents a pin with an id, image, and description.
function PinGrid() {
  return (
    <div className="masonry-grid">
      {pinData.map((pin) => (
        <Pin key={pin.id} image={pin.image} description={pin.description} />
      ))}
    </div>
  );
}

/* Exporting the PinGrid component*/
export default PinGrid;
