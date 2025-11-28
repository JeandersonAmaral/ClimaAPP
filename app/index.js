import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import CityInput from '../components/CityInput';
import WeatherCard from '../components/WeatherCard';
import { styles } from '../styles/style';
import { useWeather } from '../hooks/useWeather';
import { useAnimations } from '../hooks/useAnimations';

export default function App() {
  const { city, setCity, weather, forecast, error, searchWeather, initLocation } = useWeather();
  const animations = useAnimations(weather);
  
  const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const gradient = weather?.iconCode ? getGradientByIcon(weather.iconCode) : ['#0daae3', '#0f639f'];

  useEffect(() => { initLocation(animations); }, [initLocation]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={gradient} style={styles.mainCard}>
        <View style={styles.searchArea}>
          <View style={styles.searchBox}>
            <CityInput city={city} setCity={setCity} onSubmitEditing={() => searchWeather(city, animations)} />
          </View>
          <View style={styles.searchButton}>
            <TouchableOpacity style={styles.searchButtonInner} onPress={() => searchWeather(city, animations)}>
              <Text style={styles.searchButtonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <WeatherCard weather={weather} forecast={forecast} animations={animations} hora={hora} />
      </LinearGradient>
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por Jeanderson Amaral</Text>
      </View>
    </View>
  );
}

const getGradientByIcon = (iconCode) => {
  if (!iconCode) return ['#0daae3', '#0f639f'];
  const gradients = {
    'c01': ['#ffcc00ff', '#9f570fff'], 'c02': ['#6d99bfff', '#0f639f'],
    'c03': ['#757F9A', '#232526'], 'c04': ['#757F9A', '#232526'],
    'r': ['#314755', '#26a0da'], 'f': ['#314755', '#26a0da'],
    't': ['#20002c', '#cbb4d4'], 's': ['#83a4d4', '#b6fbff'], 'a': ['#606c88', '#3f4c6b']
  };
  for (const [key, value] of Object.entries(gradients)) {
    if (iconCode.startsWith(key)) return value;
  }
  return ['#0daae3', '#0f639f'];
};
