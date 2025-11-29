// WeatherCard.js
import React from 'react';
import { View, Text, Animated } from 'react-native';
import WeatherIcon from './WeatherIcon';
import { styles } from '../styles/style';

const formatarDiaSemanaComData = (dateStr) => {
  const d = new Date(dateStr);
  return `${d.getDate().toString().padStart(2, '0')}/${d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}`;
};

const getGradientByIcon = (iconCode) => {
  if (!iconCode) return ['#0daae3', '#0f639f'];
  const gradients = {
    'c01': ['#ffcc00ff', '#9f570fff'],
    'c02': ['#6d99bfff', '#0f639f'],
    'c03': ['#757F9A', '#232526'],
    'c04': ['#757F9A', '#232526'],
    'r': ['#314755', '#26a0da'],
    'f': ['#314755', '#26a0da'],
    't': ['#20002c', '#cbb4d4'],
    's': ['#83a4d4', '#b6fbff'],
    'a': ['#606c88', '#3f4c6b']
  };
  for (const [key, value] of Object.entries(gradients)) {
    if (iconCode.startsWith(key)) return value;
  }
  return ['#0daae3', '#0f639f'];
};

const WeatherCard = ({ 
  weather, 
  forecast, 
  animations, 
  hora,
  dataLegivel
}) => {
  return (
    <View> 
      <View style={styles.mainTop}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <WeatherIcon iconCode="location" size={28} />
          <Text style={styles.cityText}>{weather?.name || '--'}</Text>
        </View>
        <Text style={styles.timeText}>{hora}</Text>
        <Text style={styles.dateText}>{dataLegivel}</Text>
      </View>

      <View style={styles.mainBottom}>
        <View>
          <Animated.Text 
            style={[styles.tempText, { opacity: animations.tempAnim }]}
          >
            {weather ? Math.round(weather.temp) : '--'}°C
          </Animated.Text>
          <Text style={styles.minMaxText}>
            {weather 
              ? `${Math.round(weather.minTemp || weather.temp)}° / ${Math.round(weather.maxTemp || weather.temp)}°` 
              : '-- / --'
            }
          </Text>
          <Text style={styles.descText}>{weather?.description || '--'}</Text>
        </View>
        {weather ? (
          <WeatherIcon iconCode={weather.iconCode} />
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>

      <Animated.View style={{ opacity: animations.detailsAnim }}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabelTop}>Sensação térmica:</Text>
          <Text style={styles.detailValueTop}>{weather ? `${Math.round(weather.feels_like)}°C` : '--'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Probabilidade de chuva:</Text>
          <Text style={styles.detailValue}>{weather ? `${weather.chance_of_rain}%` : '--%'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Velocidade do vento:</Text>
          <Text style={styles.detailValue}>{weather ? `${weather.wind_speed} km/h` : '-- km/h'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Umidade do ar:</Text>
          <Text style={styles.detailValue}>{weather ? `${weather.humidity}%` : '--%'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Índice UV:</Text>
          <Text style={styles.detailValue}>{weather ? weather.uv_index : '--'}</Text>
        </View>
      </Animated.View>

      <Animated.View 
        style={[
          { 
            opacity: animations.forecastAnim,
            transform: [{
              translateY: animations.forecastAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [30, 0]
              })
            }]
          }
        ]}
      >
        <View style={styles.weekRow}>
          {forecast.map((day) => (
            <View key={day.date} style={styles.weekItem}>
              <Text style={styles.weekDay}>{formatarDiaSemanaComData(day.date)}</Text>
              <WeatherIcon iconCode={day.icon} size={50} />
              <Text style={styles.weekTemp}>
                {day.maxTemp != null ? `${Math.round(Number(day.maxTemp))}°C` : '--'}
              </Text>
            </View>
          ))}
        </View>
      </Animated.View>
    </View> 
  );
};

export default WeatherCard;
