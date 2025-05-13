import { FC, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapTypes } from "@/types/ApiTypes";
import Image from "next/image";

interface Props {
  onSave: (value: MapTypes) => void;
}

const Map: FC<Props> = ({ onSave }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYW1hbGNoaWsiLCJhIjoiY21hamoybThhMGhwNzJqczdhajk3bGNhNyJ9.wIOCz830ru_I5OMyBe9DZA";
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [69.2401, 41.2995], // Начальные координаты
        zoom: 15,
      });

      mapRef.current = newMap;

      newMap.on("load", () => {
        newMap.resize();
      });

      newMap.on("dragend", () => {
        onSave({ lat: newMap.getCenter().lat, long: newMap.getCenter().lng });
      });
    }
  }, []);

  const locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (mapRef.current) {
            mapRef.current.flyTo({ center: [longitude, latitude], zoom: 17 });

            onSave({ lat: latitude, long: longitude });
          }
        },
        (error) => {
          console.error("Ошибка при получении геолокации:", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Геолокация не поддерживается вашим браузером");
    }
  };

  return (
    <div className="w-full relative mb-4 rounded-md">
      <div className="flex items-center justify-around w-full">
        <Image
          src={"/assets/icons/pin.svg"}
          width={30}
          height={30}
          alt="logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <div ref={mapContainer} className="w-full h-[503px] rounded-md" />
        <div
          className="flex items-center justify-center rounded-[6px] absolute right-2.5 bottom-10 px-2.5 h-[50px] bg-[#fff] z-10"
          onClick={locateUser}
        >
          <p>Найти меня</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
