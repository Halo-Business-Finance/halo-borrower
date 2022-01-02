import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`

`;

const StyledLink = styled.a``;

export default function ProGressTracker() {

// const ProGressTracker = () => {
    
  return (
    <prtracker>
          <section className="progress-tracker">
          <div className="progress-form">
            <h3><a href="/personalfinance_pi">Personal Information</a></h3>
            <div className="meter pi">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3><a href="/personalfinance_gi">General Information</a></h3>
            <div className="meter gi">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3><a href="/personalfinance_is">
              Income
              <br />
              Source
              </a>
            </h3>
            <div className="meter is">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3><a href="/personalfinance_cl">Contigent Liabilities</a></h3>
            <div className="meter cl">
              <span></span>
            </div>
          </div>

          {/* <div className="progress-form">
            <h3>
              Balance
              <br /> Sheet
            </h3>
            <div className="meter bs">
              <span></span>
            </div>
          </div> */}

          <div className="progress-form">
            <h3><a href="/personalfinance_sap">Schedule of Assets Pledged</a></h3>
            <div className="meter soap">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3><a href="/personalfinance_bds">Business Debt Schedule</a></h3>
            <div className="meter bds">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3><a href="/personalfinance_ptr">Personal Tax Returns(100%)</a></h3>
            <div className="meter ptr">
              <span></span>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
    </prtracker>
  );
};

// export default function ProGressTracker();
