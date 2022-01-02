import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.div`
  height: 60px;
  background: #1b46b0;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 0 13rem ;
  gap: 6rem;
  font-weight: 600;
  
  /* .Document {
    background: #f3ba17;
    padding: 5px 20px;
    color: #33333399;
  } */
`;

export default function loanNavbar() {
  return (
    <>
      <Nav>
       
          <div>
            <Link href="/" passHref>
              <a>All aplications (6)</a>
            </Link>
          </div>
          <div>
            <Link href="/" passHref>
              <a>In process (3)</a>
            </Link>
          </div>
         
     
      </Nav>
    </>
  );
}
