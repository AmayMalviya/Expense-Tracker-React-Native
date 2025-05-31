import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Expense } from '../types';

export default function ExpenseItem({ item }: { item: Expense }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{item.category}</Text>
      <Text style={styles.amount}>${item.amount}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  amount: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
});
