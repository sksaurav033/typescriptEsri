import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import BasemapGallery from "esri/widgets/BasemapGallery";

const map = new EsriMap({
  basemap: "streets"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [78.02, 30.32],
  zoom: 12
});

const basemapGall = new BasemapGallery({
  view: view
});

// Add the widget to the top-right corner of the view
view.ui.add(basemapGall);