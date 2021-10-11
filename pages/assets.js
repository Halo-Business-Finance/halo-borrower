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

.textbox{
  width:100%;
  padding: 12px;
}

.radio-four{
  column-count: 4;
  width:100%;
  display:inline-block;
  column-gap:5%;
}

.radio-three{
  column-count: 3;
  width:100%;
  display:inline-block;
  column-gap:5%;
}

.radio-two{
  column-count: 2;
  width:100%;
  display:inline-block;
  column-gap:5%;
}

.form-row-one{
  column-count: 2;
  width:100%;
  display:inline-block;
  column-gap:5%;
}

.form-row-two{
  width:100%;
  display:inline-block;
}

.form-row-three{
  width:100%;
  display:inline-block;
  
}

.form-row-four{
  width:100%;
  display:inline-block;
}

.form-city{
  width:40%;
  display:inline-block;
  margin-right:5%;
}

.form-state{
  width:25%;
  display:inline-block;
  margin-right:5%;
}

.form-zip{
  width:25%;
  display:inline-block;
}

.form-addess{
  width:60%;
  display:inline-block;
  margin-right:5%;
}

.form-phone{
  width:40%;
  display:inline-block;
  margin-right:5%;
}

.form-website{
  width:55%;
  display:inline-block;
}

.form-suite{
  width:35%;
  display:inline-block;
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
  float:right; 
}

.formlabel{
  color: #5C5C5C;
}

.textbox{
  border-radius: 4px;
  border: 1px solid #ededed;
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

.radio-container{
  padding: 5px 5px 5px 5px;
  border: 1px solid #ededed; 
  border-radius: 4px;
  background-color:white;
}
.form-header{
    display: inline-block;
    width: 100%;
    background: rgba(224, 233, 255, 1);
    border-radius: 6px;
    padding: 1px;

}

.form-header p{
    font-family: Mulish;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    padding: 0 8px;
    cursor: pointer;
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

        <form className="formstyle" action="form5">

          <section className="Form-design">

            <div className="form-head">
              <h2 className="heading">Schedule of Assets Pledged</h2>
              <h2 className="heading-step"><p className="active">Step 6</p> /6</h2>
            </div>


            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">Value</label>
                <input id="firstname" className="textbox" type="text" autoComplete="fname" placeholder="Enter the value of pledged asset" required />
              </div>
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">To Whom Pledged</label>
                <input id="firstname" className="textbox" type="text" autoComplete="fname" placeholder="Enter to whom asset was pledged" required />
              </div>
              
            </div>

            <div className="form-row form-gap">
                <div className="form-group form-name">
                    <label htmlFor="fname" className="formlabel">Description</label>
                    <input id="city" className="textbox" type="text" autoComplete="fname" placeholder="Enter the No. of Shares or Bond ..." required />
                </div>   
            </div>

            <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                    <p>Schedule A - All securities including non-money market mutual funds </p>
                </div>
            </div>

            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">No. of Shares or Bond Face value</label>
                <input id="city" className="textbox" type="state" autoComplete="fname" placeholder="Enter the No. of Shares or Bond ..." required />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">Current Market Value</label>
                <input id="state" className="textbox" type="text" autoComplete="fname" placeholder="Enter Current Market ..." required />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">Where held</label>
                <input id="zipcode" className="textbox" type="text" autoComplete="fname" placeholder="Enter Where held" required />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">Owner(s)</label>
                <input id="firstname" className="textbox" type="text" autoComplete="fname" placeholder="Enter the Owner(s)" required />
              </div> 
            </div>

            <div className="form-row form-gap">
                <div className="form-group form-name">
                    <label htmlFor="fname" className="formlabel">Description</label>
                    <input id="city" className="textbox" type="text" autoComplete="fname" placeholder="Enter the No. of Shares or Bond ..." required />
                </div>   
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="ffti" className="formlabel">Do you have any outstanding loans or advances?</label>
                <div className="radio-two">
            
                  <div className="radio-container">
                    <input type="radio"  name="radio" />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input type="radio"  name="radio" />
                    <label>No</label>
                  </div>

                </div>
              </div>
            
            </div>
            <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                    <p>Schedule B - Ownership in privately held businesses </p>
                </div>
            </div>

            <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                    <p>Schedule C - Life Insurance </p>
                </div>
            </div>

            <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                    <p>Schedule D - Real Estate for personal use </p>
                </div>
            </div>

            <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                    <p>Schedule E - Real Estate Investments (Majority ownership only)</p>
                </div>
            </div>
            <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                    <p>Schedule F - Notes Payable</p>
                </div>
            </div>

          </section>


          <div className="form-row-button">
            <input type="submit" id="button" value="Continue" />
          </div>

        </form>
      </Hero>



    </>
  );
}