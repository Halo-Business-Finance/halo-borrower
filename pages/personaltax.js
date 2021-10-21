import Head from "next/head";
import styled from "styled-components";

const PersonalStyle = styled.div`
  display: flex;
  flex-direction: column;
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
            display: flex;
            flex-direction: column;

            .buttons{
                align-self: center;
                margin-bottom: 30px;
               button{
                   background: #FFFFFF;
                   font-size: 16px;
                   padding: 10px 15px;
                   margin: 0px 15px;
                   border: 2px solid #EDEDED;
                   border-radius: 8px;
               }
               .mid-button{
                    border: 2px solid #F3BA17;
                    border-radius: 8px;
                    color: #F3BA17;
               }
            }
        }
    }
    
  }
  //body section css
  body{
     display: flex;
     flex-direction: column;
     gap: 2rem;
      section{
          display: flex;         
          align-items: center;
          border-top: 1px solid  #EDEDED;
          padding-top: 8px;
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

export default function PersonalForm() {
  return (
    <>
      <PersonalStyle>
        <section className="main-style">
            <div>
            <header>
            <div className='header-one'>
              <h1>Personal Tax Returns for John Smith</h1>
              <p>
              Include all schedules and statements, We need all pages to give an accurate analysis.
              </p>
            </div>
            <div className='header-two'>
                <h3>What year did John Smith most recently file taxes?</h3>
                <div className='buttons'>
                    <button>2019</button>
                    <button className='mid-button'>2018</button>
                    <button>Before 2018</button>
                </div>
            </div>
          </header>
          <body>
              <section>
              <div className='column-one'>
                  <label>Business Tax Return 1</label>
                  <input type="date" id="birthday" name="birthday" />
              </div>
              <div className='column-two'>
                  <img src='/images/upload.png' />
                  <label>Drag & Drop or click to upload files</label>
              </div>
              </section>
              <section>
              <div className='column-one'>
                  <label>Business Tax Return 2</label>
                  <input type="date" id="birthday" name="birthday" />
              </div>
              <div className='column-two'>
                  <img src='/images/upload.png' />
                  <label>Drag & Drop or click to upload files</label>
              </div>
              </section>
              <section>
                  <div className='new-column'>
                      <h6>Add Another Tax Return</h6>
                  </div>
              </section>
          </body>
            </div>
          
          <div>
          <header>
            <div className='header-one'>
              <h1>Personal Tax Returns for Peter Dykson</h1>
              <p>
              Include all schedules and statements, We need all pages to give an accurate analysis.
              </p>
            </div>
            <div className='header-two'>
                <h3>What year did Peter Dykson most recently file taxes?</h3>
                <div className='buttons'>
                    <button>2019</button>
                    <button className='mid-button'>2018</button>
                    <button>Before 2018</button>
                </div>
            </div>
          </header>
          <body>
              <section>
              <div className='column-one'>
                  <label>Business Tax Return 1</label>
                  <input type="date" id="birthday" name="birthday" />
              </div>
              <div className='column-two'>
                  <img src='/images/upload.png' />
                  <label>Drag & Drop or click to upload files</label>
              </div>
              </section>
              <section>
              <div className='column-one'>
                  <label>Business Tax Return 2</label>
                  <input type="date" id="birthday" name="birthday" />
              </div>
              <div className='column-two'>
                  <img src='/images/upload.png' />
                  <label>Drag & Drop or click to upload files</label>
              </div>
              </section>
              <section>
                  <div className='new-column'>
                      <h6>Add Another Tax Return</h6>
                  </div>
              </section>
          </body>
          </div>
          <div className='footer'>
            <div className="continue-button">
                <img src='/images/back.png' />
                <input type="submit" href="form2" id="button" value="Upload to continue" />
               
            </div>
            <div className='skip-link'>
                  <p>Skip</p>  
            </div>
          </div>
            
        </section>
        
      </PersonalStyle>
    </>
  );
}
