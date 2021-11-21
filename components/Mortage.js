import React from "react";

function Mortage() {
  return (
    <div className="form-row-one form-gap mortgage">
      <div className="form-group form-name">
        <label htmlFor="fname" className="formlabel ">
        Monthly Mortgage
        </label>
        <input
          id="firstname"
          className="textbox"
          type="text"
          autoComplete="fname"
          placeholder="Enter Monthly Rent/Mortgage"
        />
      </div>
    </div>
  );
}

export default Mortage;
