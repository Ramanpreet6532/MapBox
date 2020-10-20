import React from 'react';
import './App.css';

import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css";

import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"

import store from "./stores"

 const googlePoint = [  34.0479, 100.6197];  // india 
 const center = googlePoint.reverse();

//const center = [20.5937, 78.9629];  // india 
console.log("center", center)
mapboxgl.accessToken =   "pk.eyJ1IjoibmFrYW5pc2hpIiwiYSI6ImNqc3gwOGx0ejBuZ28zeXFqNmdtcmZta2IifQ.N7to3Ev75bjnH9O81Cun6w";

const map = new mapboxgl.Map({
  container: "map", 
  zoom: 2,
   
   center: [78.6197, 20.0479], // India
   style: "mapbox://styles/mapbox/light-v10"
  // style: { backgroundColor: "lightgrey"}
})

var directions = new MapboxDirections ({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving"
  });

map.addControl(
  directions,
  'top-left'
  );
 
map.on("load", function(e) {

  map.addLayer({
    id: "locations",
    type: "symbol",
    source: {
      type: "geojson",
      data: store
    },
    layout: {
    "icon-image": "shop-15",
      "icon-allow-overlap": true
  }
  
})

map.on("click", "locations", function(e){
  console.log(e, "events")
  console.log(e.features, "eventsFeatures")
  map.flyTo({ center: e.features[0].geometry.coordinates })
 
})



})



function App() {
     return(
        <div className="App">
     </div>
     )   
}
 
export default App;
