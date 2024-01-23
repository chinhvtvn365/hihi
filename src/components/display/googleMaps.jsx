import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Marker = React.memo(
  ({ map, maps, lat, lng, dataItem, active, groupSize, zoomLevel }) => {
    function createDynamicSVG(number) {
      return `
        <svg clip-rule="evenodd" fill-rule="evenodd" height="512" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 1707 1707" width="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="853.335" x2="853.335" y1="-.004" y2="1706.66">
            <stop offset="0" stop-color="#66c"/>
            <stop offset=".509804" stop-color="#f0f"/>
            <stop offset="1" stop-color="#f60"/>
          </linearGradient>
          <g id="Layer_x0020_1">
            <path d="m853 0c472 0 854 382 854 853 0 472-382 854-854 854-471 0-853-382-853-854 0-471 382-853 853-853zm547 306c-302-301-792-302-1093 0-302 302-302 792-1 1094 302 302 792 302 1094 0s302-792 0-1094z" fill="url(#id0)" fill-rule="nonzero"/>
          </g>
          <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="700" font-family="Arial" dy=".3em">${number}</text>
        </svg>
      `;
    }
    const svgString = createDynamicSVG(groupSize);
    const svgBase64 = `data:image/svg+xml;base64,${btoa(svgString)}`;

    useEffect(() => {
      function CustomLabelOverlay(latlng, groupSize, map) {
        this.latlng = latlng;
        this.groupSize = groupSize;
        this.map = map;
        this.div = null;
        this.setMap(map);
      }
      CustomLabelOverlay.prototype = new maps.OverlayView();
      CustomLabelOverlay.prototype.onAdd = function () {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.padding = "4px";
        div.style.background = "transparent";
        div.style.color = "#3878c7";
        div.style.fontSize = "14px";
        div.innerHTML = this.groupSize;
        this.div = div;
        const panes = this.getPanes();
        panes.overlayLayer.appendChild(div);
      };
      CustomLabelOverlay.prototype.draw = function () {
        const overlayProjection = this.getProjection();
        const position = overlayProjection.fromLatLngToDivPixel(this.latlng);
        const div = this.div;
        div.style.left = position.x - div.offsetWidth / 2 + "px";
        div.style.top = position.y + 2 + "px";
      };
      CustomLabelOverlay.prototype.onRemove = function () {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
        }
      };

      let icon;
      if (groupSize > 1) {
        icon = {
          url: svgBase64,
          scaledSize: new maps.Size(40, 40),
        };
      } else {
        icon = {
          url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png",
          scaledSize: new maps.Size(40, 40),
        };
      }

      const marker = new maps.Marker({
        position: { lat, lng },
        map,
        icon: icon,
      });

      let labelOverlay;

      // Kiểm tra nếu groupSize bằng 1
      if (groupSize === 1) {
        labelOverlay = new CustomLabelOverlay(
          new maps.LatLng(lat, lng),
          dataItem[0].name,
          map
        );
      }

      return () => {
        marker.setMap(null);
        if (labelOverlay) {
          labelOverlay.setMap(null);
        }
      };
    }, [map, maps, active, zoomLevel, groupSize]);

    return null;
  }
);
const GoogleMaps = () => {
  let data = [
    {
      name: "Trung tâm thành phố Cà Mau",
      url: "trung-tam-thanh-pho-ca-mau",
      location: "9.177826779528475, 105.14858768471306",
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
    {
      name: "Vườn Quốc Gia Mũi Cà Mau",
      url: "thang-canh-hon-da-bac",
      location: "9.174890957244482, 105.14831457315132",
      id: "076df095-8000-70d2-4eed-3a1dfbb76385",
    },
  ];
  const [center, setCenter] = useState([9.177826779528475, 105.14858768471306]);
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
    let grouped = [];
    let maxDistance;
    if (zoomData <= 10) {
      maxDistance = 3;
    } else if (zoomData <= 13) {
      maxDistance = 0.4;
    } else if (zoomData <= 15) {
      maxDistance = 0.3;
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
    setZoomLevel(zoom);
    setCenter(center);
  };
  function getGroupCenter(group) {
    let sumLat = 0;
    let sumLng = 0;

    group.forEach((item) => {
      const [lat, lng] = extractCoordinates(item.location);
      sumLat += lat;
      sumLng += lng;
    });
    return [sumLat / group.length, sumLng / group.length];
  }
  const mapOptions = {
    fullscreenControl: false,
    zoomControl: false,
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
      center={center}
      zoom={zoomLevel}
      onChange={handleMapChange}
      hoverDistance={40 / 2}
      options={mapOptions}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={handleApiLoaded}
    >
      {map &&
        maps &&
        groupedMarkers &&
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
              groupSize={groupSize}
              zoomLevel={zoomLevel}
              extractCoordinates={extractCoordinates}
            />
          );
        })}
    </GoogleMapReact>
  );
};
export default GoogleMaps;
