import styled from 'styled-components';
import cookie from "cookie"
import Borrower from './borrower-apply';


const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

export default function Home() {
  
  // if (loggedIn) session.user = "John Doe";
  

  return (
    <>
   <Borrower />
    </>
  );
}