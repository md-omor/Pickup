import { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "../../data/TripData_JSON.json";
import DriverPickUpData from "../../components/DriverPickUpData/DriverPickUpData";

const AllDriverData = () => {
  // const [arriavalsc, setarriaval] = useState();
  // console.log(arriavalsc)
  return (
    <Wrapper>
      <div className="allderive__data_cover">
        {Data.map((item) => (
          <DriverPickUpData
            key={item.driverId}
            driverId={item.driverId}
            code={item.code}
            driverName={item.driverName}
            trips={item.trips}
            itemCode={item.Code}
            startTime={item.startTime}
            endTime={item.endTime}
            icon={item.icon}
            eye={item.eye}
            dutyStatus={item.dutyStatus}
            capacity={item.capacity}
            panelType={item.panelType}
            totalObject={item.totalObject}
            end={item.end}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* .allderive__data_cover {
    display: flex;
    justify-content: center;
    width: 1595px;
  } */
`;

export default AllDriverData;

// if(9.00 || 10.00){

// }

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
//   panelType,
//   end,
//   totalObject,
// }
