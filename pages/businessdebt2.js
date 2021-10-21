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
  .footer{
        .continue-button{
            display: flex;
            justify-content:center;
            align-items: center;
            gap: 10px;
            img{
                padding: 14px;
                border: 1px solid #F3BA17;
                border-radius: 8px;
            }
            input{
                padding: 16px 32px ;
                font-size: 16px;
                font-weight: bold;
                background: #F3BA17;
                border-radius: 8px;
                border: none;
            }
        }
        .skip-link{
            display: flex;
            justify-content:center;
            align-items: center;
            p{
                text-decoration: underline;
            }
        }    
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

                <form className="formstyle" action="form2">

                    <section className="Form-design">

                        <div className="form-head">
                            <h2 className="heading">Tell us more about your outstanding debt.</h2>
                            <h2 className="heading-step"><p className="active">Step 2</p> / 2</h2>

                        </div>
                        <p>
                            We need to know about your company’s existing debts in order to give you an accurate cash flow decision. Business debts include terms loans, equipment leases, business credit cards (in the name of the business), lines of credit, leases or any other business debts.
                        </p>

                        <div className="form-row-one form-gap">
                            <div className="form-group form-name">
                                <label htmlFor="fname" className="formlabel ">Lender name</label>
                                <input id="firstname" className="textbox" type="text" autoComplete="fname" placeholder="Enter lender name" required />
                            </div>
                            <div className="form-group form-dba">
                                <label htmlFor="fdba" className="formlabel">Type of Debt</label>
                                <input id="firstname" className="textbox" type="text" autoComplete="fdba" placeholder="Select" required />
                            </div>
                        </div>

                        <div className="form-row-one form-gap">
                            <div className="form-group form-name">
                                <label htmlFor="fname" className="formlabel">Origination Year</label>
                                <input id="address" className="textbox" type="text" autoComplete="fname" placeholder="YYYY" required />
                            </div>
                            <div className="form-group form-dba">
                                <label htmlFor="fname" className="formlabel">Payment Frequency</label>
                                <input id="suite" className="textbox" type="text" autoComplete="fname" placeholder="Select" required />
                            </div>
                        </div>
                        <div className="form-row-one form-gap">
                            <div className="form-group form-name">
                                <label htmlFor="fname" className="formlabel">Minimum Payment</label>
                                <input id="address" className="textbox" type="text" autoComplete="fname" placeholder="$" required />
                            </div>
                            <div className="form-group form-dba">
                                <label htmlFor="fname" className="formlabel">Amount Remaining</label>
                                <input id="suite" className="textbox" type="text" autoComplete="fname" placeholder="$" required />
                            </div>
                        </div>

                    </section>

                    <div className='footer'>
                        <div className="continue-button">
                            <img src='/images/back.png' />
                            <input type="submit" href="form2" id="button" value="Upload to continue" />
                        </div>
                        <div className='skip-link'>
                            <p>Skip</p>
                        </div>
                    </div>

                </form>
            </Hero>



        </>
    );
}