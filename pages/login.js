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
    background: #FFF;
    border-radius: 10px; 
    padding: 0px 20px 20px 20px;
  }
  .Form-design{
    padding: 30px 30px 30px 30px;
    
  }
  
  .textbox{
    width:100%;
    padding: 12px;
  }

  .form-group {
      margin-top: 5%;
  }  
  
  .form-row-one{
    width:60%;
    margin-top: 5%;
    margin-left: 20%;
  }
  
  .formlabel{
    color: #5C5C5C;
    font-weight:600;
    font-size: 16px;
    line-height: 10px;
  }
  
  .form-head{
    display:inline-block;
    width:100%;
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

  .textbox{
    border-radius: 4px;
    border: 2px solid #ededed;
    
  }

  .textbox ::placeholder {
    color:#ADADAD;
    opacity: 1; 
    font-style: italic;
  }

  .form-gap{
    margin-top:20px;
  }

  input[type=submit]{
    
    background-color: #F3BA17;
    border: none;
    color: #333333;
    font-weight: 700;
    border-radius:8px;
    padding: 14px 30px;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
  }

  .form-row-button{
    width:100%;
    justify-content:center;
    align-items: center;
    display: flex;
  }

`;


export default function Form() {
    return (
        <>
            <Head>
                <title>Registration</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>

                <form className="formstyle" action="2fa">

                    <section className="Form-design">

                        <div className="form-head">
                            <h2 className="heading">Log In</h2>

                        </div>

                        <div className="form-row-one form-gap">
                            <div className="form-name">
                                <label htmlFor="fname" className="formlabel ">Email</label>
                                <input id="firstname" className="textbox" type="email" autoComplete="fname" placeholder="Enter your email address" required />
                            </div>

                            <div className="form-group form-dba">
                                <label htmlFor="fdba" className="formlabel">Password</label>
                                <input id="firstname" className="textbox" type="password" autoComplete="fdba" placeholder="Enter your password" required />
                            </div>
                        </div>
                    </section>

                    <div className="form-row-button">
                        <input type="submit" id="button" value="Log In" />
                    </div>

                </form>
            </Hero>



        </>
    );
}