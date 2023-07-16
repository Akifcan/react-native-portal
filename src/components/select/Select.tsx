import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import ArrowBottomIcon from './icon/arrow-bottom.svg';
import {Dialog} from './Dialog';
import {DialogOptions} from './Dialog.types';
import {Portal} from '../../store/portal/portal';

export const Select: FC = () => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 15,
      padding: 10,
      borderWidth: 2,
      borderColor: '#333',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    title: {
      color: '#333',
      fontSize: 16,
      fontWeight: '500',
    },
  });
  const [label, setLabel] = useState('Select from list');
  const [isOpen, setOpen] = useState(false);

  const onPress = () => {
    setOpen(true);
  };
  const onChange = (option: DialogOptions) => {
    setLabel(option.label);
    setOpen(false);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Portal watch={[isOpen]}>
        {isOpen && (
          <Dialog
            options={[
              {
                label: 'Option1',
                value: 'option1',
              },
              {
                label: 'Option2',
                value: 'option2',
              },
              {
                label: 'Option3',
                value: 'option3',
              },
              {
                label: 'Option4',
                value: 'option4',
              },
            ]}
            onPress={onChange}
          />
        )}
      </Portal>

      <Text style={styles.title}>{label}</Text>
      <ArrowBottomIcon width={30} height={30} />
    </TouchableOpacity>
  );
};
