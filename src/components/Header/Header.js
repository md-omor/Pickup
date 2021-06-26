import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div className="header">
        <div className="header_content">
          <h1>ROUTE OPTMIZER</h1>
        </div>

        <div className="header__div">
          <div className="header____single_div"></div>
          <div className="header___single_div"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .header {
    display: block;
    height: 70px;
    width: 1610px;
    background: #424b4c;
    color: #fff;
    padding: 0 40px;
  }

  .header_content {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 20px;
    letter-spacing: 0.5px;
    word-spacing: 6px;
  }

  .header__single_div {
    display: flex;
    align-items: center;
  }

  .header {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }

  .header__div {
    align-items: center;
    display: flex;
    cursor: pointer;
    margin-right: 20px;
  }

  .header___single_div {
    background: #2d3a3d;
    margin-bottom: 15px;
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin-left: 14px;
    margin-top: 10px;
  }

  .header____single_div {
    background: #7cc246;
    margin-bottom: 15px;
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin-left: 14px;
    margin-top: 10px;
  }
`;
export default Header;
