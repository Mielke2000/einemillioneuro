import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        EineMillionEuro Fitness
      </Text>

      <Text style={styles.subtitle}>
        Willkommen in deiner Gym-App!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaaaaa',
    fontSize: 16,
    marginTop: 15,
  },
});