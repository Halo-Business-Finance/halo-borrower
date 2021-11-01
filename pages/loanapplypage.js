import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`

font-family: Mulish;


    .newloan{
        background-color: #1B46B0;
        padding: 20px 10% 20px 15%;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 600;
    }

    .loan-carasol{
        padding: 20px 10% 20px 15%;
        background-color: #fff;
        
    }

    .arrows{
        width:5%;
        display:inline-block;
        vertical-align: middle;
        padding-top: 20px;
    }

    .right{
        
        float: right;
        display:inline-block;
    }

    .loan-type-section{
        display:inline-block;
        min-width: 20%;
        max-width:25%;
        padding:0px 15px 0px 15px;
        vertical-align: top;
        color: #5C5C5C;
        font-weight: 800;
    }

    .loan-type-contain{
        border: 3px solid #EDEDED;
        border-radius: 8px;
        padding: 5px;
    }

    .loan-type-contain img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .finance-list{
        background-color:white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 5px;
        padding:10px 20px 10px 20px;
        width:60%;
        margin-left:20%;
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

   

    .loan-type-contain:hover{
        border: 3px solid #F3BA17;
    }

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
`;


export default function Form() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>

                <div className="newloan">
                    <a>New Loan</a>
                </div>

                <div className="loan-carasol">
                    <h3>Which type of loan do you prefer?</h3>
                    
                    <section className="loans-types">

                        <div className="arrows">
                            <img src="/images/left.png" />
                        </div>

                        <div className="loan-type-section">
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain first" >
                                        <img src="/images/sba7aloand.png" />
                                    </div>
                                    <p>SBA 7A Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        <img src="/images/sba504loan.png" />
                                    </div>
                                    <p>SBA 504 Loan</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        <img src="/images/invoicefactoring.png" />
                                    </div>
                                    <p>Invoice Factoring</p>
                                </div>
                            </div>
                        </div>

                        <div className="loan-type-section">
                            
                            <div className="loan-type">

                                <div className="loan-type-select">
                                    <div className="loan-type-contain">
                                        <img src="/images/equipmentfinance.png" />
                                    </div>
                                    <p>Equipment Finance</p>
                                </div>
                            </div>
                        </div>

                     

                        <div className="arrows right">
                            <img src="/images/right.png" />
                        </div>


                        
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
                    </section>

                </div>
                <form action="/loanallapplications">
                <div className="form-row-button">
                    <input type="submit"  id="button" value="Check to Pre-Qualify" />
                </div>
                </form>
            </Hero>

        </>
    );
}