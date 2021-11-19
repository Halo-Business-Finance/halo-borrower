import React from 'react'

function Rent() {
    return (
        <div>
            <div className="rent">
              <div className="form-row-one form-gap">
                <div className="form-group form-name">
                  <label htmlFor="fname" className="formlabel ">
                    Monthly Rent/Mortgage
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

              <div className="form-row-one form-gap">
                <div className="form-group form-name">
                  <label htmlFor="fname" className="formlabel ">
                    Monthly Rent/Mortgage
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

              <div className="form-group form-gap radio-two rent">
                <label htmlFor="ffti" className="formlabel">
                  Do you have any outstanding loans or advances?
                </label>
                <div className="radio-two">
                  <div className="radio-container">
                    <input type="radio" name="radio" />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input type="radio" name="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Rent
