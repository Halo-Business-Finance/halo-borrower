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

.rent{
  display:none;
}

.mortgage{
  display:none;
}

.check-btn input:checked ~ .hiddendiv {
  display: block;
}

.mortgage-click input:checked ~ .mortgage {
  display:block;
}


.own-click:checked ~ .mortgage {
  display:none;
}

.own-click:checked ~ .rent {
  display:none;
}


  .add-owner {
    
    margin: 10px auto;
    color: #1B46B0;
    text-align: center;
    font-size: 14px;
    max-width: 600px;
    position: relative;
  }
  .add-owner:before {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background: #1B46B0;
    left: 0;
    top: 50%;
    position: absolute;
  }
  .add-owner:after {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background: #1B46B0;
    right: 0;
    top: 50%;
    position: absolute;
  }

 .scrollimage{
     min-width: 100%;
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

        <form className="formstyle" action ="form5">

          <section className="Form-design">

            <div className="form-head">
              <h2 className="heading">Terms and Conditions</h2>
              <h2 className="heading-step"><p className="active">Step 3</p> /3</h2>
            </div>

            <div className="form-head">
              <p className="heading">I certify that all information entered thus far into the application is accurate and that "Borrower Name" is a principal owner of "Business Name" I am authorized to act on behalf of "Business Name" and I grant permission for Halo Business Finance to procure ONLY a credit score number and share a PASS or FAIL result only with Halo Business Finance lending partners for the purpose of loan options. I understand this will not impact the applicant’s credit score and will not show up as an inquiry on a credit report pulled by Halo Business Finance.</p>
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