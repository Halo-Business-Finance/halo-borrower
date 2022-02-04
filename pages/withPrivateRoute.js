import React, { useContext, useEffect, useState } from "react";
import Router from "next/router";
import { Spin } from "antd";
import { AuthContext } from "../utils/AuthContext";
import styled from "styled-components";

const SpinnerStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrivateRoute = (AuthComponent) => {
  function PrivateComponent({ children }) {
    const { authenticated, loading, user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (authenticated && (Router.pathname === "/login"||Router.pathname === "/verify")) {
        Router.push("/test");
        setIsLoading(false);
        return;
      }

      if (authenticated) {
        setIsLoading(false);
        return;
      }

      if (
        authenticated != null &&
        !authenticated &&
        Router.pathname !== "/login"
      ) {
        Router.push("/login");
      }
      setIsLoading(false);
    }, [authenticated, loading, user]);
   console.log(loading,isLoading,authenticated,'ld')
    if (loading || isLoading || authenticated == null) {
      return (
        <SpinnerStyled className="loader">
          <Spin size="large" />
        </SpinnerStyled>
      );
    }
    return <>{children}</>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <PrivateComponent>
          <AuthComponent {...this.props} />
        </PrivateComponent>
      );
    }
  };
};

export default PrivateRoute;
