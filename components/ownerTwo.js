import React from "react";

function ownerTwo() {
  return (
    <div>
     

      <section className="Form-design owner-two">
        <div className="form-head">
          <h2 className="heading">Owner 2</h2>
        </div>

        <div className="form-row-one form-gap">
          <div className="form-group form-name">
            <label htmlFor="fname" className="formlabel ">
              Full Name
            </label>
            <input
              id="firstname"
              className="textbox"
              type="text"
              autoComplete="fname"
              placeholder="John"
              required
            />
          </div>
          <div className="form-group form-dba">
            <label htmlFor="fdba" className="formlabel">
              Date of Birth
            </label>
            <input
              id="firstname"
              className="textbox"
              type="date"
              autoComplete="fdba"
              placeholder="Enter Monthly Total Business Expenses"
              required
            />
          </div>
        </div>

        <div className="form-row-one form-gap">
          <div className="form-group form-name">
            <label htmlFor="fname" className="formlabel ">
              Home Address
            </label>
            <input
              id="firstname"
              className="textbox"
              type="text"
              autoComplete="fname"
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="form-group form-dba">
            <label htmlFor="fdba" className="formlabel">
              City
            </label>
            <input
              id="firstname"
              className="textbox"
              type="text"
              autoComplete="fdba"
              placeholder="Enter City"
              required
            />
          </div>
        </div>

        <div className="form-row-three form-gap">
          <div className="form-group form-city">
            <label htmlFor="fname" className="formlabel">
              State
            </label>
            <input
              id="city"
              className="textbox"
              type="state"
              autoComplete="fname"
              placeholder="Select State"
              required
            />
          </div>
          <div className="form-group form-state">
            <label htmlFor="fname" className="formlabel">
              Zip Code
            </label>
            <input
              id="state"
              className="textbox"
              type="text"
              autoComplete="fname"
              placeholder="Enter Zip Code"
              required
            />
          </div>
          <div className="form-group form-zip">
            <label htmlFor="fname" className="formlabel">
              Social Security Number
            </label>
            <input
              id="zipcode"
              className="textbox"
              type="number"
              autoComplete="fname"
              placeholder="Social Security Number"
              required
            />
          </div>
        </div>

        <div className="form-row-one form-gap">
          <div className="form-group form-name">
            <label htmlFor="fname" className="formlabel ">
              Email
            </label>
            <input
              id="firstname"
              className="textbox"
              type="text"
              autoComplete="fname"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group form-dba">
            <label htmlFor="fdba" className="formlabel">
              Mobile
            </label>
            <input
              id="firstname"
              className="textbox"
              type="text"
              autoComplete="fdba"
              placeholder="(XXX)-(XXX)-(XXXX)"
              required
            />
          </div>
        </div>

        <div className="form-row-one form-gap">
          <div className="form-group form-name">
            <label htmlFor="fname" className="formlabel ">
              Ownership
            </label>
            <input
              id="firstname"
              className="textbox"
              type="text"
              autoComplete="fname"
              placeholder="Enter percent of ownership"
              required
            />
          </div>
        </div>

        <div className="form-group form-gap">
          <label htmlFor="ffti" className="formlabel">
            Are you a:
          </label>
          <div className="radio-three">
            <div className="radio-container">
              <input type="radio" name="radio" className="own-click" />
              <label>US Citizen</label>
            </div>

            <div className="radio-container">
              <input type="radio" name="radio" className="mortgage-click" />
              <label>US Permanent Resident</label>
            </div>

            <div className="radio-container">
              <input type="radio" name="radio" className="rent-click" />
              <label>Other</label>
            </div>
          </div>
        </div>
      </section>

      <div className="form-row-button">
        <input type="submit" id="button" value="Continue" />
      </div>
    </div>
  );
}

export default ownerTwo;
