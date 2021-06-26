import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MapMain from "../components/MapMain/MapMain";
import styled from "styled-components";

const MapPage = () => {
  return (
    <Wrapper>
      <div className="mapMain">
        <Sidebar />
        <div className="header">
          <Header />
          <MapMain />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mapMain {
    display: flex;
  }

  .header {
    width: 1595px;
    overflow: hidden;
  }
`;

export default MapPage;
