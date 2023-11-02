import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

interface MapProps {
  position: [number, number]
  zoom: number
}

export default function Map(props: MapProps) {
  const { position, zoom } = props

  if (typeof window === "undefined") {
    return <div />
  }

  return <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: 500, width: '100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 Tooltip. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}
