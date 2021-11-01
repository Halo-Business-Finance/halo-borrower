import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  background: #E5E5E5;
  font-family: Mulish;
  padding: 40px 5% 40px 5%;
  
  .formstyle{
    width: 60%;
    margin-left: 20%;
    background: #F8F8FF;
    border-radius: 10px; 
    padding-bottom: 20px; 
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
    font-size: 14px;
    line-height: 18px;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(odd) {
    background-color:  #F5F5F5;;
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
    font-weight: bold;
    font-size: 20px;
    color: #333333;
;
  }

  .heading-step{
    display:inline;
    color:#ADADAD;
    display:inline;
    float:right; 
  }
  .table-head{
    font-weight: bold;
  }
  .thead{
    font-weight: 500;
  }
  .formlabel{
    color: #5C5C5C;
  }

  .textbox{
    border-radius: 4px;
    border: 1px solid #ededed;
  }

  .form-gap{
    margin-top:10px;
  }

  input[type=submit]{
    
    background-color: #F3BA17;
    border: none;
    color: black;
    font-weight: 600;
    border-radius:8px;
    padding: 14px 30px;
    text-decoration: none;
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
    /* border-shadow:none; */
    background: none;
    width:80%;
  }

  .meter {
  margin-top:20px;
  box-sizing: content-box;
  height: 10px;
  position: relative;
  background: #EDEDED;
  border-radius: 25px;
}


.meter > span {
  display: block;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #1B46B0;
  position: relative;
  overflow: hidden;
}

.meter span{
  width:10%;
}

.pi span {
  width:100%;
}
.gi span {
  width:100%;
}
.is span {
  width: 100%;
}

.meter-link{
  
  float:right;
  font-weight: 500;
  font-size: 14px;
  Color: #1B46B0;
  text-decoration: underline;
}
.progress-tracker{
  width:100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2%;
}

.progress-form{
  width: 10%;
  // min-height:100px;
  // background-color:red;
}

.progress-form{
  font-weight: 700;
  color: #1B46B0;
  font-size: 14px;
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

        <section className="progress-tracker">

          <div className="progress-form">
            <h3>Personal Information</h3>
            <div className="meter pi">
              <span ></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>General Information</h3>
            <div className="meter gi">
              <span ></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Income<br />Source</h3>
            <div className="meter is">
              <span ></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Contigent Liabilities</h3>
            <div className="meter cl">
              <span ></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Balance<br /> Sheet</h3>
            <div className="meter bs">
              <span ></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Schedule of Assets Pledged</h3>
            <div className="meter soap">
              <span ></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Business Debt Schedule</h3>
            <div className="meter bds">
              <span ></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Personal Tax Returns(100%)</h3>
            <div className="meter ptr">
              <span ></span>
            </div>
          </div>

        </section>
        <br /><br /><br /><br />


        <form className="formstyle" action="/balance">

          <section className="Form-design">

            <div className="form-head">
              <h2 className="heading">Contigent Liabilities</h2>
              <h2 className="heading-step"><p className="active">Step 4 </p> / 6</h2>
            </div>


            <div className="form-gap table-form">
              <table>
                <tr className='table-head'>
                  <th>Liabilites</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <th className='thead'>As Guarantor, Endorser, or Co-maker</th>
                  <th><input type="number" name="test" placeholder="0.00" /></th>
                </tr>
                <tr>
                  <th className='thead'>On Leases or Contracts </th>
                  <th><input type="number" name="test" placeholder="0.00" /></th>
                </tr>
                <tr>
                  <th className='thead'>Legal Claims</th>
                  <th><input type="number" name="test" placeholder="0.00" /></th>
                </tr>
                <tr>
                  <th className='thead'>Provisions for Federal Income Taxes</th>
                  <th><input type="number" name="test" placeholder="0.00" /></th>
                </tr>
                <tr>
                  <th className='thead'>Other Special Debt</th>
                  <th><input type="number" name="test" placeholder="0.00" /></th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th>Total Contingent Liabilities</th>
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