import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Expense } from '../types';

export default function ExpenseItem({ item }: { item: Expense }) {
  return (
    <View style={styles.expenseItem}>
      <Text style={styles.expenseText}>
        ₹{item.amount} • {item.category} • {item.date}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#eee',
    borderWidth: 1,
  },
  expenseText: {
    fontSize: 16,
  },
});
