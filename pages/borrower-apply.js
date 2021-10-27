
import Head from 'next/head';
import styled from 'styled-components';



const Hero = styled.div`
   
    
    padding: 40px 20% 40px 20%;
    font-family: Mulish;
    background-color: #E5E5E5;

    .form-row-button{
        width:100%;
        justify-content:center;
        align-items: center;
        display: flex;
        margin:20px 0px 20px 0px;
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

    .loan-type-contain{
        border: 3px solid #EDEDED;
        border-radius: 8px;
        padding: 5px;
    }

    .first{
        border: 3px solid #F3BA17;
       
    }

    

    input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #D9D9D9;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 5px solid #ADADAD;
    }

    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #F3BA17;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 5px solid #C4C4C4;
    }

    .loan-type-contain img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .loan-type-contain a img{
        display: block;
        margin-left: auto;
        margin-right: 1px;
    }

    .loans-types{
        width:100%;
    }

    .loan-type-section{
        display:inline-block;
        min-width: 25%;
        max-width:25%;
        padding:0px 15px 0px 15px;
        vertical-align: top;
        color: #5C5C5C;
        font-weight: 800;
    }

    .finance-list{
        background-color:white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 5px;
        padding:10px 20px 10px 20px;
    }

    .loan-step{
        color:#ADADAD;
        text-transform: uppercase;
        font-weight:700;
    }

    .loan-head{
        color: #333333;
        font-weight:700;
    }

    .loan-describe{
        color:#ADADAD;
        font-weight:400;
    }

    .space{
        height:30px;
    }

    .loan-amount{
        margin: 0 auto;
    }

    .dvImageTextBox
    {
        position: relative;
        margin: 0 auto;
        width: 250px;
    }

    .dvImageTextBox input
    {
        border: 2px solid #E5E5E5;
        border-radius: 5px;
        box-shadow: #F3BA17 0px 2px 0px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        min-height: 40px;
        text-align: center;
        font-color: #333333;
        font-weight: 600;
        font-size: 24px;
    }
    .dvImageTextBox .rightimage
    {
        position: absolute;
        right: 5px;
        top:2px;
        padding: 5px 5px 5px 20px;
    }

    .dvImageTextBox .leftimage
    {
        position: absolute;
        padding: 5px 20px 5px 5px;
    }

    hr {
        border-top: 1px solid #EDEDED;
      }

    .loan-interest{
        width: 100%;
        display:inline-block;
    }

    .interest-rates{
        width: 25%;
        display:inline-block;
    }

    .interest-rates h3{
        color:#1B46B0;
        font-size: 24px;
        font-weight: 700;
        text-align:center;
        line-height: 8px;
    }

    .interest-rates p{
        color: #5C5C5C;
        font-weight: 700;
        text-align:center;
        line-height: 8px;
    }

    .form-row-one{
        column-count: 2;
        width:100%;
        display:inline-block;
        column-gap:5%;
    }

    .form-gap{
        margin-top:20px;
    }

    .form-row-two{
        width:100%;
        display:inline-block;
    }

    .formlabel{
        color: #5C5C5C;
        font-weight:600;
        font-size: 14px;
        line-height: 30px;
    }

    .textbox{
        width:100%;
        padding: 12px;
        border-radius: 5px;
        border: 1px solid #ADADAD;
    }

    .req{
        color: red;
        font-size: 14px;
    }
      
`;

