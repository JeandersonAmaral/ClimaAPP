const API_KEY = '84520b71aa684314bfaa7c58c2675344';

export async function fetchWeatherData(city) {
  try {
    const currentUrl = `https://api.weatherbit.io/v2.0/current?city=${encodeURIComponent(city)}&country=BR&key=${API_KEY}&lang=pt`;
    const currentRes = await fetch(currentUrl);
    console.log('CURRENT STATUS ===>', currentRes.status);

    if (!currentRes.ok) {
      const txt = await currentRes.text();
      console.log('CURRENT ERROR BODY ===>', txt);
      return null;
    }

    const currentJson = await currentRes.json();
    const w = currentJson.data[0];

    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${encodeURIComponent(city)}&country=BR&key=${API_KEY}&lang=pt&days=8`;
    const forecastRes = await fetch(forecastUrl);
    console.log('FORECAST STATUS ===>', forecastRes.status);

    if (!forecastRes.ok) {
      const txt = await forecastRes.text();
      console.log('FORECAST ERROR BODY ===>', txt);
      return null;
    }

    const forecastJson = await forecastRes.json();
    const todayForecast = forecastJson.data[0]; // ← DIA ATUAL

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
      minTemp: todayForecast.low_temp,   // ← MIN HOJE
      maxTemp: todayForecast.high_temp,  // ← MAX HOJE
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

export async function fetchWeatherDataByCoords(lat, lon) {
  try {
    const currentUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}&lang=pt`;
    const currentRes = await fetch(currentUrl);
    console.log('CURRENT STATUS COORDS ===>', currentRes.status);

    if (!currentRes.ok) {
      const txt = await currentRes.text();
      console.log('CURRENT ERROR BODY COORDS ===>', txt);
      return null;
    }

    const currentJson = await currentRes.json();
    const w = currentJson.data[0];

    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${API_KEY}&lang=pt&days=8`;
    const forecastRes = await fetch(forecastUrl);
    console.log('FORECAST STATUS COORDS ===>', forecastRes.status);

    if (!forecastRes.ok) {
      const txt = await forecastRes.text();
      console.log('FORECAST ERROR BODY COORDS ===>', txt);
      return null;
    }

    const forecastJson = await forecastRes.json();
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
    console.log('FETCH WEATHER ERROR COORDS ===>', err?.message);
    return null;
  }
}
