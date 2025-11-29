//weatherService.js
import Constants from 'expo-constants';

const API_KEY = Constants.expoConfig?.extra?.WEATHER_API_KEY;

if (!API_KEY) {
  console.error('API_KEY não encontrada! Verifique .env + app.json');
}

export async function fetchWeatherData(city, country = 'BR') {
  return fetchWeatherCore({ city, country });
}

export async function fetchWeatherDataByCoords(lat, lon) {
  return fetchWeatherCore({ lat, lon });
}

async function fetchWeatherCore({ city, country, lat, lon }) {
  try {
    const params = city 
      ? `city=${encodeURIComponent(city)}&country=${country}`
      : `lat=${lat}&lon=${lon}`;

    const currentUrl = `https://api.weatherbit.io/v2.0/current?${params}&key=${API_KEY}&lang=pt`;
    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?${params}&key=${API_KEY}&lang=pt&days=8`;

    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentUrl),
      fetch(forecastUrl)
    ]);

    console.log('CURRENT STATUS ===>', currentRes.status);
    console.log('FORECAST STATUS ===>', forecastRes.status);

    if (!currentRes.ok || !forecastRes.ok) {
      const [currentTxt, forecastTxt] = await Promise.all([
        currentRes.text(),
        forecastRes.text()
      ]);
      console.log('ERRORS:', { currentTxt, forecastTxt });
      return null;
    }

    const [currentJson, forecastJson] = await Promise.all([
      currentRes.json(),
      forecastRes.json()
    ]);

    const w = currentJson.data[0];
    const todayForecast = forecastJson.data[0];

    const forecast = (forecastJson.data || [])
      .slice(2, 7)
      .map(d => ({
        date: d.datetime,
        icon: d.weather.icon,
        maxTemp: d.max_temp ?? d.temp,
      }));

    return {
      name: w.city_name,
      temp: w.temp,
      minTemp: todayForecast.low_temp,
      maxTemp: todayForecast.high_temp,
      description: w.weather.description,
      iconCode: w.weather.icon,
      feels_like: w.app_temp,
      chance_of_rain: w.pop !== undefined ? w.pop : 0,
      wind_speed: (w.wind_spd * 3.6).toFixed(1),
      humidity: w.rh,
      uv_index: w.uv,
      forecast,
    };
  } catch (err) {
    console.log('FETCH WEATHER ERROR ===>', err?.message);
    return null;
  }
}
