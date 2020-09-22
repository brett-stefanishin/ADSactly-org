import React from "react";
import Typical from "react-typical";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1>
                  <Typical
                    steps={ 
                      ['ADSactly.org', 2500,
                       'ADSactly.world', 2500, 
                       'ADSactly.uno', 2500,
                       'ADSactly.dao', 2500,
                       'ADSactly.universe', 2500,
                       'ADSactly.crypto', 2500 ]
                     }
                    loop={Infinity}
                    wrapper="h3"
                  />
              </h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Welcome to the <b>future</b> of decentralized autonomous communities.
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
