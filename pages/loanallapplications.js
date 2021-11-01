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
        
        float:right;
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

    .loan-type-contain:hover{
        border: 3px solid #F3BA17;
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
                    </section>

                    <section>
                        
                    </section>

                </div>

               

            </Hero>

        </>
    );
}