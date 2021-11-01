import Head from "next/head";
import styled from "styled-components";

const BusinessStyle = styled.div`
  display: flex;
  justify-content: center;
  font-family: Mulish;
  background: #e5e5e5;
  padding: 10px;
<<<<<<< HEAD
  
=======
  height: 90vh;
>>>>>>> 903d0a727b91f34d710fbe8ba2fbac2549aa20cc

  .main-style {
    width: 60%;
    padding: 12px;
<<<<<<< HEAD
    background: #FFFFFF;
    border-radius: 10px;
    .header {
      h1{
        font-size: 20px;
        font-weight: bold;
      }
=======
    background: #f8f8ff;
    border-radius: 10px;
    header {
      .header p {
        font-size: 16px;
        letter-spacing: 0.5px;
        color: #5c5c5c;
        font-weight: bold;
      } 
>>>>>>> 903d0a727b91f34d710fbe8ba2fbac2549aa20cc
    }
    .first-row{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .first-name{
            width: 45%;
            label{
                display: block;
                font-size: 18px;
<<<<<<< HEAD
                font-weight: 600;
                color: #5C5C5C;
            }
            input{
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ADADAD;
                border-radius: 4px;
                ::placeholder{
                  font-size: 14px;
                  font-style: italic;
                  color: #ADADAD;
                }
=======
                color: #5C5C5C;
            }
            .first-input{
              display: inline;
              
            }
            input{
                width: 100%;
                font-size: 18px;
                padding: 8px;
                border: 1px solid #adadad;
                border-radius: 4px;
>>>>>>> 903d0a727b91f34d710fbe8ba2fbac2549aa20cc
               }

        }
        .last-name{
            
            width: 45%;
            label{
                display: block;
                font-size: 18px;
<<<<<<< HEAD
                font-weight: 600;
=======
>>>>>>> 903d0a727b91f34d710fbe8ba2fbac2549aa20cc
                color: #5C5C5C;
            }
            input{
                width: 100%;
<<<<<<< HEAD
                padding: 10px 12px;
                border: 1px solid #ADADAD;
                border-radius: 4px;
                ::placeholder{
                  font-size: 14px;
                  font-style: italic;
                  color: #ADADAD;
                }
               }
        }
      }
    .second-row ul{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
     li{
      color: #ADADAD;
     }
    }
  
=======
                font-size: 18px;
                padding: 8px;
                border: 1px solid #adadad;
                border-radius: 4px;
               }
        }
    }
    .second-row{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }
  }
>>>>>>> 903d0a727b91f34d710fbe8ba2fbac2549aa20cc
  
  .continue-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
<<<<<<< HEAD
    margin: 12px 0;
=======
    margin-top: 5%;
>>>>>>> 903d0a727b91f34d710fbe8ba2fbac2549aa20cc

    input {
      padding: 10px 32px;
      font-size: 16px;
      font-weight: bold;
      background: #f3ba17;
      border-radius: 8px;
      border: none;
    }
    p {
      text-decoration-line: underline;
    }
  }
}
`;

export default function Form() {
  return (
    <>
    <Head>
        <title>Password</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BusinessStyle>
        <form className="main-style">
          <div className="header">
            <h1>New Password</h1>
          </div>
          <div className='first-row'>
                    <div className='first-name'>
                        <label>New Password</label>                      
                        <input type='text' placeholder='Enter new password here' />                       
                    </div>
                    <div className='last-name'>
                        <label>Confirm New Password</label>
                        <input type='text' placeholder='Enter confirmation of a new password' />                                      
                    </div>
            </div>
          <div className='second-row'>
            <ul>
              <li>8 characters at least</li>
              <li>1 uppercase letter</li>
              <li>1 lowercase letter</li>
              <li>1 number</li>
            </ul>
          </div>

          <div className="continue-button">
            <input
              type="submit"
              href=""
              id="button"
              value="Save new password"
            />
          </div>
        </form>
      </BusinessStyle>
    </>
  );
}
