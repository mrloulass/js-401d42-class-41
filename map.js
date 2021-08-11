import Map from 'ol/Map';
import ViewMap from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default function OlMap() {
  return (
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new ViewMap({
        center: [0, 0],
        zoom: 2
      })
    })
  )
}