export default function Form() {
    return (
        <>
            <Head>
                <title>Borrower Section</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>
                
                <div className="finance-list">

                    <p className="loan-step">Step 1</p>
                    <h3 className="loan-head">Which type of loan do you prefer?</h3>
                    <p className="loan-describe">Please select one to continue</p>
                    <section className="loans-types">
        
                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain first">
                                        
                                        <input type="radio"  name="radio" />
                                        
                                        <img src="/images/sba7aloan.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>SBA 7A Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"  name="radio" />
                                        
                                        <img src="/images/sba504loan.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>SBA 504 Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"  name="radio" />
                                        
                                        <img src="/images/invoicefactoring.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Invoice Factoring</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"  name="radio" />
                                        
                                        <img src="/images/equipmentfinance.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Equipment Finance</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"  name="radio" />
                                        
                                        <img src="/images/businesstermloan.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Business Term Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/shorttermbridgeloan.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Commercial Bridge Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/shorttermbusinessloan.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Short Term Business Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/commercialrealestateloan.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Commercial Real Estate Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/multi-familyloans.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Multi-family Loans</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/agricultureloans.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Agriculture Loans</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/investorownedproperties.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Investor Owned Properties</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/lineofcredit.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>Line of Credit</p>
                                </div>
                            </div>
                        </div>
                
                    </section>
                </div>
                
                <div className="space"></div>

                <div className="finance-list">

                    <p className="loan-step">Step 2</p>
                    <h3 className="loan-head">How much do you want to borrow?</h3>
                    <p className="loan-describe">Use the slider to select your loan amount or enter an amount in the text field.</p>
                    
                    <section className="loan-amount">

                        <div className="dvImageTextBox">
                            <img src="/images/dollar.png" className="leftimage" />
                            <input name="TextBox1" type="text" id="TextBox1" value="175,000"/>
                            <img src="/images/pen.png" className="rightimage" />
                        </div>
                        <br />
                        <hr />
                        <div className="loan-interest">
                           
                            <div className="interest-rates">
                                <h3>$1,942</h3>
                                <p>Monthly payment</p>
                            </div>

                            <div className="interest-rates">
                                <h3>10 Years</h3>
                                <p>Loan term</p>
                            </div>

                            <div className="interest-rates">
                                <h3>6.00%<img src="/images/help-orange.png" /></h3>
                                <p>Interest rate</p>
                            </div>

                            <div className="interest-rates">
                                <h3>6.96%</h3>
                                <p>APR with fees</p>
                            </div>
                        </div>
                    </section>
                </div>


                <div className="space"></div>

                <div className="finance-list">

                    <p className="loan-step">Step 3</p>
                    <h3 className="loan-head">Tell us a bit about you</h3>
                    <section className="loan-amount">

                        <form action ="form2">
                            <section>
                                <div className="form-row-one">
                                    
                                    <div className="form-group">
                                        <label htmlFor="fname" className="formlabel ">First Name <sup className="req">*</sup></label>
                                        <input id="firstname" className="textbox" type="text" autoComplete="fname" placeholder="Enter First Name" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="fdba" className="formlabel">Last Name <sup className="req">*</sup></label>
                                        <input id="firstname" className="textbox" type="text" autoComplete="fdba" placeholder="Enter Last Name" required />
                                    </div>
                                </div>

                                <div className="form-row-one form-gap">
                                    
                                    <div className="form-group">
                                        <label htmlFor="fname" className="formlabel">Telephone Number <sup className="req">*</sup></label>
                                        <input id="address" className="textbox" type="text" autoComplete="fname" placeholder="Enter Telephone Number" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="fname" className="formlabel">Legal Business Name <sup className="req">*</sup></label>
                                        <input id="suite" className="textbox" type="text" autoComplete="fname" placeholder="Enter Legal Business Name" required />
                                    </div>
                                </div>

                                <div className="form-row-one form-gap">
                                    
                                    <div className="form-group">
                                        <label htmlFor="fname" className="formlabel">How did you hear about us?</label>
                                        <select id="cars" className="textbox">
                                            <option value="Select" >Select</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                   
                                    </div>
                                    
                                </div>
                            </section>
                        </form>
                    </section>
                </div>

                <div className="form-row-button">
                        <input type="submit" href="information2" id="button" value="Check to Pre-Qualify" />
                </div>

            </Hero>
        </>
    );
}