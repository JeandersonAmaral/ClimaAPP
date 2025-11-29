// CityInput.js
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../styles/style';

export default function CityInput({ city, setCity, onSubmitEditing }) {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        styles.inputContainer,
        focused && { borderColor: '#ffffff' },
      ]}
    >
      <TextInput
        style={styles.input}
        placeholder="Digite a cidade. Ex: Maricá"
        value={city}
        onChangeText={setCity}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        placeholderTextColor="#ffffffff"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        selectionColor="#ffffff"
      />
    </View>
  );
}
