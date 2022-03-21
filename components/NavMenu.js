import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  height: 60px;
  background: #1b46b0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #ffffff99;

  .Document {
    background: #f3ba17;
    padding: 5px 20px;
    color: #33333399;
  }
 
`;

// .nav-link a {
//   text-decoration: none;
//   color: white;
//   padding: 10px;
//   background-color: #FFCF00;
//   &[aria-current] {
//     background-color: green;
//  }
const StyledLink = styled.a`
color: #FFF;
  
`;

const NavMenu = ( id) => {
  return (
    <Nav>
      <div>
        <Link href={`/loan-overview/${id}`} passHref>
          <StyledLink>Pre-qualify</StyledLink>
        </Link>
      </div>
      <div>
        <Link href={`financials/tax-returns/${id}`} passHref>
          <StyledLink>Business Financials</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/personalfinance_pi" passHref>
          <StyledLink>Personal Financials</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/upload" passHref>
          <StyledLink>Documents</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default NavMenu;


export function getServerSideProps({ req, res }) {
  return {
    props: {
      email: req.cookies.email || "",
      userName: req.cookies.userName || "",
      access_token: req.cookies.access_token || "",
      userid: req.cookies.userid || "",
    },
  };
}
