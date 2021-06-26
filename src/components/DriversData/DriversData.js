import React, { useState, useEffect } from "react";
import DriverDataFilter from "../DriverDataFilter/DriverDataFilter";
import DriverDataTime from "../DriverDataTime/DriverDataTime";
import AllDriverData from "../AllDriverData/AllDriverData";
import styled from "styled-components";
import axios from "axios";

const DriversData = () => {
  // const [resumeData, setResumeData] = useState({});

  // useEffect(() => {
  //   fetch("../../data/TripData_JSON.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setResumeData(data);
  //     });
  // }, []);

  // const [data, setData] = useState({});

  // useEffect(() => {
  //   axios.get("../../data/TripData_JSON.json").then((res) => {
  //     let companyData = res.totalObject;

  //     console.log(companyData);

  //     setData({
  //       Company: companyData.company,
  //       Description: companyData.text,
  //     });
  //   });
  //   // .catch((err) => {
  //   //   console.log(err);
  //   // });
  // }, []);

  return (
    <Wrapper>
      <div className="driver__data">
        <DriverDataFilter />
        <DriverDataTime />
        <AllDriverData />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .driver__data {
    width: 1595px;
  }
`;
export default DriversData;
