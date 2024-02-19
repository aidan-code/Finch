import React from "react";
import "./Transfer.css";

export const Transfer = () => {
  return (
    <div className="transfer-incomplete">
      <div className="div">
        <div className="overlap-group">
          <img className="background" alt="Background" src="background.png" />
          <div className="frame" />
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper">$</div>
              <p className="element">
                <span className="span">50.</span>
                <span className="text-wrapper-2">00</span>
              </p>
            </div>
          </div>
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" alt="Revolut" src="revolut.png" />
                  <div className="text-wrapper-3">Sam</div>
                </div>
                <div className="rectangle" />
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" alt="Wise" src="wise.png" />
                  <div className="text-wrapper-3">James</div>
                </div>
                <div className="rectangle-2" />
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" alt="Finch" src="finch.png" />
                  <div className="text-wrapper-3">Elvis</div>
                </div>
                <div className="rectangle" />
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" alt="Zelle" src="zelle.png" />
                  <div className="text-wrapper-3">Josephine</div>
                </div>
                <div className="rectangle" />
              </div>
            </div>
            <div className="rectangle-3" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Send</div>
          </div>
        </div>
        <div className="frame-7">
          <div className="text-wrapper-5">Transfer</div>
          <img
            className="eva-arrow-back"
            alt="Eva arrow back"
            src="eva-arrow-back-outline.svg"
          />
          <div className="frame-8">
            <div className="text-wrapper-6">Search contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
