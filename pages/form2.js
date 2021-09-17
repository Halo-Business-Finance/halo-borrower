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

  .radio-container{
    padding: 5px 5px 5px 5px;
    border: 1px solid #ededed; 
    border-radius: 4px;
    background-color:white;
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
          
          <section className="Form-design">
            
            <div className="form-head">
              <h2 className="heading">Business Contact Information</h2>
              <h2 className="heading-step"><p className="active">Step 2</p> /3</h2>
            </div>
          
            <div className="form-row">
              <label htmlFor="fentity" className="formlabel ">Business Label Name</label>
              <div className="radio-four">
              
                <div className="radio-container">
                  <input type="radio"  name="radio" />
                  
                  <label>C- Corp</label>
                </div>

                <div className="radio-container">
                  <input type="radio"  name="radio" />   
                  <label>Sole-Prop</label>
                </div>
                
                <div className="radio-container">
                  <input type="radio"  name="radio" />
                  <label>LLC</label>
                </div>

                <div className="radio-container">
                  <input type="radio"  name="radio" />
                  <label>Partnership</label>
                </div>

            </div>
          </div>

          <div className="form-row-two form-gap">
            <div className="form-group form-addess">
              <label htmlFor="fsoo" className="formlabel">State of Organization</label>
              <input id="address" className="textbox" type="text" autoComplete="fsoo" placeholder="Enter State of Organization" required />
            </div>
            <div className="form-group form-suite">
              <label htmlFor="ffti" className="formlabel">Federal Tax ID</label>
              <input id="suite" className="textbox" type="text" autoComplete="ffti" placeholder="Enter Federal Tax ID" required />
            </div>
          </div>

          <div className="form-row-four form-gap">
            <div className="form-group form-phone">
              <label htmlFor="fname" className="formlabel">Business Start Date</label>
              <input id="phone" className="textbox" type="date" autoComplete="fname" placeholder="(XXX)-(XXX)-(XXXX)" required />
            </div>
            <div className="form-group form-website">
              <label htmlFor="fname" className="formlabel">Industry Description/SIC</label>
              <input id="website" className="textbox" type="text" autoComplete="fname" placeholder="Enter Industry Description/SIC:" required />
            </div>
          </div>

          <div className="form-row form-gap">
            <div className="form-group">
              <label htmlFor="fname" className="formlabel">Type of Product/Service Sold</label>
              <input id="city" className="textbox" type="text" autoComplete="fname" placeholder="Enter Type of Product/Service Sold" required />
            </div>
          </div>

          <div className="form-row-two form-gap">
            <div className="form-group form-addess">
              <label htmlFor="fsoo" className="formlabel">Total Company Employees and 1099 Contractors</label>
              <input id="address" className="textbox" type="text" autoComplete="fsoo" placeholder="Total Company Employees and 1099 Contractors" required />
            </div>
            <div className="form-group form-suite">
              <label htmlFor="ffti" className="formlabel">Was this Business Purchased?</label>

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

       
          </section>

          <div className="form-row-button">
            <input type="submit" id="button" value="Continue" />
          </div>
        
        </form>
      </Hero>
    </>
  );
}