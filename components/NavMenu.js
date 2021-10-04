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

const NavMenu = () => {


    return (
        <Nav>
            <div>
                <Link href='/form' passHref>
                    <StyledLink>Pre-qualify</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/form' passHref>
                    <StyledLink>Financials</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/form' passHref>
                    <StyledLink>Personal Financials</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/form' passHref>
                    <StyledLink>Documents</StyledLink>
                </Link>
            </div>
        </Nav>
    );
};

export default NavMenu;