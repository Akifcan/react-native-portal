import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DialogOptions} from './Dialog.types';

export const DialogItem: FC<{
  option: DialogOptions;
  onPress: (option: DialogOptions) => void;
}> = ({option, onPress}) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, .2)',
      padding: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 18,
      textTransform: 'capitalize',
      fontWeight: '600',
    },
  });
  const handlePress = () => {
    onPress(option);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{option.label}</Text>
    </TouchableOpacity>
  );
};
