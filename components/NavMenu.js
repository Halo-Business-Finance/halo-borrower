import styled from 'styled-components';
import Link from 'next/link';


const Nav = styled.nav`
  height: 60px;
  background: #1B46B0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #FFFFFF99;
  
  
  .Document{
      background: #F3BA17;
      padding: 5px 20px;
      color:#33333399;
  }
  
`;

const StyledLink = styled.a`


`;

const NavMenu = (email, userName, access_token, userid) => {

    return (
        <Nav>
            <div>
                <Link href='/form' passHref>
                    <StyledLink>Pre-qualify</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/business' passHref>
                    <StyledLink>Business Financials</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/information' passHref>
                    <StyledLink>Personal Financials</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/upload' passHref>
                    <StyledLink>Documents</StyledLink>
                </Link>
            </div>
        </Nav>
    );
};

export default NavMenu;


export function getServerSideProps({ req, res }) {
  
    return { props: { email: req.cookies.email || "", userName: req.cookies.userName || "", access_token: req.cookies.access_token || "", userid: req.cookies.userid || ""} };

}