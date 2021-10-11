import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
  padding: 20px;
  
  .formstyle{
    width: 60%;
    background: #F8F8FF;
    border-radius: 10px; 
     
  }
  .Form-design{
    padding: 30px 30px 30px 30px;
    
  }  
  
  .form-row-one{
    width:100%;
    display:inline-block;
    border: 2px solid  rgba(27, 70, 176, 1);
    border-radius: 6px ;
    padding: 4px 10px;
  }
  .form-row-one p{
      color: rgba(27, 70, 176, 1);
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
  }

  table {
    font-family: Mulish;
    font-size: 14px;
    line-height: 18px;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(odd) {
    background-color: #dddddd;
  }

  .form-head{
    display:inline-block;
    width:100%;
  }

  .active{
    color:#1B46B0;
    display:inline;
  }

  .heading{
    display:inline;
    float:left;
  }

  .heading-step{
    display:inline;
    color:#ADADAD;
    display:inline;
    float:right; 
  }

  .formlabel{
    color: #5C5C5C;
  }

  .textbox{
    border-radius: 4px;
    border: 1px solid #ededed;
  }

  .form-gap{
    margin-top:10px;
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

  .form-row-button{
    width:100%;
    justify-content:center;
    align-items: center;
    display: flex;
    margin:20px 0px 20px 0px;
  }

`;


export default function Form() {
  return (
    <>
      <Head>
        <title>Form</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>

        <form className="formstyle" action ="form2">
          
          <section className="Form-design">
            
            <div className="form-head">
              <h2 className="heading">Contigent Liabilities</h2>
              <h2 className="heading-step"><p className="active">Step 4 </p> / 6</h2>
            </div>
         
           
            <div className="form-gap table-form">
                <table>
                    <tr>
                        <th>Liabilites</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <th>As Guarantor, Endorser, or Co-maker</th>
                        <th>0.00</th>
                    </tr>
                    <tr>
                        <th>On Leases or Contracts </th>
                        <th>0.00</th>
                    </tr>
                    <tr>
                        <th>Legal Claims</th>
                        <th>0.00</th>
                    </tr>
                    <tr>
                        <th>Provisions for Federal Income Taxes</th>
                        <th>0.00</th>
                    </tr>
                    <tr>
                        <th>Other Special Debt</th>
                        <th>0.00</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Total Contingent Liabilities</th>
                        <th>0.00</th>
                    </tr>
                   
                    
                </table>
            </div>
          </section>

          <div className="form-row-button">
            <input type="submit" href="form2" id="button" value="Continue" />
          </div>
        
        </form>
      </Hero>



    </>
  );
}