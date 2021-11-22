import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/logo.svg';
import NavMenu from './NavMenu';
import React, { useState } from 'react';
import cookie from 'js-cookie';
import axios from 'axios';

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

const Navbar = (data) => {

    if(typeof cookie.get('access_token') !== "undefined" || typeof cookie.get('userName') !== "undefined" || typeof cookie.get('email') !== "undefined" || typeof cookie.get('userid') !== "undefined"){
        // console.log(cookie.get('access_token'));
        var token = cookie.get('access_token');
        
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':  'Bearer '+ token
              }
            }


        axios.get('http://75.126.149.253/api/borrower/get-all-loan-requests',  config)
        .then((response) => {
        
            try {
                // console.log(response)
                
            } catch (err) {
              
            }
        }, (error) => {
          console.log(error);
        });

        var username = cookie.get('userName');

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
                            <StyledLink>Phone: </StyledLink>
                        </Link>
                        <Link href='/form' passHref>
                            <StyledLink>{username}</StyledLink>
                        </Link>
    
                    </div>
                </Nav>
                <NavMenu />
            </>
    
        );
    }
    else{
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
                    
                        <Link href='/login' passHref>
                            <StyledLink>Login</StyledLink>
                        </Link>
    
                    </div>
                   
                </Nav>
            </>
    
        );
    }
    
};

export default Navbar;
