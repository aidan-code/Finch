// import React from "react";
// import "@fontsource/dm-sans"; // Defaults to weight 400
// import classes from "./recentTransferCard.css";
// import wiseImage from "../../Assets/wise.jpg";
// import zelleImage from "../../Assets/zelle.jpg";
// import finchImage from "../../Assets/finch.jpg";
// import revolutImage from "../../Assets/revolut.jpg";

// const RecentTransferCard = () => {
//   return (
//     <div className={classes["recent-transfer-card"]}>
//       <div className={classes.wise}>
//         <img className={classes.img} alt="Wise" src={wiseImage} />
//         <div className={classes["text-wrapper"]}>James</div>
//         <div className={classes.div}>$200</div>
//       </div>
//       <div className={classes.zelle}>
//         <img className={classes.img} alt="Zelle" src={zelleImage} />
//         <div className={classes["text-wrapper-2"]}>Josephine</div>
//         <div className={classes.div}>$200</div>
//       </div>
//       <div className={classes.finch}>
//         <img className={classes.img} alt="Finch" src={finchImage} />
//         <div className={classes["text-wrapper-3"]}>Elvis</div>
//         <div className={classes.div}>$200</div>
//       </div>
//       <div className={classes.revolut}>
//         <img className={classes.img} alt="Revolut" src={revolutImage} />
//         <div className={classes["text-wrapper-2"]}>Josephine</div>
//         <div className={classes.div}>$200</div>
//       </div>
//       <div className={classes["text-wrapper-4"]}>Recent Transfers</div>
//     </div>
//   );
// };

// export default RecentTransferCard;

import React from "react";
import "@fontsource/dm-sans"; // Defaults to weight 400
import classes from "./recentTransferCard.css";
import wiseImage from "../../Assets/wise.jpg";
import zelleImage from "../../Assets/zelle.jpg";
import finchImage from "../../Assets/finch.jpg";
import revolutImage from "../../Assets/revolut.jpg";

export const RecentTransferCard = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Recent Transfers</div>
          <div className="frame">
            <div className="div">
              <img className="img" alt="Wise" src={wiseImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">James</div>
                <div className="text-wrapper-3">$200</div>
              </div>
            </div>
            <div className="div">
              <img className="img" alt="Zelle" src={zelleImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">Josephine</div>
                <div className="text-wrapper-3">$200</div>
              </div>
            </div>
            <div className="div">
              <img className="img" alt="Finch" src={finchImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">Elvis</div>
                <div className="text-wrapper-3">$200</div>
              </div>
            </div>
            <div className="div">
              <img className="img" alt="Revolut" src={revolutImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">Sam</div>
                <div className="text-wrapper-3">$200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransferCard;
