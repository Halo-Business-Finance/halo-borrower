
import Head from 'next/head';
import styled from 'styled-components';



const Hero = styled.div`
   
    
    padding: 40px 20% 40px 20%;
    font-family: Mulish;
    background-color: #E5E5E5;

    .loan-type-contain{
        border: 3px solid #F3BA17;
        border-radius: 5px;
        padding: 5px;
    }

    input[type='radio']:checked:after ~ .loan-type-contain{
        border: 3px solid green;
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
        padding:0px 15px 0px 15px;
        
    }

    .loan-type-section{
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
                                    <div className="loan-type-contain">
                                        
                                        <input type="radio" checked="checked" name="radio" />
                                        
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
                                        
                                        <input type="radio"   name="radio" />
                                        
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
                                        
                                        <input type="radio"   name="radio" />
                                        
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
                                        
                                        <input type="radio"   name="radio" />
                                        
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
                                        
                                        <input type="radio"   name="radio" />
                                        
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
                                        
                                        <input type="radio"   name="radio" />
                                        
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
                                        
                                        <input type="radio"   name="radio" />
                                        
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
                                        
                                        <input type="radio"   name="radio" />
                                        
                                        <img src="/images/sba7aloan.png" />
                                            
                                        <a><img src="/images/help.png" /></a>
                                    
                                    </div>
                                    <p>SBA 7A Loan</p>
                                </div>
                            </div>
                        </div>
                
                    </section>
                </div>
            </Hero>
        </>
    );
}