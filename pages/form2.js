import styled from 'styled-components';
const SecondFormStyling = styled.div`
    width: 730px;
    height: 540px;
    background: #FFFFFF;
    border: 2px solid  black;  
    h1{
        margin: 5px 10px ;
        padding: 0;
    } 
    input{
        font-size: 16px;
        padding: 4px;
        border:  2px solid #C4C4C4;
        border-radius: 5px;
    }
    button {
        margin: 10px 50px;
        width: 10rem;
        height: 3rem;
        background: yellow;
        border-radius: 10px;
    }
    .form-two {
        margin: 0px 10px ;
        gap: 20px;
        // margin: auto;
        display: flex;
        justify-content: flex-start;
        flex-flow:  wrap;
        align-items: center;
        align-content: center;
        // background: blue;
        .data-one{
            margin-top: -10px;
            display: flex;
            // align-items: center;
            gap: 40px;
            .container{
                padding: 10px 20px;
                // background: green;
                border:  2px solid #C4C4C4;
                border-radius: 5px;
            }
        }
        .data-two{
            // background: green;
            display: flex;
            flex-direction: column;
            gap: 5px;
           flex-basis: 350px;
            padding: 4px;
        }
        .data-three{
            // background: green;
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-basis: 250px;
            padding: 4px;
        }
        .data-four{
            // background: green;
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-basis: 226px;
            padding: 4px;
        }
        .data-five{
            // background: green;
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-basis: 432px;
            padding: 4px;
        }
        .data-six{
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-basis: 682px;
            padding: 4px;
        }
        .data-seven{
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-basis: 396px;
            padding: 4px;
        }
        .data-eight{           
            width: 290px;           
            .eight-container{
                padding-top: 6px;
                display: flex;
                align-items: center;
                align-content: center;
                gap: 30px;
            .container{
                font-size: 16px;
                padding: 6px 30px;
                border:  2px solid #C4C4C4;
                border-radius: 5px;
            }
        }
        }
    }
`
function Form2() {
    return (
        <>
        <SecondFormStyling>
        <div>
            <form className="">
            <h1>Business Information</h1>
                <div className="form-two">
                 Legal entity
                <div className="data-one">
                <label className="container">
                    <input type="radio"  name="radio" />
                    <span className="checkmark"></span>
                    C- Corp
                </label>
                <label className="container">
                    <input type="radio"  name="radio" />
                    <span className="checkmark"></span>
                   Sole-Prop
                </label>
                <label className="container">
                    <input type="radio"  name="radio" />
                    <span className="checkmark"></span>
                    LLC
                </label>
                <label className="container">
                    <input type="radio"  name="radio" />
                    <span className="checkmark"></span>
                    Partnership
                </label>
                </div>
                <div className="data-two">
                   <label> State of Organization   </label>
                    <input type="text"  name=""  placeholder="Enter State of Organization"/>
               </div> 
               <div className="data-three">
                <label> Federal Tax ID </label>
                    <input type="text"  name="" placeholder="Enter Federal Tax ID" required />
               </div>
               <div className="data-four">
                <label > Business Start Date </label>
                    <input type="text"  name="" placeholder="" required />
               </div>
               <div className="data-five">
                <label > Industry Description/SIC </label>
                    <input type="text"  name="" placeholder="Enter Industry Description/SIC:" required />
               </div>
               <div className="data-six">
                <label> Type of Product/Service Sold </label>
                    <input type="text"  name="" placeholder="Enter Type of Product/Service Sold" required />
               </div>
               <div className="data-seven">
                <label> Total Company Employees and 1099 Contractors </label>
                    <input type="text"  name="" placeholder="Enter State of Organization" required />
               </div>
                <div className="data-eight">
                Was this Business Purchased?
                <div className="eight-container">
                <label className="container">
                    <input type="radio"  name="radio" />
                    <span className="checkmark"></span>
                    Yes
                </label>
                <label className="container">
                    <input type="radio"  name="radio" />
                    <span className="checkmark"></span>
                    NO
                </label>
                </div>
               </div>
               </div>
        </form>           
        </div>
        <button href="/ personal-fiance">Continue</button>
        </SecondFormStyling>
        </>
    )
}
export default Form2