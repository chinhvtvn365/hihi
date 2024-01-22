import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Marker = React.memo(
  ({ map, maps, dataItem, active, onMarkerClick, extractCoordinates }) => {
    const [infoWindow, setInfoWindow] = useState(null);
    const locationParam = extractCoordinates(dataItem?.location);
    let lat = 9.176237;
    let lng = 105.150845;
    if (Array.isArray(locationParam) && locationParam.length === 2) {
      [lat, lng] = locationParam;
    }
    useEffect(() => {
      const marker = new maps.Marker({
        position: { lat, lng },
        map,
      });

      marker.addListener("click", () => {
        onMarkerClick(dataItem.id);
      });
      const content = ` <div class="ggmap__info">
    
    </div>
    `;
      const infowindow = new maps.InfoWindow({
        content,
      });
      if (active) {
        infowindow.open(map, marker);
        setInfoWindow(infowindow);
      }

      return () => {
        marker.setMap(null);
      };
    }, [map, maps, active, dataItem]);

    useEffect(() => {
      if (!active && infoWindow) {
        infoWindow.close();
      }
    }, [active, infoWindow]);

    return null;
  }
);
const GoogleMaps = () => {
  let data = [
    {
      name: "Trung tâm thành phố Cà Mau",
      url: "trung-tam-thanh-pho-ca-mau",
      location: "9.174247,105.158939",
      id: "1173be09-8a3a-ae82-1443-3a0d1554a4b3",
    },
    {
      name: "Sắc tứ Quan Âm cổ tự (Chùa Phật Tổ)",
      url: "sac-tu-quan-am-co-tu-chu-phat-to",
      location: "9.181401236961332, 105.14818552009254",
      id: "dc46f777-1c25-1495-3fbf-3a0d13c12f6d",
    },
    {
      name: "Thắng cảnh Hòn Đá Bạc",
      url: "thang-canh-hon-da-bac",
      location: "9.179862899051999, 105.14748194011595",
      id: "076df095-8000-70d2-4eed-3a0dfbb76385",
    },
  ];
  let center = [9.174247, 105.158939];
  let zoom = 15;

  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState();
  const handleApiLoaded = ({ map, maps }) => {
    setMap(map);
    setMaps(maps);
  };
  const extractCoordinates = (str) => {
    if (str.includes("google.com/maps")) {
      const regex = /@?(-?\d+\.\d+),(-?\d+\.\d+)/;
      const match = str.match(regex);
      if (match) {
        return [parseFloat(match[1]), parseFloat(match[2])];
      }
    } else {
      const coords = str.split(",");
      if (coords.length === 2) {
        return coords.map((coord) => parseFloat(coord));
      }
    }
    return null;
  };

  const [zoomLevel, setZoomLevel] = useState(zoom);
  const [groupedMarkers, setGroupedMarkers] = useState([]);
  function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  function groupLocations(data, zoomData) {
    if (zoomData > 16) {
      // Khi zoom lớn hơn 16, mỗi item là một nhóm riêng lẻ
      return data.map(item => [item]);
    }
    let grouped = [];
    let maxDistance;

    if (zoomData <= 9) {
      maxDistance = 2;
    } else if (zoomData <= 12) {
      maxDistance = 1;
    } else if (zoomData <= 15) {
      maxDistance = 0.5;
    } else {
      maxDistance = 0;
    }
    data.forEach((item, index) => {
      let added = false;
      const [lat1, lng1] = extractCoordinates(item.location);
      for (let group of grouped) {
        const [lat2, lng2] = extractCoordinates(group[0].location);
        if (getDistance(lat1, lng1, lat2, lng2) <= maxDistance) {
          group.push(item);
          added = true;
          break;
        }
      }
      if (!added) {
        grouped.push([item]);
      }
    });

    return grouped;
  }

  const handleMapChange = ({ center, zoom, bounds, marginBounds }) => {
    const result = groupLocations(data, zoom);
    setGroupedMarkers(result);
    console.log(result);
    setZoomLevel(zoom);
  };
  function getGroupCenter(group) {
    let sumLat = 0;
    let sumLng = 0;
  
    group.forEach(item => {
      const [lat, lng] = extractCoordinates(item.location);
      sumLat += lat;
      sumLng += lng;
    });
  
    return [sumLat / group.length, sumLng / group.length];
  }
  console.log(groupedMarkers);
  console.log(data);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBVjJC0YfitZBQ16t7fnPvK7R8nvFY9CN0" }}
      center={center}
      zoom={zoomLevel}
      onChange={handleMapChange}
      hoverDistance={40 / 2}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={handleApiLoaded}
    >
      {map &&
        maps &&
        data &&
        groupedMarkers.map((item, index) => {
          const groupCenter = getGroupCenter(item);
          const groupSize = item.length;
          return (
            <Marker
              key={index}
              map={map}
              maps={maps}
              dataItem={item}
              active={activeMarker === item.id}
              lat={groupCenter[0]}
              lng={groupCenter[1]}
              text={`${groupSize}`}
              extractCoordinates={extractCoordinates}
            />
          );
        })}
    </GoogleMapReact>
  );
};
export default GoogleMaps;
