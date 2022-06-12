import car from "./car.jpg";

function CarInfo({ carDetails, showMotError, isLoading }) {
  console.log(showMotError);
  let template = (
    <div>
      <img src={car} alt="car" className="img-primary" />
    </div>
  );

  if (showMotError) {
    template = (
      <div>
        <p className="car-info">
          Something went wrong. Check entered number and try again.
        </p>
      </div>
    );
  } else if (carDetails) {
    template = (
      <div>
        <p className="car-info">Registration: {carDetails.registration}</p>
        <p className="car-info">Make: {carDetails.make}</p>
        <p className="car-info">Model: {carDetails.model}</p>
        <p className="car-info">Colour: {carDetails.primaryColour}</p>
        <p className="car-info">
          MOT expires on: {carDetails.motTests[0].expiryDate}
        </p>
        <p className="car-info">
          Last recorded mileage: {carDetails.motTests[0].odometerValue}
        </p>
      </div>
    );
  } else if (isLoading) {
    template = (
      <div>
        <p className="car-info">Loading car information...</p>
      </div>
    );
  }

  return template;
}

export default CarInfo;
