import axios from "axios";
import { useState } from "react";

function RegInput({ setCarDetails, setShowMotError, setIsLoading }) {
  const [regNo, setRegNo] = useState("");

  const handleChangeReg = (event) => {
    setRegNo(event.target.value);
  };

  const handleSearchRegNo = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const carInfo = await axios.get(
        `${process.env.REACT_APP_API_URL}/checkmot/${regNo}`,
        {
          headers: {
            "x-api-key": "fZi8YcjrZN1cGkQeZP7Uaa4rTxua8HovaswPuIno",
          },
        }
      );
      setIsLoading(false);
      setShowMotError(false);
      return setCarDetails(carInfo.data[0]);
    } catch (e) {
      setIsLoading(false);
      setShowMotError(true);
    }
  };

  const resetSearch = () => {
    setCarDetails("");
    setRegNo("");
    setShowMotError(false);
  };

  return (
    <div>
      <div className="px-8 mt-12">
        <h1 className="font-mono text-3xl mb-4 text-center">MOT CHECKER</h1>
        <h2 className="font-mono text-xl mb-3 text-center">
          Check the MOT status of a vehicle
        </h2>
        <h3 className="font-mono text-sm text-center">
          Find out if a vehicle has an MOT certificate and when it runs out.
        </h3>
        <h3 className="font-mono text-sm mb-6 text-center">
          You’ll need the vehicle’s registration number (number plate).
        </h3>
      </div>
      <div className="px-8 mb-6">
        <form
          onSubmit={handleSearchRegNo}
          className="flex flex-col justify-center items-center"
        >
          <p className="font-mono mt-2 font-medium text-center">
            Enter a valid registration number here
          </p>

          <input
            className="input-primary"
            placeholder="e.g. CU57ABC"
            id="regno"
            value={regNo}
            type="text"
            onChange={handleChangeReg}
          />
          <button className="btn-emerald">Search Reg</button>
        </form>
        <form className="flex flex-col justify-center items-center">
          <button className="btn-amber" onClick={resetSearch}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegInput;
