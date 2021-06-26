import React from "react";
import { IoLocation } from "react-icons/io5";
import styled from "styled-components";

const LocationMark = ({ lat, lng, onClick }) => {
  return (
    <Wrapper>
      <div onClick={onClick} className="location__mark">
        <IoLocation className="location__icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .location__icon {
    font-size: 2rem;
    color: #26d27e;
  }
`;

export default LocationMark;
