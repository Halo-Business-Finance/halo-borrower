import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/logo.svg';
import NavMenu from './NavMenu';

const Nav = styled.nav`
  height: 60px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  
 
  .logo{
      margin-left: 155px;
  }

  .top-details{
    margin-right: 155px;
  }

`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {

    


    return (
        <>

            <Nav>
                <div className="logo">

                    <StyledLink>
                        <Image src={Logo} height={128} width={77}
                            alt="logo" />
                    </StyledLink>

                </div>
                <div className="top-details">
                    <Link href='/' passHref>
                        <StyledLink>Phone: (877) 597-1714</StyledLink>
                    </Link>
                    <Link href='/form' passHref>
                        <StyledLink>John Doe</StyledLink>
                    </Link>

                </div>
            </Nav>
            <NavMenu />
        </>

    );
};

export default Navbar;