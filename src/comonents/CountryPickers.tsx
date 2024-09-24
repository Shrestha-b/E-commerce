import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, Country } from '../themes/countryCode';  // Assuming you're defining types in './src/types'
import { responsiveFontSize } from '../utils/helpers';

export default function CountryPickers() {
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [country, setCountry] = useState<Country | null>(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(false);
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false);

  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Country Picker!</Text>
      
      {/* Options to toggle features */}
      <Option
        title='With country name on button'
        value={withCountryNameButton}
        onValueChange={setWithCountryNameButton}
      />
      <Option
        title='With flag'
        value={withFlag}
        onValueChange={setWithFlag}
      />
      <Option
        title='With emoji'
        value={withEmoji}
        onValueChange={setWithEmoji}
      />
      <Option
        title='With filter'
        value={withFilter}
        onValueChange={setWithFilter}
      />
      <Option
        title='With calling code'
        value={withCallingCode}
        onValueChange={setWithCallingCode}
      />
      <Option
        title='With alpha filter code'
        value={withAlphaFilter}
        onValueChange={setWithAlphaFilter}
      />
      
      {/* Country Picker */}
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible
      />
      
      <Text style={styles.instructions}>Press on the flag to open the modal</Text>
      
      {/* Display selected country data */}
      {country && (
        <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
      )}
    </View>
  );
}

// Option component
const Option = ({
  title,
  value,
  onValueChange,
}: {
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}) => (
  <View style={styles.optionContainer}>
    <Text>{title}</Text>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: responsiveFontSize(19),
    marginBottom: 20,
  },
  instructions: {
    fontSize: responsiveFontSize(16),
    marginVertical: 10,
  },
  data: {
    fontSize: responsiveFontSize(14),
    marginTop: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
