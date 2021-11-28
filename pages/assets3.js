import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  font-family: Mulish;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 20px;
  .formstyle {
    width: 85%;
    background: #f8f8ff;
    border-radius: 10px;
  }
  .Form-design {
    padding: 30px 30px 30px 30px;
  }
  .form-row-one {
    width: 100%;
    display: inline-block;
    border: 2px solid rgba(27, 70, 176, 1);
    border-radius: 6px;
    padding: 4px 10px;
  }
  .form-row-one p {
    color: rgba(27, 70, 176, 1);
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }
  table {
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  tbody:nth-child(odd) {
    background-color: #F5F5F5;

  }
  .form-head {
    display: inline-block;
    width: 100%;
  }
  .active {
    color: #1b46b0;
    display: inline;
  }
  .heading {
    display: inline;
    float: left;
  }
  .heading-step {
    display: inline;
    color: #adadad;
    display: inline;
    float: right;
  }
  .formlabel {
    color: #5c5c5c;
  }
  .textbox {
    border-radius: 4px;
    border: 1px solid #ededed;
  }
  .form-gap {
    margin-top: 20px;
  }
  input[type="submit"] {
    background-color: #f3ba17;
    border: none;
    color: black;
    font-weight: 600;
    border-radius: 8px;
    padding: 14px 30px;
    text-decoration: none;
    cursor: pointer;
  }
  .form-row-button {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 20px 0px 20px 0px;
  }
`;
export default function Form() {
  return (
    <>
      <Head>
        <title>Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <form className="formstyle" >
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">Schedule of Assets Pledged</h2>
              <h2 className="heading-step">
                <p className="active">Step 6 </p> / 7
              </h2>
            </div>

            <div className="form-gap table-form">
              <table>
                <tbody>
                  <tr>
                    <th colSpan="2">Lender Name & Address</th>
                    <th>Loan Date</th>
                    <th>Original Loan Amount</th>
                    <th>Present Balance</th>
                    <th>Interest Rate</th>
                    <th>Monthly Payment</th>
                    <th>Collateral/Security</th>
                    <th>Balloon?(Y/N)</th>
                    <th>Loan Current?(Y/N)</th>
                    <th>Refi?(Y/N)</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>              
					<td>2464 Royal Ln. Mesa, New Jersey 45463</td>
                    <td>12/15/2016</td>
                    <td>$10000</td>
                    <td>$10000</td>
                    <td>12%</td>
                    <td>$5000</td>
                    <td>$50000</td>
                    <td>Y</td>
                    <td>N</td>
                    <td>N</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
				  	<td><input type="checkbox" /></td>              
                    <td>2464 Royal Ln. Mesa, New Jersey 45463</td>
                    <td>12/15/2016</td>
                    <td>$10000</td>
                    <td>$10000</td>
                    <td>12%</td>
                    <td>$5000</td>
                    <td>$50000</td>
                    <td>Y</td>
                    <td>N</td>
                    <td>N</td>
                  </tr>
                </tbody>

                <tbody>
					<tr>
					<td><input type="checkbox" /></td>              
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
				  	<td><input type="checkbox" /></td>              
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
				  	<td><input type="checkbox" /></td>              
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
				 	<td><input type="checkbox" /></td>              
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
				  	<td><input type="checkbox" /></td>              
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
				  	<td><input type="checkbox" /></td>              
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th colSpan="3">Total</th>
                    <th>$20000</th>
                    <th>$20000</th>
                    <th colSpan="6"></th>
                  </tr>
                </tbody>
              </table>
              <div>
                <img src="images/plus.png" />
                Add More Row
                <img src="images/delete.png" />
                Remove Row
              </div>
            </div>
          </section>
          <div className="form-row-button">
            <input type="submit" href="form2" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
