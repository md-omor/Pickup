import React from "react";
import { FaCarSide } from "react-icons/fa";
// import { driver_delivery_time } from "../../data/DriverData";
import styled from "styled-components";

const DriverPickUpData = (item) => {
  return (
    <Wrapper style={{ width: "100%", display: "flex" }}>
      {/* <div className='alldriver_data'> */}
      {/* single driver left data */}

      <div key={item.driverId} className="single__driver_data">
        <div className="icon">{item.icon}</div>
        <div className="eye">{item.eye}</div>
        <div className="name">{item.driverName}</div>
        <div className="tripId">{item.itemCode}</div>
        <div className="trip">{item.trips}</div>
        <div className="VehicleInfo">{item.code}</div>
        <div className="departure">{item.startTime}</div>
        <div className="Arrival">{item.endTime}</div>
        <div className="capacity">{item.capacity}</div>
        <div className="dutyStatus">{item.dutyStatus}</div>
      </div>

      {/* single driver left data end */}

      {/* single driver right data  */}

      <div className="driver_time_map_wrap">
        {/* <div className="driver__time__map"> */}

        <div key={item.driverId} className="driver__tip_main_time">
          <div className="">{item.startTime}</div>

          <div className="balaba">
            {item.totalObject.selectedTripData.map((arrival) => {
              console.log(arrival);
              return (
                <>
                  <div className="">{arrival.arrival}</div>
                  <div className="">
                    <FaCarSide />
                  </div>
                </>
              );
            })}
          </div>
          {/* <div className="">{item.end}</div> */}
          <div className="">{item.endTime}</div>
        </div>

        {/* </div> */}

        {/* <div className="driver__repet"> */}
        {/* <div className="driver__repet_data"> */}
        {/* <div className="driver_repet_data_icon">
              <FaCarSide />
            </div>
            <div className="driver_repet_data_icon">
              <FaCarSide />
            </div>
            <div className="driver_repet_data_icon">
              <FaCarSide />
            </div>
            <div className="driver_repet_data_icon">
              <FaCarSide />
            </div>
            <div className="driver_repet_data_icon">
              <FaCarSide />
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>

      {/* single driver right data end */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .single__driver_data {
    display: flex;
    align-items: center;
    width: 935px;
    justify-content: space-between;
    font-size: 14px;
    padding-bottom: 16px;
    margin-left: 23px;
    font-family: "Roboto";
    font-weight: 500;
    margin-top: 10.5px;
  }

  .icon {
    width: 52px;
  }

  .eye {
    margin-left: 18px;
  }

  .name {
    width: 90px;
    margin-left: 29px;
    margin-right: 21px;
  }

  .icon {
    width: 52px;
  }

  .trip {
    width: 36px;
  }

  .tripId {
    width: 94px;
    margin-left: -27px;
  }
  .VehicleInfo {
    width: 90px;
  }

  .departure {
    width: 61px;
  }

  .capacity {
    width: 80px;
    text-align: center;
    background: #e5e6e6;
    padding: 5px 5px;
    border: 1px solid #19d3f1;
    cursor: pointer;
  }

  .times {
    width: 80px;
    text-align: center;
    background: #e5e6e6;
    padding: 5px 5px;
    border: 1px solid #19d3f1;
    cursor: pointer;
  }

  .dutyStatus {
    width: 103px;
    text-align: center;
    background: #e5e6e6;
    padding: 5px 5px;
    border: 1px solid #eac610;
    cursor: pointer;
    border-radius: 4px;
  }

  .allderive__data_cover {
    display: flex;
    justify-content: space-between;
  }

  .driver__trip_time {
    width: 650px;
  }

  .driver__time__map {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    margin: 8px 15px;
    position: relative;
  }

  .driver__time__map::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  .driver__time__map::-webkit-scrollbar-track {
    background: orange; /* color of the tracking area */
  }

  .driver__time__map::-webkit-scrollbar-thumb {
    background-color: blue; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid orange; /* creates padding around scroll thumb */
  }

  .driver__tip_main_time {
    display: flex;
  }

  .driver__tip_main_time > div {
    width: 50px;
    position: relative;
  }

  .driver__tip_main_time > div::before {
    content: "";
    position: absolute;
    background: black;
    width: 100%;
    height: 2px;
  }

  .driver__tip_main_time > div::after {
    content: "";
    position: absolute;
    background: red;
    width: 4px;
    height: 10px;
    top: 2px;
    left: 17px;
  }

  /* .driver__time__map:after {
    content: "";
    width: 30px;
    height: 5px;
    top: 0px;
    z-index: 999;
    position: absolute;
    left: 0px;
    background: #fffcfc;
  } */

  .driver__start_icon {
    width: 100px;
    background: #fb5200;
    margin-right: 11px;
    padding: 5px 10px;
    text-align: center;
    border-radius: 57px;
  }

  .driver_repet_data_icon {
    margin-right: 50px;
    background: #fb5200;
    width: 50px;
    text-align: center;
    border-radius: 50px;
  }

  .driver__repet {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 25px;
  }

  .driver_time_map_wrap {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 662px;
  }
`;

export default DriverPickUpData;

// {
//   driverId,
//   code,
//   driverName,
//   trips,
//   itemCode,
//   startTime,
//   endTime,
//   icon,
//   eye,
//   dutyStatus,
//   capacity,
//   arrival,
//   end,
//   totalObject,
// }
