import React from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";

const DriverDataFilter = () => {
  return (
    <Wrapper>
      <div className="driver_data_filter">
        <h1 className="driver__data_h1">Drivers Route Visualizer</h1>

        <div className="driver__data_date">
          <input type="date" />
        </div>
        <div className="driver_data_select">
          <select name="">
            <option value="Driver">Driver</option>
            <option value="Trip Id">Trip Id</option>
            <option value="Trip">Trip</option>
            <option value="Vehicle Info">Vehicle Info</option>
            <option value="Depature">Depature</option>
            <option value="Arrival">Arrival</option>
          </select>
        </div>
        <div className="driver__scheduled">
          <p>14/18 Scheduled</p>
          <p>638 Working Mins</p>
          <p>160.72 Total Kms</p>
        </div>

        <div className="driver__data_btn">
          <button className="routes__btn">Reoptimize Routes</button>
          <button className="driver__other_btn">
            Download Report <FiDownload />
          </button>
          <button className="driver__other_btn">Close table ---</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .driver_data_filter {
    display: flex;
    align-items: center;
    height: 6vh;
    width: 1610px;
    background: #424b4c;
    color: #fff;
  }
  .driver__data_h1 {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
    word-spacing: 3px;
    font-weight: 500;
    margin-left: 30px;
  }

  .driver__data_date {
    margin-left: 15px;
    input {
      background: #2c3135;
      border: none;
      outline: none;
      padding: 5px 10px;
      color: #fff;
      font-size: 13px;
      border-radius: 5px;
      font-family: sans-serif;
      font-weight: 600;
      width: 147px;
    }
  }

  .driver_data_select {
    margin-left: 15px;
    select {
      background: #2c3135;
      padding: 6px 8px;
      color: #fff;
      font-family: "Roboto";
      border-radius: 5px;
      border: none;
      outline: none;
      font-weight: 600;
    }
  }

  .driver__scheduled {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 510px;
    p {
      margin-right: 20px;
      font-family: "Roboto";
      font-size: 15px;
    }
  }

  .driver__data_btn {
    width: 600px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-left: 129px;
  }

  button.routes__btn {
    background: #fdd12c;
    margin-right: 14px;
    padding: 7px 18px;
    color: #2b2b2be6;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 13.5px;
    font-family: "Roboto";
    font-weight: 500;
    cursor: pointer;
  }

  button.driver__other_btn {
    background: #2c3135b0;
    color: #fff;
    padding: 6px 15px;
    margin-right: 15px;
    border-radius: 4px;
    border: none;
    outline: none;
    font-family: "Roboto";
    font-weight: 500;
    cursor: pointer;
    svg {
      margin-left: 14px;
    }
  }
`;

export default DriverDataFilter;
