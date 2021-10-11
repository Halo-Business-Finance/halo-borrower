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
    display:inline;
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

`;


export default function Form() {
  return (
    <>
      <Head>
        <title>Form</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>

        <form className="formstyle" action ="form2">
          
          <section className="Form-design">
            
            <div className="form-head">
              <h2 className="heading">Business Contact Information</h2>
              <h2 className="heading-step"><p className="active">Step 1</p> /3</h2>
            </div>
          
          <div className="form-row-one form-gap">
            <div className="form-group form-name">
              <label htmlFor="fname" className="formlabel ">Business Label Name</label>
              <input id="firstname" className="textbox" type="text" autoComplete="fname" placeholder="Enter Business Legal Name" required />
            </div>
            <div className="form-group form-dba">
              <label htmlFor="fdba" className="formlabel">DBA</label>
              <input id="firstname" className="textbox" type="text" autoComplete="fdba" placeholder="Enter DBA" required />
            </div>
          </div>

          <div className="form-row-two form-gap">
            <div className="form-group form-addess">
              <label htmlFor="fname" className="formlabel">Address</label>
              <input id="address" className="textbox" type="text" autoComplete="fname" placeholder="Enter Address" required />
            </div>
            <div className="form-group form-suite">
              <label htmlFor="fname" className="formlabel">Suite/FL</label>
              <input id="suite" className="textbox" type="text" autoComplete="fname" placeholder="Enter Suite/FL" required />
            </div>
          </div>

          <div className="form-row-three form-gap">
            <div className="form-group form-city">
              <label htmlFor="fname" className="formlabel">City</label>
              <input id="city" className="textbox" type="text" autoComplete="fname" placeholder="Enter City" required />
            </div>
            <div className="form-group form-state">
              <label htmlFor="fname" className="formlabel">State</label>
              <input id="state" className="textbox" type="text" autoComplete="fname" placeholder="Select State" required />
            </div>
            <div className="form-group form-zip">
              <label htmlFor="fname" className="formlabel">Zip Code</label>
              <input id="zipcode" className="textbox" type="number" autoComplete="fname" placeholder="Enter Zip Code" required />
            </div>
          </div>

          <div className="form-row-four form-gap">
            <div className="form-group form-phone">
              <label htmlFor="fname" className="formlabel">Business Phone</label>
              <input id="phone" className="textbox" type="text" autoComplete="fname" placeholder="(XXX)-(XXX)-(XXXX)" required />
            </div>
            <div className="form-group form-website">
              <label htmlFor="fname" className="formlabel">Website</label>
              <input id="website" className="textbox" type="text" autoComplete="fname" placeholder="Enter Website" required />
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