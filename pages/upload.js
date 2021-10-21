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
          border-top: 1px solid #EDEDED;
          
          .column-one{
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-right: auto;
            width: 50%;
          }
          .column-two{
              margin-top: 5%;
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
        .continue-button{
            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;
            margin-top: 5%;
            
            input{
                padding: 10px 32px ;
                font-size: 16px;
                font-weight: bold;
                background: #F3BA17;
                border-radius: 8px;
                border: none;
            }
            p {
                text-decoration-line: underline;
            }
        }    
`;

export default function Form() {
    return (
        <>
            <BusinessStyle>
                <section className="main-style">
                    <header>
                        <div className='header-one'>
                            <h1>Upload documents</h1>
                            <p>
                                Include all necessary documents that listed below
                            </p>
                        </div>
                    </header>

                    <body>
                        <section>

                            <div className='column-one'>
                                <label> Copy of articles</label>
                            </div>
                            <div className='column-two'>
                                <img src='/images/upload.png' />
                                <label>Drag & Drop or click to upload files</label>
                            </div>
                        </section>
                        <section>
                            <div className='column-one'>
                                <label>Copy of voided check</label>
                            </div>
                            <div className='column-two'>
                                <img src='/images/upload.png' />
                                <label>Drag & Drop or click to upload files</label>
                            </div>
                        </section>
                        <section>
                            <div className='column-one'>
                                <label>Copy of driver license for John Smith</label>
                            </div>
                            <div className='column-two'>
                                <img src='/images/upload.png' />
                                <label>Drag & Drop or click to upload files</label>
                            </div>
                        </section>
                        <section>
                            <div className='column-one'>
                                <label>Copy of driver license for Peter Dykson</label>
                            </div>
                            <div className='column-two'>
                                <img src='/images/upload.png' />
                                <label>Drag & Drop or click to upload files</label>
                            </div>
                        </section>
                        <section>
                            <div className='column-one'>
                                <label>Information about the business and types of service</label>
                            </div>
                            <div className='column-two'>
                                <img src='/images/upload.png' />
                                <label>Drag & Drop or click to upload files</label>
                            </div>
                        </section>
                    </body>
                    <div className="continue-button">
                        <input type="submit" href="form2" id="button" value="Upload to finish the applicaton" />
                    </div>

                </section>
            </BusinessStyle>
        </>
    );
}
