import React, {useState} from 'react';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import {useForm} from '../hooks/useForm';
import SubmitButton from './buttons/SubmitButton';

const Form = ({addUser}) => {
  const {userName, age, onChange, cleanForm} = useForm({
    userName: '',
    age: null,
  });

  const onSubmit = () => {
    if (userName && age) {
      addUser({
        userName,
        age,
      });
      cleanForm();
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={value => onChange(value, 'userName')}
        maxLength={50}
        style={styles.input}
        placeholder="Nombre"
        onSubmitEditing={onSubmit}
        value={userName}
      />
      <TextInput
        onChangeText={value => onChange(value, 'age')}
        maxLength={4}
        keyboardType={'number-pad'}
        style={styles.input}
        placeholder="Edad"
        onSubmitEditing={onSubmit}
        value={age}
      />
      <SubmitButton text="Agregar" onPress={onSubmit} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {padding: 20},
  input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    padding: 10,
  },
});
