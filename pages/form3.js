import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  padding: 20px;
  position: absolute;
  
  .formstyle{
    width: 80%;
    height: 80%;
    background: #F8F8FF;
    /* border-style: groove; */
    border-radius: 20px;  
  }
  
  .heading{
    padding-left: 30px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
  }
  #firstname{
    width: 90%;
    padding: 12px 20px;
  margin: 8px 15px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .firstname{
    padding-left: 20px;

  }

  #address{
    width: 120%;
    padding: 12px 20px;
  margin: 8px 15px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .address{
    padding-left: 20px;
    
  }

  #suite{
    width: 60%;
    padding: 12px 20px;
  margin: 8px 170px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .suite{
    padding-left: 25px;
    margin-left: 150px;
    
  }

  #city{
    width: 90%;
    padding: 12px 20px;
  margin: 8px 25px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .city{
    padding-left: 20px;
    margin-left: 10px;

  }

  #state{
    width: 80%;
    padding: 12px 20px;
  margin: 8px 40px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .state{
    padding-left: 20px;
    margin-left: 20px;

  }

  #zipcode{
    width: 80%;
    padding: 12px 20px;
  margin: 8px 23px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .zipcode{
    padding-left: 20px;
    margin-left: 4px;

  }

  #phone{
    width: 90%;
    padding: 12px 20px;
  margin: 8px 25px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .phone{
    padding-left: 20px;
    margin-left: 10px;

  }

  #website{
    width: 180%;
    padding: 12px 20px;
  margin: 8px 40px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 20px;
  }

  .website{
    padding-left: 20px;
    margin-left: 20px;

  }

  #button{
    display: inline-block;
    background: #F3BA17;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
      border-radius: 3px;
      width: 11rem;
           
  }
  .form-row{
    column-count: 2;
  column-gap: 20px;
  margin: 10px;
  }
  .form-row1{
    column-count: 3;
  }
  .form-row2{
    column-count: 3;
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





                <form className="formstyle">
                    <h2 className="heading">Financial Information</h2>
                    <div className="form-row">
                        <div className="form-group">

                            <label htmlFor="fname" className="firstname">Annual Business Revenue</label>
                            <input id="firstname" type="text" autoComplete="fname" placeholder="Enter Annual Business Revenue" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="firstname">Monthly Total Payroll Expenses</label>
                            <input id="firstname" type="text" autoComplete="fname" placeholder="Enter Monthly Total Payroll Expenses" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fname" className="address">Monthly Total Business Expenses  </label>
                            <input id="address" type="text" autoComplete="fname" placeholder="Enter Monthly Total Business Expenses" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="suite">Average Daily Bank Balance</label>
                            <input id="suite" type="text" autoComplete="fname" placeholder="Enter Average Daily Bank Balance" required />
                        </div>
                    </div>

                    <div className="form-row1">
                        <div className="form-group">
                            <label htmlFor="fname" className="city">DO you have any outstanding loans or advances?</label>
                            <input id="city" type="text" autoComplete="fname" placeholder="Yes" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="state">State</label>
                            <input id="state" type="text" autoComplete="fname" placeholder="No" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="zipcode">Outstanding Loan/Advance Balance</label>
                            <input id="zipcode" type="text" autoComplete="fname" placeholder="Enter Outstanding Loan/Advance Balance" required />
                        </div>
                    </div>

                    <div className="form-row2">
                        <div className="form-group">
                            <label htmlFor="fname" className="phone">Use of Funds</label>
                            <input id="phone" type="text" autoComplete="fname" placeholder="Enter Use of Funds" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="website">Loan Amount Requested</label>
                            <input id="website" type="text" autoComplete="fname" placeholder="Enter Loan Amount Requested" required />
                        </div>
                    </div>

                    <h2 className="heading">Property Details</h2>

                    <div className="form-group">
                        <label htmlFor="fname" className="city">DO you own the business property?</label>
                        <input id="city" type="text" autoComplete="fname" placeholder="Yes" required />
                        <input id="city" type="text" autoComplete="fname" placeholder="Yes" required />
                        <input id="city" type="text" autoComplete="fname" placeholder="Yes" required />
                    </div>

                    <button type="submit" id="button">Continue</button>
                </form>


            </Hero>



        </>
    );
}