import React from "react";
import classes from "./insightCard.css";
import insightIcon from "../../Assets/insightIcon.svg";
import caretWhiteIcon from "../../Assets/caretup-white.svg";
import upArrowIcon from "../../Assets/up-arrow.svg";

export const InsightCard = () => {
  return (
    <div className="insight">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="div" />
          <div className="frame">
            <div className="frame-2">
              <div className="frame-3">
                <img
                  className="insight-icon"
                  alt="Insight icon"
                  src={insightIcon}
                />
                <div className="text-wrapper">INSIGHTS</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-2">This Week</div>
                <img
                  className="caretup-icon"
                  alt="Caretup icon"
                  src={caretWhiteIcon}
                />
              </div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="text-wrapper-3">10%</div>
                <img
                  className="guidance-up-arrow"
                  alt="Guidance up arrow"
                  src={upArrowIcon}
                />
              </div>
              <div className="frame-5">
                <p className="increase-in-your">
                  <span className="span">increase in your earning</span>
                  <span className="text-wrapper-4">
                    {" "}
                    from last month by end of this month is forecasted.
                  </span>
                </p>
                <p className="p">
                  Finch is about to receive 15k new customer which results in
                  78% increase in revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
