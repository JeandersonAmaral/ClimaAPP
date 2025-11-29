// useWeather.js
import { useState, useCallback } from 'react';
import * as Location from 'expo-location';
import { fetchWeatherData, fetchWeatherDataByCoords } from '../services/weatherService';

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const searchWeatherByCoords = useCallback(async (lat, lon, animations) => {
    if (animations) {
      animations.tempAnim.setValue(0);
      animations.forecastAnim.setValue(0);
      animations.detailsAnim.setValue(0);
    }
    
    setError('');
    const data = await fetchWeatherDataByCoords(lat, lon);
    if (data) {
      setWeather(data);
      setForecast(data.forecast || []);
      setCity(data.name);
    } else {
      setError('Não foi possível obter dados pela localização.');
    }
  }, []);

  const searchWeather = useCallback(async (cityName, animations) => {
    if (!cityName) return;
    
    if (animations) {
      animations.tempAnim.setValue(0);
      animations.forecastAnim.setValue(0);
      animations.detailsAnim.setValue(0);
    }
    
    setError('');
    try {
      const data = await fetchWeatherData(cityName);
      if (data) {
        setWeather(data);
        setForecast(data.forecast || []);
        setCity(cityName);
      } else {
        setWeather(null);
        setForecast([]);
        setError('Cidade não encontrada');
      }
    } catch {
      setWeather(null);
      setForecast([]);
      setError('Erro ao buscar dados');
    }
  }, []);

  // Inicializar com GPS
  const initLocation = useCallback(async (animations) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão negada');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    searchWeatherByCoords(latitude, longitude, animations);
  }, [searchWeatherByCoords]);

  return {
    city,
    setCity,
    weather,
    forecast,
    error,
    searchWeather,
    searchWeatherByCoords,
    initLocation,
  };
};
