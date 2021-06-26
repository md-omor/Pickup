import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMark from "../LocationMark/LocationMark";
import LocationInfo from "../LocationInfo/LocationInfo";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMark
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });
  return (
    <div
      className="map"
      style={{ height: "43vh", width: "100%", position: "relative" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCezUPUlJ28J6S_1o7TDwjoKW2si4o4U4c" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 59.95,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
