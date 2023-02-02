import "./App.css";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const Container = styled.div`
  color: #ffffff;
  width: 500px;
  height: 500px;
`;

function App() {
  const [activeBullet, setActiveBullet] = useState<number>(1);
  return (
    <>
      <body>
        <div className="container">
          <ProgressBar active={activeBullet} />
          <div className="card-content">
            <div className="back-button">
              <AiOutlineArrowLeft size={23} />
              <p>Back to Cart</p>
            </div>
            <div className="card-content-container">
              <DeliveryForm />
              <div className="summary">
                <div className="summary-content">
                  <div>
                    <h1>Summary</h1>
                    <p>10 items purchased</p>
                  </div>
                  <div className="summary-content-total">
                    <div className="summary-content-total-item">
                      <p>Cost of goods</p>
                      <h3>500,000</h3>
                    </div>
                    <div className="summary-content-total-item">
                      <p>Dropshipping Fee</p>
                      <h3>5,900</h3>
                    </div>
                    <div className="summary-content-total-item">
                      <h2>Total</h2>
                      <h2>505,900</h2>
                    </div>
                    <div
                      className="continue-button"
                      onClick={() => setActiveBullet(activeBullet + 1)}
                    >
                      <p className="continue-button-text">
                        Continue to Payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
