import RegInput from "./RegInput";
import CarInfo from "./CarInfo";
import { useState } from "react";

function MotChecker() {
  const [carDetails, setCarDetails] = useState("");
  const [showMotError, setShowMotError] = useState(false);
  const [showMotNetworkError, setShowMotNetworkError] = useState(false);
  const [showMotRegError, setShowMotRegError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-6">
      <div className="main-card">
        <div className="mb-3 py-3">
          <div className="md:shrink-0">
            <RegInput
              setCarDetails={setCarDetails}
              setShowMotError={setShowMotError}
              setShowMotNetworkError={setShowMotNetworkError}
              setShowMotRegError={setShowMotRegError}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
        <div className="px-8 pb-8">
          <CarInfo
            carDetails={carDetails}
            showMotError={showMotError}
            showMotNetworkError={showMotNetworkError}
            showMotRegError={showMotRegError}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default MotChecker;
