import React, {FC} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {DialogItem} from './Dialog.item';
import {DialogOptions} from './Dialog.types';

export const Dialog: FC<{
  options: DialogOptions[];
  onPress: (option: DialogOptions) => void;
}> = ({options, onPress}) => {
  const styles = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .6)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: 'white',
      padding: 20,
      width: Dimensions.get('screen').width * 0.6,
      borderRadius: 10,
      gap: 10,
    },
    title: {
      color: '#333',
      fontSize: 18,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Select from list</Text>
        {options.map((option, index) => {
          return <DialogItem key={index} option={option} onPress={onPress} />;
        })}
      </View>
    </View>
  );
};
