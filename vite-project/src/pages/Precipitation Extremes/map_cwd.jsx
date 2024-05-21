import "leaflet/dist/leaflet.css";
import "./mapcss.css";

import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Polygon, Circle, Marker, Popup, Tooltip } from "react-leaflet";
// import mapData from "./india_st.json";
// import mapData from "./India_State_Boundary.json";

// import mapData from "./States.json";
import mapData from "./india_ds.json";


import dataPoints from "./KBA.json"


function MyMap_Rx1({dataArray}) {
  console.log(dataArray);
  
  // const [hoveredFeature, setHoveredFeature] = useState("hiiooioi");

  // const handleMouseOver = (event, feature) => {
  //   setHoveredFeature(feature);
  // };

  // const handleMouseOut = () => {
  //   setHoveredFeature(null);
  // };
  const [markers, setMarkers] = useState([])
  const handleCircleClick = (circle) => {
    const newMarker = {
      id: circle.id,
      position: [circle.Latitude, circle.Longitude],
      content: circle.KBA,
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const getColor = (index) => {
    // Define your color mapping logic based on the index value here.
    // For example, you can use a switch statement or if-else conditions to map index values to colors.
    // This is just a simple example:
    
    if (index >= 0 && index < 10) return  '#54b9ff';
    if (index >= 10 && index < 15) return  '#3176ff';
    if (index >= 15 && index < 30) return  '#0744ac';
    // if (index >= 30 ) return  '#000d54';
    if (index >= 30 ) return  ' rgb(0 13 84 / 84%)';

   
    
    
  };
     
   
    

  return (
    <div className="w-50 h-50">

      <MapContainer zoom={4.5} center={[23.5120, 80.3290]} className="mapspi"
     doubleClickZoom={false}  // Disable zooming on double click
     scrollWheelZoom={false}
     zoomControl={false} // Disable zoom control
     dragging={false} 
        > 
      
        {/* <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=1UvW0tGrts7pl8q8PmRX"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      /> */}

        {
          mapData.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
            // console.log(coordinates);

            return (
              <Polygon
                pathOptions={{
                  fillColor: '#696462',
                  fillOpacity: 0.1,
                  weight: 1,
                  color: 'black'
                }}
                positions={coordinates}
             
              />
            )
          })
        }
        {
          dataArray &&
          dataArray.map((point) => (
            <Circle
              key={point.id}
              center={[point.data.latitude, point.data.longitude]}
              pathOptions={{
                fillColor: getColor(point.data.index),
                fillOpacity: 5,
                color: "none"

              }}

              radius={30000}
            // eventHandlers={{
            //   mouseover: () => handleCircleMouseOver(point, point.KBA),
            //   mouseout: handleCircleMouseOut,
            // }}
            
            />

          ))
        }

        { dataArray && dataArray.map((marker) => (
          <Marker key={marker.id} position={[marker.data.latitude, marker.data.longitude]} opacity={0} >
            <Popup>{marker.data.location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};


export default MyMap_Rx1;