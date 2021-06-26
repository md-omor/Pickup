import React from "react";
import styled from "styled-components";

const LocationInfo = ({ info }) => {
  return (
    <Wrapper>
      <div className="location__info">
        <h2>Event Location Info</h2>
        <ul>
          <li>
            ID: <strong>{info.id}</strong>
          </li>
          <li>
            TITLE: <strong>{info.title}</strong>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .location__info {
    position: absolute;
    top: 80px;
    right: 50px;
    width: 400px;
    min-height: 200px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    font-size: 18px;
    color: #fff;
  }

  .location__info ul {
    list-style-type: none;
    padding: 0;
  }

  .location__info li {
    padding: 5px 0;
  }
`;

export default LocationInfo;
