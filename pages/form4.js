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


export default function Form4() {
    return (
        <>
            <Head>
                <title>Form</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>





                <form className="formstyle">
                    <h2 className="heading">Owner 1</h2>
                    <div className="form-row">
                        <div className="form-group">

                            <label htmlFor="fname" className="firstname">Full Name</label>
                            <input id="firstname" type="text" autoComplete="fname" placeholder="Enter Full Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="firstname">Date of Birth</label>
                            <input id="firstname" type="text" autoComplete="fname" placeholder="MM-DD-YYYY" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fname" className="address">Home Address</label>
                            <input id="address" type="text" autoComplete="fname" placeholder="Enter Address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="suite">City</label>
                            <input id="suite" type="text" autoComplete="fname" placeholder="Enter City" required />
                        </div>
                    </div>

                    <div className="form-row1">
                        <div className="form-group">
                            <label htmlFor="fname" className="city">State</label>
                            <input id="city" type="text" autoComplete="fname" placeholder="Enter State" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="state">Zip Code</label>
                            <input id="state" type="text" autoComplete="fname" placeholder="Enter Zip Code" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="zipcode">Social Security Number</label>
                            <input id="zipcode" type="text" autoComplete="fname" placeholder="Enter Social Security Number" required />
                        </div>
                    </div>

                    <div className="form-row2">
                        <div className="form-group">
                            <label htmlFor="fname" className="phone">Email</label>
                            <input id="phone" type="text" autoComplete="fname" placeholder="Enter Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname" className="website">Mobile Number</label>
                            <input id="website" type="text" autoComplete="fname" placeholder="(XXX)-(XXX)-(XXXX)" required />
                        </div>
                    </div>

                    <button type="submit" id="button">Continue</button>
                </form>


            </Hero>



        </>
    );
}