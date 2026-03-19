/* The Pin component. It takes in an image and a description as props and renders them. */
function Pin({ image, description }) {
  return (
    <div className="pin">
      <img src={image} alt={description} className="pin-image" />
      <p>{description}</p>
    </div>
  );
}

/* Exporting the Pin component*/
export default Pin;
