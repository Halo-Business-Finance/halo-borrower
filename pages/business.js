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
  //body section css
  body{
     display: flex;
     flex-direction: column;
     gap: 2.5rem;
      section{
          display: flex;         
          align-items: center;
          .column-one{
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-right: auto;
          }
          .column-two{
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px dashed #EDEDED;
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
  }
`;

export default function Business() {
  return (
    <>
      <BusinessStyle>
        <section className="main-style">
          <header>
            <div className='header-one'>
              <h1>Business Tax returns</h1>
              <p>
                In order to understand your business financials, we’ll need to
                analyze two of your most recent business Tax returns.
              </p>
            </div>
            <div className='header-two'>
                <h3>Upload at least the last 2 years of business Tax returns</h3>
                <p>Include all schedules and statements, We need all pages to give an accurate analysis.</p>
            </div>
          </header>
          <body>
              <section>
              <div className='column-one'>
                  <label>Business Tax Return 1</label>
                  <input type="date" id="birthday" name="birthday" />
              </div>
              <div className='column-two'>
                  <img src='' />
                  <label>Drag & Drop or click to upload files</label>
              </div>
              </section>
              <section>
              <div className='column-one'>
                  <label>Business Tax Return 1</label>
                  <input type="date" id="birthday" name="birthday" />
              </div>
              <div className='column-two'>
                  <img src='' />
                  <label>Drag & Drop or click to upload files</label>
              </div>
              </section>
              <section>
                  <div className='new-column'>
                      <h6>Add Another Tax Return</h6>
                  </div>
              </section>
          </body>
          <div className="continue-button">
               <input type="submit" href="form2" id="button" value="Upload to continue" />
               <p>Skip</p>
           </div>
          
        </section>
      </BusinessStyle>
    </>
  );
}
