import Head from "next/head";
import styled from "styled-components";

const BusinessDebtStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  background: #e5e5e5;
  padding: 10px;

  .main-style {
    width: 52%;
    padding: 12px;
    background: #f8f8ff;
    border-radius: 10px;
    header{
        .header-one{
            display: flex;
            align-items: center;
            h1{
                margin-right: auto;
            }
            h3 span{
                color: #1B46B0; 
            }
        }
        .header-two {
            
            p{
                margin-top: -10px;
                color: #ADADAD;
            }
        }
    }
    
  }
  body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    button{
        width: 350px;
        height: 40px;
        font-size: 16px;
        text-align: center;
        padding: 10px 30px;
        background: #FFFFFF;
        border: 2px solid #EDEDED;
        box-sizing: border-box;
        border-radius: 8px;
    }
    .button-one{
        border: 2px solid #F3BA17;
        color: #F3BA17;
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
  }
`;

export default function Business() {
  return (
    <>
      <BusinessDebtStyle>
        <section className="main-style">
          <header>
            <div className="header-one">
              <h1>Business Tax returns</h1>
              <h3><span> Step 1 </span> / 2</h3>
            </div>
            <div className="header-two">
              <p>
                Does your company have any outstanding debts? This includes term
                loans, equipment loans, business credit cards (in the name of
                the business), lines of credit, leases or any other business
                debt.
              </p>
            </div>
          </header>
          <body>
            <button className='button-one'>My business has debts</button>
            <button>My business doesn’t have any debts</button>
          </body>
          <div className="footer">
            <form action="/businessdebt2">

              <div className="continue-button">
                <img src="/images/back.png" />
                <input
                  type="submit"
                  href="form2"
                  id="button"
                  value="Upload to continue"
                />
              </div>
            </form>

            <div className="skip-link">
              <p>Skip</p>
            </div>
          </div>
        </section>
      </BusinessDebtStyle>
    </>
  );
}
