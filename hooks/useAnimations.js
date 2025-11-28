import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const useAnimations = (weather) => {
  const tempAnim = useRef(new Animated.Value(0)).current;
  const forecastAnim = useRef(new Animated.Value(0)).current;
  const detailsAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (weather) {
      Animated.timing(tempAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();
      setTimeout(() => Animated.timing(forecastAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start(), 200);
      setTimeout(() => Animated.timing(detailsAnim, { toValue: 1, duration: 1000, useNativeDriver: true }).start(), 400);
    }
  }, [weather]);

  return { tempAnim, forecastAnim, detailsAnim };
};
