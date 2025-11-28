// WeatherIcon.js
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WeatherIcon({ iconCode, size = 120, color = '#fff' }) {
  const mapIconName = (code) => {
    if (code === 'location') {
      return 'map-marker';
    }
    switch (code) {
      case 'c01d': return 'weather-sunny';
      case 'c01n': return 'weather-night';
      case 'c02d': return 'weather-partly-cloudy';
      case 'c02n': return 'weather-night-partly-cloudy';
      case 'c03d':
      case 'c03n':
        return 'weather-cloudy';
      case 'r01d':
      case 'r01n':
        return 'weather-rainy';
      case 't01d':
      case 't01n':
        return 'weather-lightning';
      case 's01d':
      case 's01n':
        return 'weather-snowy';
      case 'a01d':
      case 'a01n':
        return 'weather-fog';
      default:
        return 'weather-cloudy';
    }
  };

  const iconName = mapIconName(iconCode);

  return (
    <MaterialCommunityIcons
      name={iconName}
      size={size} 
      color={color}
    />
  );
}

