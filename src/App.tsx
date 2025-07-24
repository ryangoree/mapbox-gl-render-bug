import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

function App() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40],
      zoom: 9,
    });

    new mapboxgl.Marker()
      .setLngLat([-74.5, 40])
      .addTo(mapRef.current);
  }, []);

  return (
    <div
      style={{ height: '100vh' }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
}

export default App;
