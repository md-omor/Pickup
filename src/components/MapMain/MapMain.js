import React from "react";
import Map from "../Map/Map";
import Loading from "../Loading/Loading";
import DriversData from "../DriversData/DriversData";
import { useState, useEffect } from "react";
import styled from "styled-components";

const MapMain = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
    // console.log(eventData);
  }, []);

  return (
    <Wrapper>
      <div className="map__main_header">
        {!loading ? <Map eventData={eventData} /> : <Loading />}
        <DriversData />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .map__main_header {
    width: 1610px;
  }
`;

export default MapMain;
