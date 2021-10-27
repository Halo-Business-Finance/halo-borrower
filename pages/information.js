import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #E5E5E5;
padding: 20px;
font-family: Mulish;


.formstyle{
    width: 60%;
    background: #F8F8FF;
    border-radius: 10px; 
}
.Form-design{
    padding: 30px 30px 30px 30px;
    
}

.textbox{
    width:100%;
    padding: 12px;
}

.form-row-one{
    column-count: 2;
    width:100%;
    display:inline-block;
    column-gap:5%;
}

.form-row-two{
    width:100%;
    display:inline-block;
}

.form-row-three{
    column-count: 3;
    width:100%;
    display:inline-block;
    
}

.form-row-four{
    width:100%;
    display:inline-block;
}

.form-city{
    width:100%;
    display:inline-block;
    margin-right:5%;
}


.form-addess{
    width:100%;
    display:inline-block;
    margin-right:5%;
}

.form-phone{
    width:100%;
    display:inline-block;
    margin-right:5%;
}

.form-state{
    
    display: inline-block;
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
    margin-top:20px;
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
.radio-container{
    padding: 5px 5px 5px 5px;
    border: 1px solid #ededed; 
    border-radius: 4px;
    background-color:white;
}

.radio-two{
    column-count: 2;
    width:100%;
    display:inline-block;
    column-gap:5%;
}
.raido-four {
    column-count: 4;
    width:100%;
    display:inline-block;
    column-gap:5%;
}


`;


export default function Form() {
    return (
        <>
            <Head>
                <title>Personal Information</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>

                <form className="formstyle" action="information2">

                    <section className="Form-design">

                        <div className="form-head">
                            <h2 className="heading">Personal Information</h2>
                            <h2 className="heading-step"><p className="active">Step 1</p> /6</h2>
                        </div>

                        <div className="form-row-one form-gap">
                            <div className="form-group form-name">
                                <label htmlFor="fname" className="formlabel ">Applicant Name</label>
                                <input id="firstname" className="textbox" type="text" autoComplete="fname" placeholder="Enter Applicant Name" required />
                            </div>
                            <div className="form-group form-dba">
                                <label htmlFor="fdba" className="formlabel">Business phone</label>
                                <input id="firstname" className="textbox" type="text" autoComplete="fdba" placeholder="XXX-XXX-XXXX" required />
                            </div>
                        </div>

                        <div className="form-row-one form-gap">
                            <div className="form-group form-addess">
                                <label htmlFor="fname" className="formlabel">Business of Employer</label>
                                <input id="address" className="textbox" type="text" autoComplete="fname" placeholder="Enter Applicant Name" required />
                            </div>
                            <div className="form-group form-suite">
                                <label htmlFor="fname" className="formlabel">Date of Birth</label>
                                <input id="suite" className="textbox" type="text" autoComplete="fname" placeholder="MM-DD-YYYY" required />
                            </div>
                        </div>

                        <div className="form-row-one form-gap">
                            <div className="form-group form-city">
                                <label htmlFor="fname" className="formlabel">Co-Applicant Name</label>
                                <input id="city" className="textbox" type="text" autoComplete="fname" placeholder="Enter Co-Applicant Name" required />
                            </div>
                            <div className="form-group form-bphone">
                                <label htmlFor="fname" className="formlabel">Business Phone</label>
                                <input id="state" className="textbox" type="text" autoComplete="fname" placeholder="XXX-XXX-XXXX" required />
                            </div>
                        </div>



                        <div className="form-row-one form-gap">

                            <div className="form-group form-zip">
                                <label htmlFor="fname" className="formlabel">Business of Employeer</label>
                                <input id="employer" className="textbox" type="text" autoComplete="fname" placeholder="Enter Applicant Name" required />
                            </div>
                            <div className="form-group form-phone">
                                <label htmlFor="fname" className="formlabel">Date of Birth</label>
                                <input id="dob" className="textbox" type="text" autoComplete="fname" placeholder="MM-DD-YYYY" required />
                            </div>
                        </div>




                        <div className="form-row-one form-gap">
                            <div className="form-group form-website">
                                <label htmlFor="fname" className="formlabel">Residence Address</label>
                                <input id="website" className="textbox" type="text" autoComplete="fname" placeholder="Enter City" required />
                            </div>
                            <div className="form-group form-city">
                                <label htmlFor="fname" className="formlabel">City</label>
                                <input id="city" className="textbox" type="text" autoComplete="fname" placeholder="Enter City" required />
                            </div>

                        </div>

                        <div className="form-row-three form-gap">
                            <div className="form-group form-state">
                                <label htmlFor="fname" className="formlabel">State</label>
                                <input id="state" className="textbox" type="text" autoComplete="fname" placeholder="Select State" required />
                            </div>
                            <div className="form-group form-fzip">
                                <label htmlFor="fname" className="formlabel">Zip Code</label>
                                <input id="zipcode" className="textbox" type="text" autoComplete="fname" placeholder="Enter Zip Code" required />
                            </div>
                            <div className="form-group form-tele">
                                <label htmlFor="fname" className="formlabel">Residence Phone</label>
                                <input id="tele" className="textbox" type="text" autoComplete="fname" placeholder="(XXX)-(XXX)-(XXXX)" required />
                            </div>
                        </div>
                        <div className="form-row form-gap">
                            <label htmlFor="fentity" className="formlabel ">Partner or officer in any other venture?</label>
                            <div className="radio-two">

                                <div className="radio-container">
                                    <input type="radio" name="radio" />

                                    <label>Yes</label>
                                </div>

                                <div className="radio-container">
                                    <input type="radio" name="radio" />
                                    <label>No</label>
                                </div>

                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="inform" className="formlabel">Do you have a will?</label>
                            <div className="radio-two">
                                <div className="radio-container">
                                    <input type="radio" name="radio" />
                                    <label>Yes</label>
                                </div>

                                <div className="radio-container">
                                    <input type="radio" name="radio" />
                                    <label>No</label>
                                </div>
                                <div className="form-group form-website">
                                    <label htmlFor="fname" className="formlabel">Name of executor</label>
                                    <input id="website" className="textbox" type="text" autoComplete="fname" placeholder="(XXX)-(XXX)-(XXXX)" required />
                                </div>

                            </div>


                        </div>
                    </section>

                    <div className="form-row-button">
                        <input type="submit" href="information2" id="button" value="Continue" />
                    </div>

                </form>
            </Hero>



        </>
    );
}