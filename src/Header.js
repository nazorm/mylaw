import React from "react";
import "./App.css";

const Header = (props) => {
  return (
    <div className="header">
      <h3>MyLAWLEGAL</h3>
      <div className="categories">
        <h4 className="categoryname">Please select the complaint category:</h4>
        <div className="category">
          <span
            className="police-brutality"
            onClick={props.handleBrutalityForm}
          >
            Police Brutality{" "}
          </span>
          <span className="contract" onClick={props.handleDisputesForm}>
            {" "}
            Contract Disputes{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
