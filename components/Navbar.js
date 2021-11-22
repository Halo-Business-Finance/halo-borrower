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

    if(cookie.get('access_token') != "" || cookie.get('userName') != "" || cookie.get('email') != "" || cookie.get('userid') != ""){

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
                console.log(response)
                // cookie.set("access_token", 'Bearer ' + response.data.access_token, { expires: 1 / 24 })
                // cookie.set("userName", response.data.userName, { expires: 1 / 24 })
                // cookie.set("email", response.data.Email, { expires: 1 / 24 })
                // cookie.set("userid", response.data.userId, { expires: 1 / 24 })
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
                   
                </Nav>
            </>
    
        );
    }
    
};

export default Navbar;
