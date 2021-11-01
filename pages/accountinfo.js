import React from "react";
import styled from "styled-components";

const AccountinfoStyling = styled.div`
  display: flex;
  justify-content: center;
  font-family: Mulish;
  background: #e5e5e5;
  height: 90vh;

  .info-form {
    width: 60%;
    height: 48vh;
    background: #FFFFFF;
    padding: 12px;
    margin: 20px;
    border-radius: 10px;

    .header h2 {
        font-size: 20px;
        font-weight: bold;
        color: #333333;
    }
    .first-row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .first-name,
      .last-name {
        margin-right: auto;
        width: 48%;
        label {
          display: block;
          font-size: 18px;
          color: #5C5C5C;
          margin-bottom: 2px;
        }
        input {
          width: 100%;
          font-size: 18px;
          padding: 8px;
          border: 1px solid #adadad;
          border-radius: 4px;
          ::placeholder {
                font-weight: 700;
                color: #333333;
          }
        }
      }
      .last-name {
        margin-left: auto;
        width: 48%;
      }
    }
    .save-button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      

      input {
        padding: 10px 32px;
        font-size: 16px;
        font-weight: bold;
        background: #f3ba17;
        border-radius: 8px;
        border: none;
      }
      p {
        text-decoration-line: underline;
      }
    }
  }
`;
function Accountinfo() {
  return (
    <>
      <AccountinfoStyling>
        <form className="info-form">
          <div className="header">
            <h2>Contact Info</h2>
          </div>
          <div className="first-row">
            <div className="first-name">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="last-name">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="first-row">
            <div className="first-name">
              <label>Email Address</label>
              <input type="email" id="email" name="email" placeholder='john.doe@gmail.com' />
            </div>
            <div className="last-name">
              <label>Telephone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+123 456 45 45 467" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>
          </div>
          <div className="save-button">
            <input
              type="submit"
              href="form2"
              id="button"
              value="Save changes"
            />
          </div>
        </form>
      </AccountinfoStyling>
    </>
  );
}

export default Accountinfo;
