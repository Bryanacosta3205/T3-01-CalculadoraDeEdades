import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CounterButton from './components/buttons/CounterButton';
import Form from './components/Form';
import Item from './components/Item';

const App = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const addUser = user => {
    setUsers([...users, user]);
  };

  const increase = () => {
    setCounter(counter + 1);
    const increased = [...users];
    for (const user of increased) {
      user.age = parseInt(user.age) + 1;
    }
    setUsers(increased);
  };

  const decrement = () => {
    setCounter(counter - 1);
    const increased = [...users];
    for (const user of increased) {
      user.age = parseInt(user.age) - 1;
    }
    setUsers(increased);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Contactos </Text>
      <Form addUser={addUser} />
      <ScrollView
        showsVerticalScrollIndicator="false"
        showsVerticalScrollIndicator="false"
        contentContainerStyle={styles.itemContainer}>
        {users.map((user, i) => (
          // Use an id instead of i
          <Item key={i} userName={user.userName} age={user.age} />
        ))}
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.counterContainer}>
          <CounterButton text="-" onPress={decrement} />
          <Text style={styles.counterText}>{counter}</Text>
          <CounterButton text="+" onPress={increase} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {fontSize: 30, paddingLeft: 20, fontWeight: 'bold'},
  itemContainer: {alignItems: 'center', flexGrow: 1},
  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '50%',
    justifyContent: 'space-around',
  },
  counterText: {fontSize: 20, fontWeight: 'bold'},
});

export default App;
