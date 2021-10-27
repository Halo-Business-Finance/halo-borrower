import Head from "next/head";
import styled from "styled-components";

const BusinessStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mullish;
  background: #e5e5e5;
  padding: 10px;

  .main-style {
    width: 52%;
    padding: 12px;
    background: #f8f8ff;
    border-radius: 10px;
    header{
        .header-one p{
            font-size: 16px;
            letter-spacing: .5px;
            color: #5C5C5C;
            font-weight: bold;
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
     gap: 2rem;
      section{
          display: flex;         
          align-items: center;
          border-bottom: 1px solid #EDEDED;
          border-top: 1px solid #EDEDED;

          
          .column-one{
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-right: auto;
            width: 50%;
          }
          .column-two{
            margin-top: 3%;
            margin-bottom: 3%;
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px dotted #EDEDED;
            border-radius: 8px;
            width: 60%;
            height: 70px;
            label{
                color: #ADADAD;
            }
          }
          .new-column{
            
              h6{
                  margin-top: 0;
                  font-size: 16px;
                  color: #1B46B0;
                  text-decoration-line: underline;
              }
          }
        
        }
    }
    .footer{
        .continue-button{
            margin-top: 3%;
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

    [type="file"] {
        height: 0;
        overflow: hidden;
        width: 0;
      }
      
      [type="file"] + label {
       
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: 'Rubik', sans-serif;
        font-size: inherit;
        font-weight: 500;
        margin-bottom: 1rem;
        outline: none;
        padding: 1rem 50px;
        position: relative;
        transition: all 0.3s;
        vertical-align: middle;
      }

`;

export default function Form() {
    return (
        <>
            <BusinessStyle>
                <section className="main-style">
                    <header>
                        <div className='header-one'>
                            <h1>Profit & Loss Statement</h1>
                            <p>
                            To evaluate how your business is doing so far this year, we will analyze a Profit & Loss Sratement, also called Income Statement. The profit & Loss Statement gives a snapshot of your business’s financial performance since your most recent tax filling.
                            </p>
                        </div>
                    </header>

                    <body>
                        <section>

                            <div className='column-one'>
                                <label>2020 Profit & Loss Statement</label>
                            </div>
                            <div className='column-two'>
                                <img src='/images/upload.png' />
                                <input type="file" id="file" />
                                <label for="file" >Drag & Drop or click to upload files</label>
                            </div>
                        </section>
                    </body>
                    <div className='footer'>
                    <form action="/balancesheet">
                        <div className="continue-button">
                            <img src='/images/back.png' />
                            <input type="submit"  id="button" value="Upload to continue" />
                        </div>
                    </form>
                        <div className='skip-link'>
                            <p>Skip</p>
                        </div>
                    </div>

                </section>
            </BusinessStyle>
        </>
    );
}
