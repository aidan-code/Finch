import React from "react";
import "./Savings.css";

export const Savings = () => {
  return (
    <div className="savings-account">
      <div className="div">
        <div className="frame">
          <div className="overlap-group">
            <div className="text-wrapper">Savings</div>
            <div className="text-wrapper-2">$15,400.86</div>
            <div className="text-wrapper-3">Balance</div>
          </div>
        </div>
        <img
          className="eva-arrow-back"
          alt="Eva arrow back"
          src="eva-arrow-back-outline.svg"
        />
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-4">Account details</div>
              <div className="frame-5">
                <img
                  className="img"
                  alt="Fluent copy"
                  src="fluent-copy-20-filled.svg"
                />
                <div className="text-wrapper-5">Copy details</div>
              </div>
            </div>
            <div className="group">
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-6">Name</div>
                  <div className="text-wrapper-7">Josephine Isabella</div>
                  <div className="text">{""}</div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-6">Account number</div>
                  <div className="text-wrapper-7">0123456789</div>
                  <div className="text-2">{""}</div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-6">Routing number</div>
                  <div className="text-wrapper-7">9876543210</div>
                </div>
                <div className="frame-9">
                  <div className="text-wrapper-6">Bank name and address</div>
                  <p className="p">
                    Finch Bank, Broadmoor Drive, Broadmoor Seatle
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-4">Connect cards</div>
              <div className="frame-5">
                <img
                  className="img"
                  alt="Fluent square add"
                  src="fluent-square-add-20-filled.svg"
                />
                <div className="text-wrapper-5">Create card</div>
              </div>
            </div>
            <div className="frame-10">
              <div className="cart-gradient">
                <img className="logo" alt="Logo" src="logo.png" />
                <img className="chip" alt="Chip" src="chip.png" />
              </div>
              <div className="cart-minimal">
                <img className="logo-2" alt="Logo" src="logo-2.png" />
                <img className="chip-2" alt="Chip" src="chip-2.png" />
              </div>
              <div className="cart-holograma">
                <img className="logo-3" alt="Logo" src="logo-3.png" />
                <img className="chip-2" alt="Chip" src="chip-3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
