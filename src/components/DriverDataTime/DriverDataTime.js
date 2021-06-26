import React from "react";
import styled from "styled-components";
import axios from "axios";
import { links } from "../../data/DriverData";
import { driver_time } from "../../data/DriverData";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const DriverDataTime = () => {
  return (
    <Wrapper>
      <div className="main_driver_data_time">
        <div className="driver__data_time">
          {links.map((link) => {
            return <p key={link.id}>{link.text}</p>;
          })}
        </div>
        <div className="driver__single_time">
          {/* <div className="trtr">
            <IoIosArrowBack />
          </div>
          <div className="driver__time">
            <div className="driver__time_map">
              {driver_time.map((time) => (
                <div className="time" key={time.id}>
                  {time.text}
                </div>
              ))}
            </div>
          </div>

          <div className="trtr">
            <IoIosArrowForward />
          </div> */}
          <h5>Trip Tracking</h5>
        </div>
        <div className="sriver__time_action">
          <h5>Action</h5>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .driver__data_time {
    display: flex;
    background: #2d3a3d;
    height: 3vh;
    width: 925px;
    color: #fffdfdcf;
    text-align: center;
    p {
      width: 90px;
      font-size: 13px;
      font-family: "Roboto";
      margin-top: 5px;
      text-transform: capitalize;
    }
  }

  .main_driver_data_time {
    display: flex;
    background: #2d3a3d;
    justify-content: space-between;
  }

  .driver__time {
    width: 490px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #d7d8d9;
    overflow: hidden;
  }

  .time {
    padding: 0 9px;
  }

  .driver__single_time {
    display: flex;
    align-items: center;
    color: #fff;
    font-family: "Roboto";
    font-size: 15px;
  }

  .driver__time_map {
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .driver__time_map::-webkit-scrollbar {
    display: none;
  }

  .sriver__time_action {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    margin-left: -40px;
    font-size: 17px;
    color: #cad2d9;
    font-family: "Roboto";
  }
`;

export default DriverDataTime;
