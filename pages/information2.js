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
  .form-design{
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
    column-count: 1;
    width:100%;
    
    
  }

  .form-row-four{
    width:100%;
    display:inline-block;
  }

  .form-addess{
    width:60%;
    display:inline-block;
    margin-right:5%;
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

        <form className="formstyle" action="income1">

          <section className="form-design">

            <div className="form-head">
              <h2 className="heading">General Information</h2>
              <h2 className="heading-step"><p className="active">Step 2</p> /6</h2>
            </div>

            <div className="form-row-one">
              <label htmlFor="fentity" className="formlabel ">Are any assets pledged?</label>
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

            <div className="form-row-one form-gap">
              <label htmlFor="fentity" className="formlabel ">Are you a defendant in any suits or legal actions?</label>
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

            <div className="form-row-one form-gap">
              <label htmlFor="fentity" className="formlabel ">US Citizen?</label>
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

            <div className="form-row-two form-gap">
              <div className="form-group form-addess">
                <label htmlFor="fsoo" className="formlabel">Personal bank account carried at (name of financial institutions)</label>
                <input id="address" className="textbox" type="text" autoComplete="fsoo" placeholder="Enter State of Organization" required />
              </div>
              
            </div>

            <div className="form-row-one form-gap">
              <label htmlFor="fentity" className="formlabel ">Have you or any business you have owned ever declared bankruptcy?</label>
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

          </section>

          <div className="form-row-button">
            <input type="submit" href=""  id="button" value="Continue" />
          </div>

        </form>
      </Hero>
    </>
  );
}