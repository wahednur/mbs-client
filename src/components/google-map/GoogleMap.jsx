import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const GoogleMap = () => {
  // eslint-disable-next-line no-loss-of-precision
  const position = { lat: 25.00391960144043, lng: 90.01602172851562 };
  return (
    <div className="w-full h-[500px]">
      <APIProvider apiKey={import.meta.env.VITE_google_map_api}>
        <Map
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
