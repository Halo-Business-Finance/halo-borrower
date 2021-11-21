import Head from 'next/head';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import axios from 'axios';
import { createStore } from 'redux';

import { parseCookies } from "../helpers"

export default function HomePage({ data }) {
  return (
    <>
      <div>
        <h1>Homepage </h1>
        <p>Data from cookie: {data.user}</p>
      </div>
    </>
  )
}
// HomePage.getInitialProps = async ({ req, res }) => {
//   const data = parseCookies(req)
  
//    if (res) {
//     if (Object.keys(data).length === 0 && data.constructor === Object) {
//       res.writeHead(301, { Location: "/" })
//       res.end()
//     }
//   }
  
//   return {
//     data: data && data,
//   }
// }