import Head from 'next/head';
import styled from 'styled-components';
const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
  padding: 20px;
  .formstyle{
    width: 60%;
    background: #F8F8FF;
    border-radius: 10px;
  }
  .Form-design{
    padding: 30px 30px 30px 30px;
  }  
  .form-row-one{
    width:100%;
    display:inline-block;
    border: 2px solid  rgba(27, 70, 176, 1);
    border-radius: 6px ;
    padding: 4px 10px;
  }
  .form-row-one p{
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
  td, th {
    border: 1px solid #DDDDDD;
    number-align: left;
    padding: 8px;
  }
  tr:nth-child(odd) {
    background-color: #DDDDDD;
  }
  .form-head{
    display:inline-block;
    width:100%;
  }
  .active{
    color:#1B46B0;
    display:inline;
  }
  .heading{
    display:inline;
    float:left;
  }
  .heading-step{
    display:inline;
    color:#ADADAD;
    display:inline;
    float:right;
  }
  .formlabel{
    color: #5C5C5C;
  }
  .numberbox{
    border-radius: 4px;
    border: 1px solid #EDEDED;
  }
  .form-gap{
    margin-top:20px;
  }
  input[type=submit]{
    background-color: #F3BA17;
    border: none;
    color: black;
    font-weight: 600;
    border-radius:8px;
    padding: 14px 30px;
    number-decoration: none;
    cursor: pointer;
  }
  .form-row-button{
    width:100%;
    justify-content:center;
    align-items: center;
    display: flex;
    margin:20px 0px 20px 0px;
  }

  input[type=number] {
    border:none;
    background: none;
    font-weight:600;
    width:80%;
  }

  input[type=number]:focus {
    border:none!important;
    border-shadow:none;
    background: none;
    width:80%;
  }


`;
export default function Form() {
    
    return (
        <>
            <Head>
                <title>Form</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>
                <form className="formstyle" action="assets">
                    <section className="Form-design">
                        <div className="form-head">
                            <h2 className="heading">Income Source</h2>
                            <h2 className="heading-step"><p className="active">Step 5 </p> / 6</h2>
                        </div>

                        <div className="form-gap table-form">
                            <table>
                                <tr>
                                    <th>Assets</th>
                                    <th>Amount ($)</th>
                                    <th>Liabilities & Net Worth</th>
                                    <th>Amount ($)</th>
                                </tr>
                                <tr>
                                    <th rowSpan="2">Cash in Bank(including money market accounts, CDs)</th>
                                    <th rowSpan="2"><input type="number" name="test" placeholder="0.00" /></th>  <th >Notes Payable to Bank</th>
                                    <th rowSpan="2"><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>
                                        <th>Secured</th>
                                        <th><input type="number" name="test" placeholder="0.00" /></th>
                                        <th>Unsecured</th>
                                        <th>$<input type="number" name="test" placeholder="__" /></th>
                                    </th>
                                </tr>
                                <tr>
                                    <th rowSpan="2">Cash in Bank(including money market accounts, CDs)</th>
                                    <th rowSpan="2"><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Notes Payable to Others (Schedule F)</th>
                                    <th rowSpan="2"><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>
                                        <th>Secured</th>
                                        <th>$<input type="number" name="test" placeholder="__" /></th>
                                        <th>Unsecured</th>
                                        <th>$<input type="number" name="test" placeholder="__" /></th>
                                    </th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Credit Cards & Accounts Payable</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Margin Accounts</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>Readily Marketable Securities (Schedule A)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Notes Due to Privately Owned Businesse</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>Non-Readily Marketable Securities (Schedule A)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Taxes Payable</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>Ownership in Privately Owned Businesses (Schedule B)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Personal Residential Mortgages (Schedule D)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>Notes Receivable from Business</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Investment Real Estate Debt (Schedule E)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>Notes Receivable from Others</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Life Insurance Loans (Schedule C)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>Net Cash Surrender Value of Life Insurance (Schedule C)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Other Liabilities (List)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>Real Estate for Personal Use (Schedule D)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>List your liabilities separated by comma</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Real Estate Investments (Schedule E)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Retirement Accounts (IRA, Keogh, Profit Sharing & Other)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Automobiles</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Total Liabilities</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>List your automobiles separated by comma</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Other Assets (List)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Net Worth(Total Assets - Total Liabalities)</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                                <tr>
                                    <th>List your assets separated by comma</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Total Assets</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                    <th>Total Liabilities & Net Worth</th>
                                    <th><input type="number" name="test" placeholder="0.00" /></th>
                                </tr>
                            </table>
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