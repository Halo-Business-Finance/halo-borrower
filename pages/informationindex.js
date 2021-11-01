import Head from 'next/head';
import styled from 'styled-components';



const Hero = styled.div`
padding: 40px 10% 40px 10%;
font-family: Mulish;


.top-borrower{
    width:100%;
    height:40px;
}
.top-heading{
    column-count:2;
    color:#5C5C5C;
}

.progress-title{
    font-style: Bold;
    font-weight:700;
    font-size: 20px;
    line-height: 30px;
    align: Left;
    vertical-align: Center;
    color: #333333;
}

.progress-button{
    float:right;
}

.button-step{
    float: right;
    padding: 5px 20px 5px 20px;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
	line-height: 30px;
    text-align: left;
    text-decoration: none;
	border-radius: 5px;
    color: #333333;
    margin-left:5%;
    background-color: #F3BA17;
   
}

.button-time{
    float: right;
    line-height: 30px;
    padding: 5px 20px 5px 20px;
    cursor: pointer;
	border-radius: 5px;
    display:inline-block;
    border: 1px solid #EDEDED;
}



#button-time-icon{
    background: rgb(255, 255, 255) url('./images/ic_update.png') no-repeat ;
}
#button-time-icon span{
    padding-left: 30px;
}
.progress-button{
    padding: 0px 10px 5px 10px;
    width:200px;
    cursor: pointer;
    display: inline-block;
	line-height: 30px;
    text-align: left;
    text-decoration: none;
	border-radius: 3px;
}

#progress-button {
    background: rgb(255, 255, 255) url('./images/dashboard.png') no-repeat scroll 8px 5px / 25px 25px border-box;
    border: 1px solid #F3BA17;
}

#progress-button span {
        
    font-style: Bold;
    font-weight:500;
    font-size: 14px;
    padding-left:20%;
    vertical-align: Center;
    paragraph-spacing: 30px;
    Color : #F3BA17;   
}

.meter {
    margin-top:20px;
    box-sizing: content-box;
    height: 15px;
    position: relative;
    background: #EDEDED;
    border-radius: 25px;
  }


  .meter > span {
    display: block;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #1B46B0;
    position: relative;
    overflow: hidden;
  }
  
  .meter span{
      width:80%;
  }

    .meter-link{
        
        float:right;
        font-weight: 500;
        font-size: 14px;
        Color: #1B46B0;
        text-decoration: underline;
    }

    .strong-color{
        color: #1B46B0;
    }

    .dot {
        height: 10px;
        width: 10px;
        background-color: #F3BA17;
        border-radius: 50%;
        display: inline-block;
    }
    
    .inprogress{
        font-weight: 700;   
        font-size: 16px;
        Color: #5C5C5C;
        padding-left: 10px;
    }


    .sba-header-container{
		width: 100%;
        padding:20px;
        border:2px solid rgba(236.93750202655792, 236.93750202655792, 236.93750202655792, 1);
        border-radius: 15px;
	}

	.sba-image{
		width:  30%;
		height: 70px;
		width: 70px;
		padding: 5px;
		border: 2px solid #F3BA17;
		display: inline-block;
        border-radius: 6px;
	}

	.sba-details{
		display: inline-block;
		width: 68%;
		vertical-align: top;
		padding-left: 15px;
	}
	
	.sba-application-details{
		width: 48%;
		vertical-align: top;
		display: inline-block;
	}

	.application-container{
        width:40%;
		column-count: 2;
		display: inline-block;
	}
	.app-details-2{
		float: right;
	}

    .sba-detail-title{
        font-weight:600;
        font-size: 18px;
        padding: 0px;
        line-height: 0px;
    }

    .sba-detail-amount{
        font-weight: 700;
        font-size: 28px;
        vertical-align: Top;
        color: #1B46B0;
        line-height: 10px;
    }

    .application-detail-title{
        color: #5C5C5C;
        font-size: 14px;
        
    }   
    
    .application-detail-details{
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        line-height: 8px;

    }

    .application-image-container{
        width: 60%;
    }

    
    .finance-image-container{
        width: 60%;
    }

    .finance-container-one{
        width: 40%;
        display: inline-block;
    }

    .finance-container-two{
        width: 50%;
        display: inline-block;
        vertical-align: super;
    }

    .finance-detail-title{
        line-height: 0px;
        font-weight: 700;
        font-size: 20px;
        Color : #333333;
    }

    .finance-detail-detail{
        font-weight: 400;
        font-size: 16px;
        color: #ADADAD;
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

                <div className="top-borrower">

                    <div className="top-heading">
                        <div className="progress-title">Loan Application Overview</div>
                        <div className="progress-button">
                            <a href="#" class="progress-button" id="progress-button"> <span>View your loans</span></a>    
                        </div>
                    </div>
                    
                    <div className="meter">
                        <span ></span>
                    </div>
                    <div className="top-heading">
                       
                            <p><strong className="strong-color">33%</strong> complete</p>
                       
                            <p class="meter-link"><a href="#">Estimated Loan Terms</a></p>
                    </div>
                    <br /> 

                    <div className="top-heading">
                        
                        <div>
                            <span className="dot"></span>
                            <span className="inprogress">In process</span>
                            <p>Your application in review by lender.</p>
                            
                        </div>
                            
                        <div class="sba-header-container">
            
                            <div class="sba-application-details application-image-container">
                                
                                <img src="/images/SBA7ALoan.png" class="sba-image" />
                                
                                <div class="sba-details">
                                    <p class="sba-detail-title">SBA 7A Loan</p>
                                    <p class="sba-detail-amount">$175,000</p>
                                </div>

                            </div>
                            
                            <div class="sba-application-details application-container"> 
                                
                                <div >
                                    <span class="application-detail-title">Application Started</span>
                                    <p class="application-detail-details">6/1/2020</p>
                                </div>

                                <div class="app-details-2">
                                    <span class="application-detail-title">Application Number</span>
                                    <p class="application-detail-details">5286211</p>
                                </div>

                            </div>

                        </div>

                    </div>


                    <br /><br />
                    <div className="finance-list">
                        <div class="sba-header-container">
            
                            <div class="finance-container-one">
                                
                                <img src="/images/Pre-qualify.png" class="sba-image" />
                                
                                <div class="sba-details">
                                    <p class="finance-detail-title">Pre-qualify</p>
                                    <p class="finance-detail-detail">You've pre-qualified for a loan!</p>
                                </div>

                            </div>
                            
                            <div className="finance-container-two">

                                <div className="button-step">
                                    <a href="/form" > <span>Next step</span></a>    
                                </div> 

                                <div className="button-time">
                                    <a href="#"  id="button-time-icon"> <span>5 minutes</span></a>    
                                </div>

                            </div>
                        </div>
                    </div>

                    <br /><br />
                    <div className="finance-list">
                        <div class="sba-header-container">
            
                            <div class="finance-container-one">
                                
                                <img src="/images/financials.png" class="sba-image" />
                                
                                <div class="sba-details">
                                    <p class="finance-detail-title">Business Financials</p>
                                    <p class="finance-detail-detail">You need to enter your business financial info!</p>
                                </div>

                            </div>
                            
                            <div className="finance-container-two">

                                <div className="button-step">
                                    <a href="/" > <span>Next step</span></a>    
                                </div> 

                                <div className="button-time">
                                    <a href="#"  id="button-time-icon"> <span>5 minutes</span></a>    
                                </div>

                            </div>
                        </div>
                    </div>

                    <br /><br />
                    <div className="finance-list">
                        <div class="sba-header-container">
            
                            <div class="finance-container-one">
                                
                                <img src="/images/financials.png" class="sba-image" />
                                
                                <div class="sba-details">
                                    <p class="finance-detail-title">Personal Financials</p>
                                    <p class="finance-detail-detail">You need to enter your Personal financial info!</p>
                                </div>

                            </div>
                            
                            <div className="finance-container-two">

                                <div className="button-step">
                                    <a href="/information" > <span>Next step</span></a>    
                                </div> 

                                <div className="button-time">
                                    <a href="#"  id="button-time-icon"> <span>5 minutes</span></a>    
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
                
            </Hero>


        </>
    );
}