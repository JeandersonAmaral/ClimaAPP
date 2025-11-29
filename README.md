# 🌤️ App de Previsão do Tempo - React Native

*App moderno com gradiente dinâmico conforme o clima*

Aplicativo mobile completo de previsão do tempo desenvolvido com **React Native + Expo**, consumindo a **Weatherbit API**. Interface fluida com gradientes que mudam conforme o clima, ícones animados e previsão de 5 dias. **100% funcional e responsivo**.

## ✨ **Demonstração das Funcionalidades**

| ☀️ Ensolarado | ⛅ Poucas Nuvens | 🌧️ Chuva | 🌫️ Nublado |
|---------------|------------------|-----------|-------------|
| <img width="327" height="826" alt="Sol" src="https://github.com/user-attachments/assets/a117f67b-6e22-4c7f-b96c-2950cd20d2f9" /> | <img width="327" height="829" alt="Poucas Nuvens" src="https://github.com/user-attachments/assets/288a95df-4edb-4e6b-9c4c-c4d0c091419c" />  | <img width="324" height="827" alt="Chuva" src="https://github.com/user-attachments/assets/ab5a2f28-5450-430f-9423-9089513e864f" />| <img width="325" height="829" alt="Nublado" src="https://github.com/user-attachments/assets/57db1c56-c593-4275-93e8-a4a69d5c3f21" /> |

## 🚀 **Funcionalidades Implementadas**

✅ **Busca inteligente de cidades brasileiras**  
✅ **Clima atual completo**: temperatura, sensação térmica, chuva (%), vento, umidade, UV  
✅ **Previsão de 5 dias** com ícones e temp. máxima  
✅ **Gradiente dinâmico** (17 condições de tempo diferentes)  
✅ **Ícones vetoriais** mapeados da Weatherbit → Material Icons  
✅ **Layout responsivo** (Web + Mobile)  
✅ **Tratamento de erros** (API limite, cidade não encontrada)  
✅ **Geolocalização automática**  
✅ **Animações suaves** (fade in + slide up)  
✅ **Arquitetura modular** com custom hooks  
✅ **Temperatura min/max real** (corrige bug)  

## 🛠️ **Stack Tecnológica**

```
├── React Native + Expo SDK
├── expo-linear-gradient (gradientes)
├── Animated API (animações nativas)
├── expo-location (GPS automático)
├── Weatherbit API
├── Custom Hooks (useWeather, useAnimations)
└── StyleSheet otimizado
```
## 🎯 **Como Executar (5 minutos)**

### 1. Clonar e instalar
```
git clone https://github.com/JeandersonAmaral/ClimaAPP
cd ClimaAPP
npm install
```
### 2. Configurar API Key GRÁTIS
1. Crie conta em [Weatherbit.io](https://www.weatherbit.io) → **Free tier** (500 calls/dia)
2. Copie sua API key
3. Edite `src/services/weatherService.js`:
```
const API_KEY = 'SUA_CHAVE_WEATHERBIT_AQUI';
```
### 3. Rodar o app
```
npx expo start
```
- **Celular**: Escaneie QR code com **Expo Go**
- **Web**: `w` no terminal
- **Android**: `a`
- **iOS**: `i`

## **Arquitetura do Projeto**

```
├── app/
│ └──index.js ← App principal
├── hooks/
│ ├── useWeather.js ← API + estado
│ └── useAnimations.js ← Animações nativas
├── components/
│ ├── WeatherCard.js ← Card principal
│ ├── CityInput.js ← Input cidade
│ └── WeatherIcon.js ← Ícones mapeados
├── services/
│ └── weatherService.js← API calls
└── styles/
└── style.js ← Estilos globais
```

## 🎨 **Destaques Técnicos**

### **Custom Hooks**
```
const { weather, searchWeather } = useWeather();
const animations = useAnimations(weather);
```
### **Gradientes Dinâmicos**
```
const getGradientByIcon = (iconCode) => {
if (iconCode.startsWith('c01')) return ['#ffcc00ff', '#9f570fff']; // Sol
if (iconCode.startsWith('r')) return ['#314755', '#26a0da']; // Chuva
// +15 condições...
}
```
### **Animações Nativas**
```
Animated.timing(tempAnim, { toValue: 1, duration: 800 }).start();
// Fade in temp + slide up forecast
```
### **Mapeamento de Ícones**
```
Weatherbit: c01d, r01d, t01n → MaterialIcons: weather-sunny, weather-rainy...
```

## ⚠️ **Limitações da API Gratuita**

| Plano | Limite Diário | Rate Limit | Solução |
|-------|---------------|------------|---------|
| **Free** | 500 calls | 5/min | ✅ Esperar reset ou nova key |
| **Dev**  | 10k calls  | 30/min| [$10/mês](https://weatherbit.io/pricing) |

**Status 429 = Limite excedido** (reseta em 24h)

## 📈 **Próximas Melhorias Planejadas**

- [ ] Notificações push de chuva
- [ ] Dark/Light mode
- [ ] Animações Lottie para clima
- [ ] Gráficos de temperatura (Recharts)
- [ ] Cache offline (AsyncStorage)

## 📝 **Licença**
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**MIT License** - © 2025 [Jeanderson Amaral](https://github.com/JeandersonAmaral)
```
> ✅ Uso comercial, modificação, distribuição OK  
> ⚠️ Mantenha copyright + LICENSE no código  
> 📄 [LICENSE completa](https://github.com/JeandersonAmaral/ClimaAPP/blob/main/LICENSE)
```




