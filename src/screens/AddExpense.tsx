import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Expense } from '../types';

interface Props {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  switchToView: () => void;
}

export default function AddExpense({ expenses, setExpenses, switchToView }: Props) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const addExpense = async () => {
    if (!amount || !category || !date) return;
    const newExpense: Expense = {
      id: Date.now().toString(),
      amount,
      category,
      date,
    };
    const updatedExpenses = [newExpense, ...expenses];
    setExpenses(updatedExpenses);
    await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setAmount('');
    setCategory('');
    setDate('');
    switchToView();
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Add Expense" onPress={addExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
