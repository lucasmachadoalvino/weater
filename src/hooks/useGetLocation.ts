import Geolocation from '@react-native-community/geolocation';
import {useState} from 'react';
import Geocoder from 'react-native-geocoding';

export default function useGetLocation() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [city, setCity] = useState('');

  Geolocation.getCurrentPosition(info => {
    Geocoder.init('AIzaSyB-Q-7FRA_pStvAFeHZPDD_b08wx7LAuPk');

    setLongitude(info.coords.longitude);
    setLatitude(info.coords.latitude);

    Geocoder.from(info.coords.latitude, info.coords.longitude).then(data => {
      setCity(data.results[0].address_components[3].short_name);
    });
  });

  return {
    longitude,
    latitude,
    city,
  };
}
