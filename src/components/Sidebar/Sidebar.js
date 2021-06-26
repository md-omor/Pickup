import React from "react";
import styled from "styled-components";
import { TiLocation } from "react-icons/ti";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <div className="siderbar__main_icon">
          <TiLocation />
        </div>
        <div className="sidebar__div">
          <div className="sidebar__single_div"></div>
          <div className="sidebar__single_div"></div>
          <div className="sidebar__single_div"></div>
          <div className="sidebar__single_div"></div>
          <div className="sidebar__single_div"></div>
        </div>
        <div className="sidebar_bottom_div">
          <div className="sidebar__single_div"> </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sidebar {
    height: 100vh;
    width: 70px;
    background: #222c2d;
    color: #fff;
    text-align: center;
  }

  .siderbar__main_icon {
    padding: 25px 0;
    font-size: 40px;
    color: #7cc246;
    width: 100%;
  }

  .sidebar__single_div {
    background: #2d3a3d;
    margin-bottom: 15px;
    width: 46px;
    height: 47px;
    border-radius: 5px;
  }

  .sidebar__div {
    align-items: center;
    display: inline-block;
    cursor: pointer;
    margin-top: 20px;
  }

  .sidebar_bottom_div {
    margin-top: 400px;
    align-items: center;
    display: inline-block;
    cursor: pointer;
  }
`;

export default Sidebar;
