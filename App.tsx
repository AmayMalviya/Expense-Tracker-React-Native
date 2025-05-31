import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AddExpenseScreen from './src/screens/AddExpense';
import ViewExpensesScreen from './src/screens/ViewExpense';
import { Expense } from '/Users/amaymalviya/Documents/Development/React Native/ExpenseTracker/src/types.ts';

export default function App() {
  const [screen, setScreen] = useState<'add' | 'view'>('add');
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setScreen('add')}>
          <Text style={styles.navText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('view')}>
          <Text style={styles.navText}>View</Text>
        </TouchableOpacity>
      </View>
      {screen === 'add' ? (
        <AddExpenseScreen expenses={expenses} setExpenses={setExpenses} switchToView={() => setScreen('view')} />
      ) : (
        <ViewExpensesScreen expenses={expenses} setExpenses={setExpenses} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF9DF',
    padding: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  navText: {
    fontSize: 18,
    color: '#007AFF',
  },
});
