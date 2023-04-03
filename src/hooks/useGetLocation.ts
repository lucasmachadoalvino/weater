import Geolocation from '@react-native-community/geolocation';
import {useState} from 'react';

export default function useGetLocation() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  Geolocation.getCurrentPosition(info => {
    setLongitude(info.coords.longitude);
    setLatitude(info.coords.latitude);
  });

  return {
    longitude,
    latitude,
  };
}
