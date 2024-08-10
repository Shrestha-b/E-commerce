import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import { RfH, RfW } from '../utils/helpers';

const HeightPicker = () => {
  const [selectedHeight, setSelectedHeight] = useState<string>('150 cm');

  const heightItems = Array.from({ length: 141 }, (_, index) => `${index + 1} cm`);

  const handleValueChange = (value: string) => {
    setSelectedHeight(value);
    console.log(value);
  };

  return (
      <Picker
        style={styles.picker}
        selectedValue={selectedHeight}
        pickerData={heightItems}
        onValueChange={handleValueChange}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    backgroundColor: 'white',
    width: RfW(100),
    height: RfH(465.5),
    marginTop: 200
  },
});

export default HeightPicker;
