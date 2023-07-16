import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Select} from '../components/select/Select';

export const HomeView: FC = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 40,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Select />
    </SafeAreaView>
  );
};
